import { useState } from 'react';
import { Menu, X, Mail, FileDown } from 'lucide-react';
import profileImage from "../../assets/final.png"
import logo from "../../assets/Signature.png"

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { title: 'About Me ', description: 'Learn more about me', href: '#about' },
        { title: 'My Projects', description: 'See all my work', href: '#projects' },
        { title: 'Contact', description: 'Get in touch', href: '#contact' }
    ];

    return (
        <section className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

            <div className="relative z-10 w-full pl-6 sm:pl-8 lg:pl-12 py-6">
                {/* Navigation */}
                <nav className="flex items-center justify-between py-6 px-[7.5vw]">
                    {/* Logo */}
                    {/* <div className="relative group">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                <div>
            <img src={logo} alt="" />
          </div>
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></div>
          </div>
         */}
                    <div className="relative group">
                        {/* Logo at top-left */}
                        <img
                            src={logo}
                            alt="logo"
                            className="w-auto h-[40px] object-contain h-auto"
                        />
                    </div>


                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-12">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="group relative"
                            >
                                <div className="text-sm font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors duration-200">
                                    {item.title}
                                </div>
                                <div className="text-xs text-slate-500 mt-0.5 group-hover:text-slate-600 transition-colors">
                                    {item.description}
                                </div>
                                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></div>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-slate-700 hover:bg-white/50 rounded-lg transition-colors"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden absolute top-24 left-6 right-6 bg-white rounded-2xl shadow-xl p-6 z-50 border border-slate-200">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="block py-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 -mx-6 px-6 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <div className="font-semibold text-slate-900">{item.title}</div>
                                <div className="text-sm text-slate-500 mt-1">{item.description}</div>
                            </a>
                        ))}
                    </div>
                )}

                {/* Hero Content */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-12 lg:mt-20">
                    {/* Left Column - Text Content */}
                    <div className="order-2 lg:order-1 space-y-8">
                        {/* Greeting */}
                        <div className="space-y-4">
                            <div className="text-5xl sm:text-6xl lg:text-7xl animate-bounce inline-block">
                                👋🏻
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-700">
                                    Hello!
                                </h2>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
                                    I'm Subheksha
                                </h1>
                            </div>
                        </div>

                        {/* Role Badge */}
                        <div className="flex items-center gap-4">
                            <div className="h-px w-20 bg-gradient-to-r from-indigo-500 to-transparent"></div>
                            <span className="text-xl sm:text-2xl font-medium text-slate-700">
                                Developer
                            </span>
                            <span className="text-2xl">✨</span>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Hello! I'm Subheksha, <span className="font-semibold text-slate-900">an aspiring developer</span> with a passion for problem-solving, thoughtful design, and meaningful digital experiences.
                        </p>

                        {/* Features List */}
                        <div className="space-y-4">
                            {[
                                'Passionate about building clean and user-friendly web interfaces',
                                'Strong foundation in HTML, CSS, JavaScript & React',
                                'Always learning, improving, and exploring new technologies'
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3 group">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
                                        <span className="text-sm">✓</span>
                                    </div>
                                    <p className="text-slate-600 group-hover:text-slate-900 transition-colors">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="group px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
                                <Mail size={18} />
                                Let's talk
                            </button>
                            <button className="px-8 py-3 bg-white text-slate-900 rounded-full font-medium border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
                                <FileDown size={18} />
                                Download CV
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative group">
                            {/* Decorative border */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

                            {/* Image container */}
                            <div className="relative">
                                {/* <div className="w-full h-full bg-gradient-to-br from-indigo-200 to-blue-200 flex items-center justify-center">
                                    {/* Placeholder for your photo */}
                                    {/* <div> */}
                                    
                                    {/* </div> */}
                                    {/* <div className="text-6xl">👤</div> */}
                                {/* </div>  */}
                                    <img src={profileImage} alt="" />
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-slate-200 animate-pulse">
                                <div className="text-2xl">💻</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavBar;