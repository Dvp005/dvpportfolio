import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-justify">
              I'm a passionate AI/ML developer and software engineer focused on building intelligent systems that drive real-world impact. With a strong foundation in machine learning, deep learning, and full-stack development, I enjoy solving complex problems through innovation, automation, and data-driven solutions. My work spans across developing generative AI applications, intelligent agents, and scalable software systems, blending AI capabilities with robust engineering practices. I'm constantly exploring emerging technologies to stay ahead in the fast-paced world of artificial intelligence and software development.
            </p>
           
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">6 months</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Projects</h3>
              <p className="text-gray-600 dark:text-gray-300">10+ completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
