import React from 'react';
import { Link } from 'react-router-dom';
import { courseData } from './Coursedata';


const Homepage = () => {

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Navbar */}


            {/* Header Section */}
            <div className="bg-[#121212] text-white rounded-lg text-center shadow-md p-6 sm:p-8 mb-10">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4">Welcome to Course Finder</h1>
                <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
                    Your go-to platform for discovering the best free courses across the web. Whether you're looking to learn programming, design, AI, or anything in between — we've got you covered. Start exploring and level up your skills for free!
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-10">
                <select className="bg-[#1f1f1f] text-white p-2 rounded-md">
                    <option value="programming">Programming</option>
                </select>
            </div>

            {/* Course Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                    { title: "Python", image: "./src/assets/python.webp" },
                    { title: "Java", image: "./src/assets/java.jpg" },
                    { title: "C++", image: "./src/assets/c++.png" },
                    { title: "Web Development", image: "./src/assets/web.jpg" },
                    { title: "Data Structures", image: "./src/assets/dsa.png" },
                    { title: "JavaScript", image: "./src/assets/js.jpg" },
                ].map((course, index) => (
                    <div key={index} className="bg-[#1f1f1f] p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <img src={course.image} alt={course.title} className="w-full h-60 object-cover rounded-xl mb-4" />
                        <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                        <Link to={`/course/${course.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-400 mt-2 block">View Course</Link>
                    </div>
                ))}
            </div>

            {/* See All Button */}
            <div className="text-center mt-10">
                <button className="bg-[#1f1f1f] hover:bg-[#121212] text-[#cccccc] font-light py-3 px-6 rounded-lg shadow-md transition duration-300">
                    <Link to="/allcourses">See All Courses →</Link>
                </button>
            </div>

            {/* Why Choose Us */}
            <section id="about" className="mt-16 px-4 py-10 bg-[#121212] text-white rounded-lg shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-[#1f1f1f] p-6 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">Free Courses</h3>
                        <p className="text-gray-400">Access 100% free courses curated from top platforms around the web.</p>
                    </div>
                    <div className="bg-[#1f1f1f] p-6 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">Beginner Friendly</h3>
                        <p className="text-gray-400">No matter your skill level, we have something to help you start learning today.</p>
                    </div>
                    <div className="bg-[#1f1f1f] p-6 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">No Sign-Up Needed</h3>
                        <p className="text-gray-400">Just browse, pick a course, and start learning instantly—no login required.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="mt-12 px-4 py-6 bg-[#121212] text-gray-400 text-center text-sm rounded-t-lg">
                <p className="mb-2">&copy; {new Date().getFullYear()} Course Finder. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Homepage;
