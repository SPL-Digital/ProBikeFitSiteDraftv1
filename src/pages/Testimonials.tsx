import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "David Carman",
      location: "Director, Downer EDI Mining/Erdinger Alkoholfrei Team",
      rating: 5,
      text: "It didn't take long for us to see the improvement in the team's performance after Gary fitted our riders. Most niggling, reoccurring injuries were no longer a problem and rider performances lifted. There was even a rise in rider's power test results.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Henk Vogels",
      location: "Performance Coaching / SBS Cycling Commentator",
      rating: 5,
      text: "He brings a high level of expertise and experience to the bike fitting process. Gary is a good bloke and goes the extra mile to help out fellow cyclists reach their goals. I am happy to recommend him as an expert bike fitter.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Marion Summerer",
      location: "ITU World Champion, Triathlon Coach",
      rating: 5,
      text: "Gary's expertise in the field is exceptional, and I recommend him without hesitation to anybody - from the novice rider who wants to be more comfortable on their bike, to elite athletes who are keen to get that last bit of power out of their machine.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 4,
      name: "Mark Smoothy",
      location: "Founder, Smiling for Smiddy",
      rating: 5,
      text: "The great thing about Gary's services, are that he thinks outside the box. It is not just the fit you will get, but advice on the cause of some of the problems associated outside of a good bike fit. He is the full package.",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 5,
      name: "Bernie Sulzberger",
      location: "Professional Cyclist, Drapac Cycling Team",
      rating: 5,
      text: "ProBikeFit was proud to play a small part in both these riders successful careers. Gary's professional approach and expertise made a significant difference in my competitive performance.",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 6,
      name: "Team Rider",
      location: "Queensland Road Championships",
      rating: 5,
      text: "Since Gary's fit, our riders have gone on to multiple top ten finishes at the National Road Series and a 3rd place at the Australian U19 Road Championships. The team also claimed gold in the Queensland U/19 Road Championships.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-[#d1d423] fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#494949] mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-[#8c8c8a] max-w-3xl mx-auto leading-relaxed">
              Hear from cyclists who have transformed their riding experience through professional bike fitting
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-[#494949] text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#8c8c8a] text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-[#494949] leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-[#d1d423] mb-2">500+</div>
              <div className="text-[#494949] font-medium">Successful Fittings</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-[#d1d423] mb-2">98%</div>
              <div className="text-[#494949] font-medium">Client Satisfaction</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-[#d1d423] mb-2">15+</div>
              <div className="text-[#494949] font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#494949] mb-6">
            Ready to Transform Your Ride?
          </h2>
          <p className="text-xl text-[#8c8c8a] mb-8 leading-relaxed">
            Join hundreds of satisfied cyclists who have improved their performance and comfort
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-[#d1d423] text-[#494949] px-8 py-4 rounded-lg font-semibold hover:bg-[#c4c71f] transition-all duration-300 flex items-center justify-center group"
            >
              View Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#d1d423] text-[#494949] px-8 py-4 rounded-lg font-semibold hover:bg-[#d1d423] transition-all duration-300"
            >
              Contact Gary
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;