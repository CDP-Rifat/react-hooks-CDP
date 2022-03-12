import React from "react";
import { Button } from "../Button/button.component";
import './card.style.css'
import { useNavigate } from "react-router-dom";

const Card = ({ post }) => {
    let navigate = useNavigate();

    const handler = () => {
        navigate('/post', { state: { post: post } })
    }

    return (
        <div className="card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Button name={'Details'} onClickHandler={handler} />
        </div>
    )
}

export default Card;