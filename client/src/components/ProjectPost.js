import React from 'react';
import './ProjectPost.css';
import img1 from '../images/animation.gif';

function ProjectPost({ name, tools, desc, link, img }) {
    return(
        <div className="ProjectPost">
            <img className="ProjectImg" src={img} alt=""></img>
            <h2 className="ProjectTitle">{name}</h2>
            <p className="ProjectTools">{tools}</p>
            <p className="ProjectDesc">{desc}</p>
            <a className="ProjectLink" href={link} rel="noreferrer" target="_blank">Check Out Project</a>
        </div>
    );
}

export default ProjectPost;