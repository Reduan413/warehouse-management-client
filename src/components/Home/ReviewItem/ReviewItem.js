import React from 'react';

const ReviewItem = ({review}) => {
    const {name, address, description, img} = review;
    console.log("testiMonialDetail"+review)
    return (
        <div class="item">
        <div class="shadow-effect">
            <img class="img-circle" src={img} />
            <p>{description}</p>
        </div>
        <div class="review-name">
            <h5>{name}</h5>
            <small>{address}</small>
        </div>
    </div>
    );
};

export default ReviewItem;