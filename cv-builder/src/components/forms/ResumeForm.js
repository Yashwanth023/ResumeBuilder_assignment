import React from 'react';
import { Box } from '@mui/material';
import { Droppable } from 'react-beautiful-dnd';
import PersonalInfoSection from './sections/PersonalInfoSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import SkillsSection from './sections/SkillsSection';
import DraggableSection from '../shared/DraggableSection';

export default function ResumeForm() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Droppable droppableId="resume-sections">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <DraggableSection id="personal" index={0}>
              <PersonalInfoSection />
            </DraggableSection>
            <DraggableSection id="experience" index={1}>
              <ExperienceSection />
            </DraggableSection>
            <DraggableSection id="education" index={2}>
              <EducationSection />
            </DraggableSection>
            <DraggableSection id="skills" index={3}>
              <SkillsSection />
            </DraggableSection>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Box>
  );
}

