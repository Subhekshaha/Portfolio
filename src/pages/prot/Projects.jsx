import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Donation Website',
      description: 'A multi-platform website that visualizes for both donor and receiver. Contains all the ongoing donation events, volunteering posts including GoFundMe.',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&auto=format&fit=crop&q=80',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      title: 'Helping Hands',
      description: 'An e-commerce website which provides services - like hiring workers as kitchen helpers, cleaners, maintenance workers and more.',
      tags: ['JavaScript', 'CSS', 'API'],
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      title: 'TODO App',
      description: 'A task management web app that allows users to add, update, and delete daily tasks, helping improve productivity and organization.',
      tags: ['React', 'Local Storage', 'UI/UX'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=80',
      gradient: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider px-4 py-2 bg-indigo-100 rounded-full">
              Portfolio
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Recent Work
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills in web development and design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 lg:space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center group`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300 z-10`}></div>
                  
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Hover overlay with actions */}
                  <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
                    <button className="p-4 bg-white rounded-full hover:bg-indigo-600 hover:text-white transform hover:scale-110 transition-all duration-200 shadow-lg">
                      <ExternalLink size={24} />
                    </button>
                    <button className="p-4 bg-white rounded-full hover:bg-indigo-600 hover:text-white transform hover:scale-110 transition-all duration-200 shadow-lg">
                      <Github size={24} />
                    </button>
                  </div>

                  {/* Project number badge */}
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center z-30">
                    <span className="text-2xl font-bold text-slate-900">
                      {String(project.id).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Decorative element */}
                <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-2xl blur-3xl opacity-20 -z-10`}></div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  View Project
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-20">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            View All Projects
            <div className="p-2 bg-slate-100 rounded-full group-hover:bg-indigo-100 transition-colors duration-200">
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;