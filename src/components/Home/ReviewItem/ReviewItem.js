import React from 'react';

const ReviewItem = ({review}) => {
    const {name, address, description, img} = review;
    return (
        <div className="item">
        <div className="shadow-effect">
            <img className="img-circle" src={img} />
            <p>{description}</p>
        </div>
        <div className="review-name">
            <h5>{name}</h5>
            <small>{address}</small>
        </div>
    </div>
    );
};

export default ReviewItem;