import React from 'react';

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white">
      
      {/* Heading */}
      <div className="bg-[#121212] p-6 sm:p-10 rounded-lg shadow-md text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-400 text-base sm:text-lg">
          We'd love to hear from you! Whether you have a question about a course, feedback, or something useful.
        </p>
      </div>

      {/* Contact Info */}
      <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-lg">
        <div className="space-y-6">
          <p className="text-gray-300 text-lg">
            You can reach out to us directly via email. We're happy to answer any questions you may have.
          </p>
          <p className="text-gray-300 text-lg">
            Email: choudharyshubhamjakhar15@gmail.com
          </p>
          <p className="text-gray-300 text-lg">
            Feel free to send us a message, and we'll get back to you as soon as possible.
          </p>
          <p className="text-gray-300 text-lg">
            We look forward to hearing from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
