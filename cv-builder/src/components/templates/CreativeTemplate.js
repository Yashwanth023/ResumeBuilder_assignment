import React from 'react';

export const CreativeTemplate = ({ data }) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 min-h-[297mm] w-[210mm]">
      <div className="flex gap-4 items-start">
        {personalInfo.photo && (
          <img
            src={personalInfo.photo}
            alt={personalInfo.fullName}
            className="w-32 h-32 rounded-full object-cover"
          />
        )}
        <div>
          <h1 className="text-4xl font-bold text-purple-800">{personalInfo.fullName}</h1>
          <p className="text-gray-600">{personalInfo.email} | {personalInfo.phone}</p>
          <p className="text-gray-600">{personalInfo.address}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="mb-4 bg-white bg-opacity-50 p-4 rounded-lg">
            <h3 className="font-bold">{exp.position}</h3>
            <p className="text-purple-700">{exp.company}</p>
            <p className="text-sm text-gray-600">{exp.startDate} - {exp.endDate}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-purple-200 px-3 py-1 rounded-full text-purple-800">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

