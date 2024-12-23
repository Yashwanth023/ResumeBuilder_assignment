import React from 'react';

export const MinimalistTemplate = ({ data }) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="bg-white p-8 min-h-[297mm] w-[210mm]">
      <header className="border-b-2 pb-4 mb-6">
        <div className="flex justify-between items-center">
          {personalInfo.photo && (
            <img
              src={personalInfo.photo}
              alt={personalInfo.fullName}
              className="w-24 h-24 rounded-full object-cover"
            />
          )}
          <div className="text-right">
            <h1 className="text-3xl font-light">{personalInfo.fullName}</h1>
            <p className="text-gray-600">{personalInfo.email}</p>
            <p className="text-gray-600">{personalInfo.phone}</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <section className="mb-6">
            <h2 className="text-xl font-light mb-4 border-b">Experience</h2>
            {experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-medium">{exp.position}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.startDate} - {exp.endDate}</p>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </section>
        </div>

        <div>
          <section className="mb-6">
            <h2 className="text-xl font-light mb-4 border-b">Skills</h2>
            <div className="space-y-2">
              {skills.map((skill, index) => (
                <p key={index} className="text-gray-700">{skill}</p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

