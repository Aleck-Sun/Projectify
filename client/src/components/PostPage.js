import React from 'react';
import '../App.css';
import './PostPage.css';
import Form from './Form.js';
import ProjectPost from './ProjectPost';
import img1 from '../images/animation.gif';

function PostPage() {
  return (
    <div className='post'>
      <Form />
      <div>
        <ProjectPost name="Project Name" tools="Tools &amp; Technologies"
        desc="Short description about the project" link="" img="https://cdn.stocksnap.io/img-thumbs/960w/robot-technology_WUBMLJRYEK.jpg" />
      </div>
    </div>
  );
}

export default PostPage;