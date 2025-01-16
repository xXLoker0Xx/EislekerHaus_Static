import React from 'react';
import { BlogPost } from './BlogPost';
import CustomBackground from './CustomBack';
import FloatingElements from './FloatingElements';
import { TitleMain } from './TitleMain';


interface Post {
    title: string,
    description: string,
    date: string,
    imageUrl: string,
}

interface BlogPageGenProps {
    pagename: string,
    posts?: Post[];
}

export const BlogPageGen: React.FC<BlogPageGenProps> = ({
    pagename,
    posts = [],
}) => {
    return (
        <div className="min-h-screen bg-jul-white p-8 relative overflow-hidden -mb-12">
            {/* Asymmetric background shapes */}
            <CustomBackground />

            <div className="lg:tracking-widest lg:pl-20 lg:pr-20 mx-auto relative z-10 mt-20 lg:mt-0">
                <TitleMain title={pagename} />

                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 mb-12">
                    {posts.map((post) => (
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