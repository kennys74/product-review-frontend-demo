import React from 'react';

const Rating = ({ reviewAverageScore = 1 }) => {
    return (
    <span className="ps-rating">
        <i className={reviewAverageScore > 0 ? 'fa fa-star' : 'fa fa-star-o'}></i>
        <i className={reviewAverageScore >= 2 ? 'fa fa-star' : 'fa fa-star-o'}></i>
        <i className={reviewAverageScore >= 3 ? 'fa fa-star' : 'fa fa-star-o'}></i>
        <i className={reviewAverageScore >= 4 ? 'fa fa-star' : 'fa fa-star-o'}></i>
        <i className={reviewAverageScore >= 5 ? 'fa fa-star' : 'fa fa-star-o'}></i>
    </span>
    );
};

export default Rating;