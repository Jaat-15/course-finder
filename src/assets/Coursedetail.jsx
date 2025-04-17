// pages/CourseDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { courseData } from './Coursedata'; // Adjust path if needed

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseData.find((c) => c.id === id);

  if (!course) return <p className="text-white p-6">Course not found.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">{course.title}</h1>

      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />

      {/* English Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Courses in English</h2>
        {course.english.map((item, index) => (
          <div key={index} className="bg-[#1f1f1f] p-4 rounded-md shadow-md mb-6">
            <p className="text-gray-300 mb-2"><strong>Provider:</strong> {item.provider}</p>
            <p className="text-gray-300 mb-2"><strong>Description:</strong> {item.description}</p>
            <p className="text-gray-300 mb-4"><strong>Duration:</strong> {item.duration}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
            >
              Go to Course →
            </a>
          </div>
        ))}
      </div>

      {/* Hindi Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Courses in Hindi</h2>
        {course.hindi.map((item, index) => (
          <div key={index} className="bg-[#1f1f1f] p-4 rounded-md shadow-md mb-6">
            <p className="text-gray-300 mb-2"><strong>Provider:</strong> {item.provider}</p>
            <p className="text-gray-300 mb-2"><strong>Description:</strong> {item.description}</p>
            <p className="text-gray-300 mb-4"><strong>Duration:</strong> {item.duration}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
            >
              Go to Course →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;
