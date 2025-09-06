import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Clock, Target, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#494949] mb-6">
                Meet Gary
                <span className="text-[#d1d423]"> Your Bike Fit Expert</span>
              </h1>
              <p className="text-xl text-[#8c8c8a] mb-8 leading-relaxed">
                With over 23 years of experience in professional bike fitting, 
                Gary has helped hundreds of cyclists achieve optimal performance 
                and comfort on their bikes.
              </p>
              <Link
                to="/contact"
                className="bg-[#d1d423] text-[#494949] px-8 py-4 rounded-lg font-semibold hover:bg-[#c4c71f] transition-all duration-300 inline-flex items-center group"
              >
                Book a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Gary performing bike fitting"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#494949] mb-6">
              Qualifications & Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-[#d1d423] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#494949]" />
              </div>
              <h3 className="text-xl font-semibold text-[#494949] mb-2">Certified Fitter</h3>
              <p className="text-[#8c8c8a]">Retül Master Fitter</p>
            </div>

            <div className="text-center">
              <div className="bg-[#d1d423] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#494949]" />
              </div>
              <h3 className="text-xl font-semibold text-[#494949] mb-2">500+ Clients</h3>
              <p className="text-[#8c8c8a]">Successful fittings completed</p>
            </div>

            <div className="text-center">
              <div className="bg-[#d1d423] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#494949]" />
              </div>
              <h3 className="text-xl font-semibold text-[#494949] mb-2">25+ Years</h3>
              <p className="text-[#8c8c8a]">Professional experience</p>
            </div>

            <div className="text-center">
              <div className="bg-[#d1d423] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#494949]" />
              </div>
              <h3 className="text-xl font-semibold text-[#494949] mb-2">Precision Tools</h3>
              <p className="text-[#8c8c8a]">State-of-the-art equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#494949] mb-6">
              The Fitting Process
            </h2>
            <p className="text-xl text-[#8c8c8a] max-w-3xl mx-auto">
              A systematic approach to achieving the perfect bike fit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="bg-[#d1d423] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-[#494949] font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#494949] mb-4">Assessment</h3>
              <p className="text-[#8c8c8a]">
                Comprehensive evaluation of your current position, flexibility, 
                and any pain points or discomfort you experience while riding.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="bg-[#d1d423] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-[#494949] font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#494949] mb-4">Analysis</h3>
              <p className="text-[#8c8c8a]">
                Detailed biomechanical analysis using advanced tools to identify 
                optimal positioning for your unique body geometry and riding style.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="bg-[#d1d423] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-[#494949] font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#494949] mb-4">Adjustment</h3>
              <p className="text-[#8c8c8a]">
                Precise adjustments to your bike setup with detailed documentation 
                and follow-up support to ensure lasting comfort and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#494949] mb-6">
              My Journey in Bike Fitting
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-[#494949]">
            <p className="text-xl leading-relaxed mb-6">
              My passion for bike fitting began during my own competitive cycling career. 
              After struggling with persistent knee pain and inefficient positioning, 
              I discovered the transformative power of proper bike fit.
            </p>
            
            <p className="text-lg leading-relaxed mb-6 text-[#8c8c8a]">
              This personal experience drove me to pursue professional certification 
              and dedicate my career to helping other cyclists achieve the same 
              breakthrough in comfort and performance that changed my own riding experience.
            </p>
            
            <p className="text-lg leading-relaxed text-[#8c8c8a]">
              Today, I combine cutting-edge biomechanical analysis with years of 
              hands-on experience to provide each client with a truly personalized 
              fitting experience. Whether you're a weekend warrior or a competitive 
              athlete, I'm committed to helping you ride better, longer, and pain-free.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;