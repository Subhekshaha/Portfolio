import { Code, Palette, Sparkles, Zap, Database, Globe } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Web Design', icon: Palette },
    { name: 'Frontend Development', icon: Code },
    { name: 'JavaScript', icon: Zap },
    { name: 'React', icon: Sparkles },
    { name: 'Responsive Design', icon: Globe },
    { name: 'UI/UX', icon: Palette },
    // Duplicate for seamless loop
    { name: 'Web Design', icon: Palette },
    { name: 'Frontend Development', icon: Code },
    { name: 'JavaScript', icon: Zap },
    { name: 'React', icon: Sparkles },
    { name: 'Responsive Design', icon: Globe },
    { name: 'UI/UX', icon: Palette },
  ];

  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 w-full py-6 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent animate-pulse"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
      
      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>

      {/* Scrolling skills container */}
      <div className="relative z-10">
        <div className="flex animate-scroll">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 px-8 group whitespace-nowrap"
              >
                <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20 group-hover:bg-indigo-500/20 group-hover:border-indigo-400/40 transition-all duration-300">
                  <Icon size={18} className="text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                </div>
                <span className="text-sm md:text-base font-semibold text-slate-200 tracking-wide uppercase group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                <div className="w-1 h-1 rounded-full bg-indigo-400/50 ml-4"></div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Skills;