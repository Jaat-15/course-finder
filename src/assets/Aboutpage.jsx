import React from 'react';

const AboutPage = () => {
    return (
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white">
            {/* Intro Section */}
            <section className="bg-[#121212] p-6 sm:p-10 rounded-lg shadow-md mb-10 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Course Finder</h1>
                <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                    At Course Finder, we’re on a mission to simplify your learning journey. We help you discover the best free online courses from trusted sources — all in one place.
                </p>
            </section>

            {/* Our Mission */}
            <section className="bg-[#1f1f1f] p-6 sm:p-10 rounded-lg shadow-md mb-10">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-400 leading-relaxed">
                    We believe that education should be accessible, affordable, and open to everyone — regardless of background or budget. Our goal is to empower learners with high-quality, free resources from across the internet.
                    Whether you're starting from scratch or looking to upskill, Course Finder brings everything you need right to your fingertips.
                </p>
            </section>

            {/* Our Vision */}
            <section className="bg-[#121212] p-6 sm:p-10 rounded-lg shadow-md mb-10">
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-gray-400 leading-relaxed">
                    Our vision is to create a centralized hub for knowledge seekers — where discovering the right course is no longer a hassle. We aim to support:
                </p>
                <ul className="list-disc pl-6 mt-4 text-gray-400">
                    <li>Students looking for supplemental learning</li>
                    <li>Professionals aiming to reskill or upskill</li>
                    <li>Self-learners diving into tech, design, or business</li>
                    <li>Anyone curious to learn — without financial barriers</li>
                </ul>
            </section>

            {/* How It Works */}
            <section className="bg-[#1f1f1f] p-6 sm:p-10 rounded-lg shadow-md mb-10">
                <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
                <p className="text-gray-400 leading-relaxed">
                    We handpick the best free courses from platforms. Our search and filter tools make it easy to find exactly what you’re looking for — by topic, difficulty, or platform.
                </p>
            </section>

            {/* Our Values */}
            <section className="bg-[#121212] p-6 sm:p-10 rounded-lg shadow-md mb-10">
                <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
                <ul className="list-disc pl-6 text-gray-400">
                    <li><strong>Accessibility:</strong> Free and open resources for everyone</li>
                    <li><strong>Simplicity:</strong> Clean, user-friendly interface</li>
                    <li><strong>Trust:</strong> Only verified, quality content</li>
                    <li><strong>Growth:</strong> Encouraging lifelong learning</li>
                </ul>
            </section>

            {/* Future Plans */}
            <section className="bg-[#1f1f1f] p-6 sm:p-10 rounded-lg shadow-md mb-10">
                <h2 className="text-2xl font-semibold mb-4">What's Coming Next?</h2>
                <p className="text-gray-400 leading-relaxed">
                    We're just getting started! Soon, we plan to add features like:
                </p>
                <ul className="list-disc pl-6 mt-4 text-gray-400">
                    <li>User ratings & reviews for each course</li>
                    <li>Personalized course recommendations</li>
                    <li>Bookmark and progress tracking</li>
                    <li>Daily/weekly learning challenges</li>
                </ul>
            </section>

            {/* Closing */}
            <section className="bg-[#121212] p-6 sm:p-10 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-semibold mb-4">Join Our Learning Community</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Whether you're here for your first coding lesson or your next AI course — we're glad you found us. Course Finder is here to make learning simple, smart, and free.
                </p>
            </section>
        </div>
    );
};

export default AboutPage;
