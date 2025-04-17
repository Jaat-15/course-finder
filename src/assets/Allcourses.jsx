import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
    { title: "Python", image: "./src/assets/python.webp" },
    { title: "Java", image: "./src/assets/java.jpg" },
    { title: "C++", image: "./src/assets/c++.png" },
    { title: "Web Development", image: "./src/assets/web.jpg" },
    { title: "DSA", image: "./src/assets/dsa.png" },
    { title: "JavaScript", image: "./src/assets/js.jpg" },
    { title: "React", image: "./src/assets/react.png" },
    { title: "C#", image: "./src/assets/cshaft.png" },
    { title: "Android Development", image: "./src/assets/android.jpg" },
    { title: "Cloud Computing", image: "./src/assets/cloud.jpg" },
    { title: "SQL", image: "./src/assets/sql.avif" },
    { title: "Data Science", image: "./src/assets/data.jpg" },
    { title: "Ethical Hacking", image: "./src/assets/ethical.webp" },
    { title: "Linux", image: "./src/assets/linux.jpg" },
    { title: "Git & Github", image: "./src/assets/git.jpg" },
    { title: "Typescript", image: "./src/assets/typescript.jpg" },
    { title: "Go (Golang)", image: "./src/assets/go.png" },
    { title: "Ruby", image: "./src/assets/ruby.jpeg" },
    { title: "Swift", image: "./src/assets/swift.jpg" },
    { title: "Kotlin", image: "./src/assets/kotlin.png" },
    { title: "Rust", image: "./src/assets/rust.jpg" },
    { title: "PHP", image: "./src/assets/php.jpg" },
    { title: "R", image: "./src/assets/r.jpg" },
    { title: "Tailwind CSS", image: "./src/assets/tailwind.png" },
    { title: "BootStrap", image: "./src/assets/bootstrap.jpg" },
];

const AllCourses = () => {
    return (
        <div className="container mx-auto p-6 text-white">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">All Courses</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {courses.map((course, index) => (
                    <div key={index} className="bg-[#1f1f1f] p-4 rounded-lg shadow-md hover:scale-105 transition-transform">
                        <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-md mb-4" />
                        <h3 className="text-lg font-semibold">{course.title}</h3>
                        <Link to={`/course/${course.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-400 mt-2 block">View Course</Link>
                    </div>
                ))}
            </div>
            <div className="mt-16 text-center bg-[#121212] p-8 rounded-lg shadow-md">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Keep Exploring, Keep Learning 🚀</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
                    Whether you're just starting out or brushing up your skills, our platform has something for everyone. Dive deep into the world of tech with handpicked courses – all for free. Stay curious, and never stop growing!
                </p>
            </div>

        </div>
    );
};

export default AllCourses;
