import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectsPage = () => {
  const projects = [

    {
      title: "AI-Powered Soil Moisture-Based Irrigation Control System",
      description: "Developed an AI/ML-powered irrigation control system that uses real-time soil moisture data to automate and optimize water usage in agriculture. By combining IoT sensors with machine learning algorithms, the system predicts optimal irrigation schedules based on soil moisture, weather conditions, and crop type.",
      image: "https://i.ibb.co/s8Mvjcn/image-1.jpg",
      
      tech: ["AI", "Machine Learning", "IOT"],
      github: "https://github.com/DVP03/AI-powered-Soil-Moisture-Based-Irrigation-Control"
    },
    {
      title: "Tomato Leaf Disease Detection",
      description: "Developed and trained a Convolutional Neural Network (CNN) on 5,000+ tomato leaf images to accurately detect and classify multiple diseases, achieving 95.8% model accuracy.",
      image: "https://i.ibb.co/fYH7X0Kp/image.jpg",
      tech: ["Python", "TensorFlow", "OpenCV", "scikit-learn", "CNN"],
      github: "https://github.com/DVP03/Tomato-Leaf-Disease-Detection"
    },
    {
      title: "Development Of AI-Driven Platform For Connecting Surplus Food With Orphanages",
      description: "Developing an AI-driven platform that connects surplus food donors with orphanages using ML-based matching and real-time tracking. The system reduces food waste while ensuring timely, efficient food distribution to those in need.",
      image: "https://i.ibb.co/7J2gnK6r/image-2.jpg",
      tech: ["Python", "AI Algorithms", "React", "MongoDB"],
      github: "https://github.com/DVP03/Food-Donation-"
    }
  ];

  return (
    <section className="min-h-screen pt-20 bg-white dark:bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col h-full">
                <div className="w-full h-48 mb-6 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col flex-grow space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-justify">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow text-justify leading-relaxed">
                    {project.description}
                  </p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-start">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                      >
                        <FaGithub size={20} />
                      </a>
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

export default ProjectsPage;


