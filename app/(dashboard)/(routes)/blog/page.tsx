"use client";

import { BlogPost } from '@/components/BlogPost';
import CustomBackground from '@/components/CustomBack';
import FloatingElements from '@/components/FloatingElements';
import { TitleMain } from '@/components/TitleMain';
import React from 'react';


const BlogPage = () => {
    const pagename = "Blog"
    const blogPosts = [
        {
            title: "The Importance of Communication in Families",
            description: "Discover how effective communication can strengthen family bonds...",
            date: "May 15, 2024",
            imageUrl: "/happy_family_1.jpg"
        },
        {
            title: "Overcoming Challenges in Blended Families",
            description: "Learn strategies for navigating the unique dynamics of blended families...",
            date: "May 10, 2024",
            imageUrl: "/happy_family_2.jpg"
        },
        {
            title: "The Role of Empathy in Family Relationships",
            description: "Explore how cultivating empathy can improve family interactions...",
            date: "May 5, 2024",
            imageUrl: "/happy_family_3.jpg"
        },
        {
            title: "Balancing Work and Family Life",
            description: "Tips and tricks for maintaining a healthy work-life balance...",
            date: "April 30, 2024",
            imageUrl: "/happy_family_4.jpg"
        },
    ];

    return (
        <div className="page-fade-in min-h-screen bg-jul-white p-8 relative overflow-hidden -mb-12">
            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 mb-12">
                    {blogPosts.map((post) => (
                        <div key={post.title}>
                            <BlogPost {...post} />
                        </div>
                    ))}
                </div>

            </div>

            {/* Floating elements */}
            <FloatingElements />
        </div>
    );
};

export default BlogPage;