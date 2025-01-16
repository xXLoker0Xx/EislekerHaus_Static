"use client";

import React from 'react';
import { BlogPageGen } from '@/components/BlogPageGen';

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
        <BlogPageGen pagename={pagename} posts={blogPosts} />
    );
};

export default BlogPage;