import React from 'react';

const EducationPage = () => {
  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Machine Learning",
      institution: "Vel Tech University",
      year: "2021 - 2025",
      grade: "CGPA: 8.8",
      logo: "https://i.ibb.co/zHfT30nb/vel-removebg-preview.png", // Fixed direct image URL
      courses: ["AI","Machine Learning", "Deep Learning", "Computer Vision", "NLP"]
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Raman Bhavan 2",
      year: "2019 - 2021",
      grade: "Percentage: 85%",
      logo: "https://i.ibb.co/b5wD84qJ/sri-removebg-preview.png", // Add logo to public folder
      courses: ["Mathematics", "Physics", "Chemistry"]
    },
    {
      degree: "10th Standard",
      institution: "Bhashyam High School",
      year: "2019",
      grade: "GPA: 9.8",
      logo: "https://i.ibb.co/prrfhnmR/bh-removebg-preview.png", // Add logo to public folder
      
      courses: ["Mathematics", "Science", "Social Studies"]
    }
  ];

  return (
    <section className="min-h-screen pt-20 bg-white dark:bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col items-center">
                <div className={`w-28 h-28 mb-4 p-2 rounded-lg flex items-center justify-center ${
                  edu.institution === "Vel Tech University" || 
                  edu.institution.includes("Sri Chaitanya") || 
                  edu.institution.includes("Bhashyam") ? 'bg-transparent' : 'bg-white dark:bg-gray-700'
                }`}>
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-full h-full object-contain filter dark:brightness-90 max-w-[90%]"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-medium text-gray-500 dark:text-gray-400 tracking-wide">
                    {edu.institution}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400">
                    <span className="text-sm">{edu.year}</span>
                    <span>•</span>
                    <span className="text-sm font-medium">{edu.grade}</span>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Key Subjects</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {edu.courses.map((course, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300 text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationPage;

