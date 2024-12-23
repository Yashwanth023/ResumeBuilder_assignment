import React, { useState, useRef, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { DroppableContainer } from './DroppableContainer';
import { DraggableSection } from './DraggableSection';
import { ImageUpload } from './ImageUpload';
import { ExportOptions } from './ExportOptions';
import { useAutoSave } from '../hooks/useAutoSave';
import { CreativeTemplate } from './templates/CreativeTemplate';
import { MinimalistTemplate } from './templates/MinimalistTemplate';

const initialSections = [
  'personal',
  'experience',
  'education',
  'skills'
];

export const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      photo: null
    },
    experience: [],
    education: [],
    skills: []
  });

  const [sections, setSections] = useState(initialSections);
  const [selectedTemplate, setSelectedTemplate] = useState('creative');
  const templateRef = useRef(null);

  useAutoSave(resumeData, async (data) => {
    try {
      await fetch('/api/resume/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error('Auto-save failed:', error);
    }
  });

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(sections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSections(items);
  };

  const handleImageUpload = (imageData) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        photo: imageData
      }
    }));
  };

  const renderTemplate = () => {
    const props = { data: resumeData };
    switch (selectedTemplate) {
      case 'creative':
        return <CreativeTemplate {...props} />;
      case 'minimalist':
        return <MinimalistTemplate {...props} />;
      default:
        return <CreativeTemplate {...props} />;
    }
  };

  return (
    <div className="grid grid-cols-2 gap-8 p-8">
      <div className="space-y-6">
        <div className="mb-6">
          <select
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="creative">Creative Template</option>
            <option value="minimalist">Minimalist Template</option>
          </select>
        </div>

        <ImageUpload
          onImageUpload={handleImageUpload}
          currentImage={resumeData.personalInfo.photo}
        />

        <DroppableContainer onDragEnd={handleDragEnd}>
          {sections.map((section, index) => (
            <DraggableSection key={section} id={section} index={index}>
              {/* Render form fields based on section type */}
              {/* This is where you'd put your existing form fields */}
            </DraggableSection>
          ))}
        </DroppableContainer>
      </div>

      <div className="sticky top-8">
        <div ref={templateRef}>
          {renderTemplate()}
        </div>
        <ExportOptions
          resumeData={resumeData}
          templateRef={templateRef}
        />
      </div>
    </div>
  );
};

