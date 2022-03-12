import React from "react";
import './card.style.css'

const Card = ({ post }) => {
    return (
        <div className="card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default Card;