import React from 'react';

const AboutPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">About Coder Matters</h1>

            <p className="mb-6">
                Welcome to Coder Matters, where we dive deep into the world of coding, technology, and the digital lifestyle. Here, every line of code tells a story, and every pixel matters.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Who We Are:</h2>
            <p className="mb-6">
                At Coder Matters, we're more than just a community; we're a collective of curious minds, passionate developers, and tech enthusiasts led by Matte, a coder with a vision. We believe in the power of technology to transform lives, but we also ponder the simpler questions like the role of technology in our daily lives and how we interact with it.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Mission:</h2>
            <p className="mb-6">
                Our mission is to explore the nuances of software development and technology's broader impact on society. We aim to answer the big questions: What does it mean to be a coder in today's fast-paced world? Which countries offer the best environments for developers? And how does one balance digital immersion with the need for disconnection?
            </p>

            <h2 className="text-2xl font-semibold mb-4">What We Do:</h2>
            <ul className="list-disc list-inside mb-6">
                <li className="mb-2"><strong>Discuss and Dissect:</strong> From debating the utility of multiple screens to the feasibility of digital detox, we cover topics that resonate with tech professionals and enthusiasts alike.</li>
                <li className="mb-2"><strong>Community Engagement:</strong> We engage with our audience through polls, discussions, and thought-provoking questions, fostering a space where opinions on tech trends, work environments, and digital tools are shared freely.</li>
                <li className="mb-2"><strong>Insightful Content:</strong> Whether it's exploring new programming paradigms, discussing the work culture in different countries, or sharing light-hearted tech humor, our content is crafted to enlighten, entertain, and engage.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Why Coder Matters?</h2>
            <p className="mb-6">
                Because in a world increasingly run by code, understanding the culture, the challenges, and the sheer human aspect of technology is crucial. Here, we don't just write code; we discuss its implications, its reach, and its ability to connect or disconnect us from the world.
            </p>

            <p className="font-semibold">
                Join us at Coder Matters, where we're not just about the code; we're about the people behind the code, the screens in front of them, and the world around them.
            </p>
        </div>
    );
};

export default AboutPage;