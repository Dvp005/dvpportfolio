import React from 'react';

const ExperiencePage = () => {
  const experiences = [
    {
      title: "AI/ML Developer Intern",
      company: "Solutions by Text",
      period: "Dec 2024 - June 2025 (6 months)",
      logo: "https://i.ibb.co/wFdz34YS/sbt-removebg-preview.png", // Add your company logo URL here
      
      responsibilities: [
        "Built ChatGPT-style assistant using OpenAI agents",
        "Reduced developer time by 60% through automation",
        "Worked on implementing Model Context protocol(MCP)",

      ],
      skills: ["Python", "Agents", "Machine Learning", "NLP","TailwindCSS", "Reactjs"]
    }
  ];

  return (
    <section className="min-h-screen pt-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Experience
        </h2>
        <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-24 h-24 p-2 rounded-lg flex items-center justify-center bg-transparent">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide">
                      {exp.company}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </p>
                  </div>
                  
                  <div className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <p key={idx}>• {resp}</p>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Skills & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300 text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-200"
                        >
                          {skill}
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

export default ExperiencePage;
