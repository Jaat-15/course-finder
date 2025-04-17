import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
    { title: "Python", image: "/python.webp" },
    { title: "Java", image: "/java.jpg" },
    { title: "C++", image: "/c++.png" },
    { title: "Web Development", image: "/web.jpg" },
    { title: "DSA", image: "/dsa.png" },
    { title: "JavaScript", image: "/js.jpg" },
    { title: "React", image: "/react.png" },
    { title: "C#", image: "/cshaft.png" },
    { title: "Android Development", image: "/android.jpg" },
    { title: "Cloud Computing", image: "/cloud.jpg" },
    { title: "SQL", image: "/sql.avif" },
    { title: "Data Science", image: "/data.jpg" },
    { title: "Ethical Hacking", image: "/ethical.webp" },
    { title: "Linux", image: "/linux.jpg" },
    { title: "Git & Github", image: "/git.jpg" },
    { title: "Typescript", image: "/typescript.jpg" },
    { title: "Go (Golang)", image: "/go.png" },
    { title: "Ruby", image: "/ruby.jpeg" },
    { title: "Swift", image: "/swift.jpg" },
    { title: "Kotlin", image: "/kotlin.png" },
    { title: "Rust", image: "/rust.jpg" },
    { title: "PHP", image: "/php.jpg" },
    { title: "R", image: "/r.jpg" },
    { title: "Tailwind CSS", image: "/tailwind.png" },
    { title: "BootStrap", image: "/bootstrap.jpg" },
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
