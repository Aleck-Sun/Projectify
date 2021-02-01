import React, { useState } from 'react';
import './Form.css';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/posts';

const Form = () => {
    // Submit form
    const [postData, setPostData] = useState({
        pTitle: '',
        pTools: '',
        pDesc: '',
        pLink: '',
        pImg: '',
        pCode: ''
    });
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        if(postData.pCode == "abc123") {
            e.preventDefault();
            dispatch(createPost(postData));
        }
        document.getElementById("submissionForm").reset();
    }

    const uploadHandler = (e) => {
        e.preventDefault();
        const files = e.target.files;
        const file = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            setPostData({ ... postData, pImg: reader.result});
        }
    }

    return (
        <form id="submissionForm" className='submissionForm' onSubmit={handleSubmit}>
            <label htmlFor="pTitle" className="formLabel">
                Project Title:
            </label>
            <input type="text" className="formText" name="pTitle" placeholder="Enter project title"
            value={ postData.pTitle } onChange={(e) => setPostData({ ... postData, pTitle: e.target.value })} />
            <label htmlFor="pTools" className="formLabel">
                Tools &amp; Technologies:
            </label>
            <input type="text" className="formText" name="pTools" placeholder="Enter project tools &amp; technologies"
            value={ postData.pTools } onChange={(e) => setPostData({ ... postData, pTools: e.target.value })} />
            <label htmlFor="pDesc" className="formLabel">
                Project Description:
            </label>
            <input type="text" className="formText" name="pDesc" placeholder="Enter project description"
            value={ postData.pDesc } onChange={(e) => setPostData({ ... postData, pDesc: e.target.value })} />
            <label htmlFor="pLink" className="formLabel">
                Project Link:
            </label>
            <input type="text" className="formText" name="pLink" placeholder="Enter project link"
            value={ postData.pLink } onChange={(e) => setPostData({ ... postData, pLink: e.target.value })} />
            <label htmlFor="pCode" className="formLabel">
                Post Code:
            </label>
            <input type="text" className="formText" name="pCode" placeholder="Enter post code"
            value={ postData.pCode } onChange={(e) => setPostData({ ... postData, pCode: e.target.value })} />
            <label htmlFor="pImg" className="formLabel">
                    Project Image:
            </label>
            <label htmlFor="pImg" className="uploadBtn">
                Choose Image&nbsp;&nbsp;&nbsp;<i className="fas fa-cloud-upload-alt"></i>
            </label>
            <input type="file" id="pImg" onChange={uploadHandler}/>
            <button type="submit" className="submitBtn">Post</button>
        </form>
    );
}

export default Form;