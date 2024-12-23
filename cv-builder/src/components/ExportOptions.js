import React from 'react';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun } from 'docx';

export const ExportOptions = ({ resumeData, templateRef }) => {
  const exportToPDF = async () => {
    const content = templateRef.current;
    const canvas = await html2canvas(content);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf');
  };

  const exportToWord = () => {
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: resumeData.personalInfo.fullName,
                bold: true,
                size: 28,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${resumeData.personalInfo.email} | ${resumeData.personalInfo.phone}`,
                size: 24,
              }),
            ],
          }),
          // Add more sections here
        ],
      }],
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, 'resume.docx');
    });
  };

  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={exportToPDF}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Export as PDF
      </button>
      <button
        onClick={exportToWord}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Export as Word
      </button>
    </div>
  );
};

