import { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        'service_i9jcect',
        'template_nyuvm22',
        form.current,
        'JWkCIqyND5f14-sUL'
      )
      .then((result) => {
        console.log('Message sent successfully', result.text);
        setIsSubmitted(true);
        setIsLoading(false);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      })
      .catch((error) => {
        console.error('Failed to send message', error.text);
        alert('Failed to send message. Please try again.');
        setIsLoading(false);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+977 9824000255',
      href: 'tel:+9779824000255',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'subhekshaadhikari@gmail.com',
      href: 'mailto:subhekshaadhikari@gmail.com',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jhapa, Nepal',
      href: '#',
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
              Get In Touch
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Contact Me
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or need assistance? Let's connect and bring your ideas to life
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">
                Drop me a message
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Have a project in mind or need assistance? Get in touch and let's work together to bring your ideas to life.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="group block p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-gradient-to-br ${item.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-slate-500 mb-1">
                          {item.label}
                        </div>
                        <div className="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block relative">
              <div className="absolute -left-20 top-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -right-20 bottom-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur-2xl opacity-10"></div>
            
            <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 p-8 lg:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-600">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <div ref={form} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      disabled={isLoading}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none placeholder:text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="group w-full px-6 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-indigo-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-slate-900"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-12 border-t border-slate-200">
          <p className="text-slate-600 mb-4">
            Prefer to connect on social media?
          </p>
          <div className="flex justify-center gap-4">
            {['LinkedIn', 'GitHub', 'Twitter'].map((platform, index) => (
              <button
                key={index}
                className="px-6 py-2 bg-white text-slate-700 rounded-full border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md font-medium"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;