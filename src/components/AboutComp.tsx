import React from 'react';

const AboutComp = () => {
  const sections = [
    {
      title: 'Our Mission',
      content: 'At [Your Company Name], our mission is to provide top-notch services/products that enhance the lives of our customers. We strive to deliver excellence in everything we do.',
      image: 'https://via.placeholder.com/600x300', // Replace with your image URL
    },
    {
      title: 'Our Vision',
      content: 'We envision a world where our services/products are integral to daily life, bringing convenience, joy, and reliability to everyone we touch.',
      image: 'https://via.placeholder.com/600x300', // Replace with your image URL
    },
    {
      title: 'Our Team',
      content: 'Our team is composed of dedicated professionals who are passionate about what they do. Together, we bring a wealth of experience and expertise to serve our clients better.',
      image: 'https://via.placeholder.com/600x300', // Replace with your image URL
    },
    {
      title: 'Our Values',
      content: 'Integrity, innovation, and customer-centricity are at the core of everything we do. We believe in building long-term relationships based on trust and mutual respect.',
      image: 'https://via.placeholder.com/600x300', // Replace with your image URL
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-4 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="w-full max-w-3xl space-y-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row ${
              index % 2 === 0 ? '' : 'md:flex-row-reverse'
            } bg-white shadow-md rounded-lg overflow-hidden`}
          >
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
              <p className="text-gray-700">{section.content}</p>
            </div>
            <div className="md:w-1/2">
              <img
                src={section.image}
                alt={section.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutComp;
