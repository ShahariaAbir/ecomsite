import React from 'react';
import { Shield, Target, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Excellence', value: '10+' },
    { label: 'Happy Customers', value: '50K+' },
    { label: 'Products', value: '1000+' },
    { label: 'Countries', value: '25+' }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Quality Assurance',
      description: 'We ensure every product meets our high standards of excellence.'
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: 'Innovation',
      description: 'Constantly evolving to bring you the latest in technology and fashion.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority in everything we do.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: 'Premium Quality',
      description: 'Only the finest materials and craftsmanship make it to our shelves.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">About LUXE</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Redefining luxury shopping for the modern era
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-purple-400">{stat.value}</p>
                <p className="text-gray-300 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 glass-card mx-4">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Founded in 2014, LUXE began with a vision to transform the luxury shopping experience. 
              We believed that premium products should be accessible to discerning customers worldwide, 
              backed by exceptional service and a commitment to authenticity.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Today, we're proud to be a leading destination for luxury goods, serving customers across 
              the globe with a carefully curated selection of premium products and an unwavering 
              dedication to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-card text-center p-6">
                <div className="inline-block p-3 rounded-full bg-purple-600/10 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;