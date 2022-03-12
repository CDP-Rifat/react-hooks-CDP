import React from 'react';
import './comment.style.css'

function Comment({ comment }) {
    return (
        <div className='comment'>
            <h3>{comment.name}</h3>
            <p><b>{comment.email}</b></p>
            <p>{comment.body}</p>
        </div>
    );
}
export default Comment;