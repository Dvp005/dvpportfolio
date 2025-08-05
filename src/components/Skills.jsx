import React from 'react';
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaBrain,
  FaRobot,
  FaMicrochip, // Add this import
} from 'react-icons/fa';
import { SiTensorflow, SiScikitlearn } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';

const Skills = () => {
  const skills = [
    { name: 'AI', icon: <FaMicrochip size={40} className="text-[#00D8FF]" /> },
    { name: 'Machine Learning', icon: <FaBrain size={40} className="text-[#FF4B4B]" /> },
    { name: 'Generative AI', icon: <FaRobot size={40} className="text-[#7F00FF]" /> },
    { name: 'Python', icon: <FaPython size={40} className="text-[#4B8BBE] group-hover:text-[#FFD43B] transition-colors duration-300" /> },
    { name: 'React', icon: <FaReact size={40} className="text-[#61DAFB]" /> },
    { name: 'TensorFlow', icon: <SiTensorflow size={40} className="text-[#FF6F00]" /> },
    { name: 'scikit-learn', icon: <SiScikitlearn size={40} className="text-[#F7931E]" /> },
    { name: 'SQL', icon: <FaDatabase size={40} className="text-[#4479A1]" /> },
    { name: 'Docker', icon: <FaDocker size={40} className="text-[#2496ED]" /> }
    
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-2">
                {skill.icon}
              </div>
              <h3 className="text-gray-900 dark:text-gray-100 font-medium">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
