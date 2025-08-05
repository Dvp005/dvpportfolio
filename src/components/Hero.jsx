import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Profile Image */}
          <div className="relative mb-8">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-black dark:border-white shadow-xl">
              <img
                src="https://i.ibb.co/3YV23NfX/your-image.jpg" // Make sure to use the direct image URL
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/200'; // Fallback image if main image fails
                }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold text-black dark:text-white mb-4">
              Hi, I'm <span className="text-gray-800 dark:text-gray-200">S G DEVI VARA PRASAD</span>
            </h1>
            <h2 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">
              AIML Developer & Software Developer
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-8">
              I create intelligent solutions using cutting-edge AI technologies.
              Passionate about machine learning and software development.
            </p>
            
            {/* Buttons */}
            <div className="flex justify-center space-x-4 mb-12">
              <Link
                to="/contact"
                className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-100 transition duration-300"
              >
                Contact Me
              </Link>
              <a
                href="https://drive.google.com/file/d/1rxincRSLiEbe95rUEzsBKvzOtF5XC5cy/view?usp=sharing"
                className="border border-black text-black dark:border-white dark:text-white px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/DVP03/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/devi-vara-prasad-s-g"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:text-[#004182] transition-colors duration-200"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
