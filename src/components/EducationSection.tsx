
import React from 'react';

const EducationSection = () => {
  return (
    <section id="certyfikaty" className="container py-10 px-6 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#00F2FE] pt-20 -mt-20">
        Certyfikaty
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="cert-card">
          <img src="icon1.png" alt="Google AI" className="mb-4" /> 
          <span className="block mb-2">Generator Pomysłów <br /> x <br /> Politechnika Wrocławska</span>
          <div className="text-sm">
          <small className="block mb-2">/ część zespołowa / <br />Artificial Intelligence & Machine Learning (including Big Data)</small>
        </div>
        </div>

        <div className="cert-card">
          <img src="icon2.png" alt="Google AI" className="mb-4" /> 
          <span className="block mb-2">Generator Pomysłów <br /> x <br /> Politechnika Wrocławska</span>
          <div className="text-sm">
          <small className="block mb-2">/ część indywidualna / <br /> Artificial Intelligence & Machine Learning (including Big Data)</small>
        </div>
        </div>


        <div className="cert-card">
          <img src="icon3.png" alt="Google AI" className="mb-4" /> 
          <span className="block mb-2">AWS <br /> Educate </span>
          <div className="text-sm">
          <small className="block mb-2">Introduction to Generative Artificial Intelligence</small>
        </div>
        </div>


      {/*  <div className="cert-card">
          <img src="icon4.png" alt="Google AI" className="mb-4" /> 
          <span className="block mb-2">AIDEAS <br /> / część zespołowa /</span>
          <div className="text-sm">
          <small className="block mb-2">Artificial Intelligence & Machine Learning (including Big Data)</small>
        </div>
        </div>
        */}

        <div className="cert-card">
          <img src="icon5.png" alt="Google AI" className="mb-4" /> 
          <span className="block mb-2">Santander OA <br /> x <br /> Politechnika Łódzka </span>
          <div className="text-sm">
          <small className="block mb-2">Artificial Intelligence & Machine Learning (including Big Data)</small>
        </div>
        </div>

        <div className="cert-card">
          <img src="icon6.png" alt="Google AI" className="mb-4" /> 
          <span className="block mb-2">Polski Fundusz Rozwoju</span>
          <div className="text-sm">
          <small className="block mb-2">AI od podstaw <br /> & <br /> Chmura w biznesie</small>
        </div>
        </div>

        <div className="cert-card">
          <img src="icon7.png" alt="Google AI" className="mb-4" /> 
          <span className="block mb-2">Platforma szkoleniowa Udemy</span>
          <div className="text-sm">
          <small className="block mb-2">Scrum Master</small>
        </div>
        </div>

        <div className="cert-card">
          <img src="icon8.png" alt="Google AI" className="mb-4" /> 
          <span className="block mb-2">Intel</span>
          <div className="text-sm">
          <small className="block mb-2">High Performance Computing</small>
        </div>
        </div>

        <div className="cert-card">
          <img src="icon9.png" alt="Google AI" className="mb-4" /> 
          <span className="block mb-2">Intel</span>
          <div className="text-sm">
          <small className="block mb-2">Edge Arificial Intelligence</small>
        </div>
        </div>

        <div className="cert-card">
          <img src="icon10.png" alt="Google AI" className="mb-4" /> 
          <span className="block mb-2">Intel</span>
          <div className="text-sm">
          <small className="block mb-2">Artificial Intelligence Fundamentals</small>
        </div>
        </div>
        </div>
        </section>
  );
};

export default EducationSection;
