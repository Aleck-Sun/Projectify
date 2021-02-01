import React, { useState } from 'react';
import '../App.css';
import './ProjectsPage.css';
import ProjectPost from './ProjectPost';
import { useSelector } from 'react-redux';

function ProjectsPage() {
    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return (
        !posts.length ? <div className='projects'></div> : (
        <div className='projects'>
            {posts.map((post) => (
                <ProjectPost name={post.pTitle} tools={post.pTools} desc={post.pDesc} link={post.pLink} img={post.pImg} />
            ))}
        </div>
    ));
}

export default ProjectsPage;