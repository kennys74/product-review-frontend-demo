import React, { Component, useState } from 'react';
import { Rate } from 'antd';
import Rating from '~/components/elements/Rating';
import Axios from 'axios';
import { Modal } from 'antd';

const PartialReview = ({product}) => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [review, setReview] = useState('')
    const [starRating, setStarRating] = useState(5)
    let product_id = product.id
  
    const submit = () => {
        const reviewDetails = { 
            data: {
                "Description": review,
                "Rating": starRating,
                "Name": name,
                "Email": email,
                "products": product_id
          }
        };
        const headers = { 
            'Authorization': 'Bearer 2a67f5d9e96f87ff47a02a502374869f026d7565fb4726860a288eb3242169469f4d9d188c0b24d67790a9c7960aa21430a01f47689d53c26f5e533e79ed7c1ea3c200d2a4a447df3d4ab6fab67684bf7229307adffea81aad3d2bd5d9568f33d829b8bd7cbe2d17ed36ad50b8e856f6a58663ea9634ade150466ffcbf72e75b'
        };
        Axios.post('http://173.212.222.70:1337/api/product-reviews', reviewDetails, { headers })
        .then((response) => {
            console.log(response);
            setEmail("");
            setName("");
            setReview("");
            setStarRating("");
            const modal = Modal.success({
                centered: true,
                title: 'Success!',
                content: `Your product rating has been recorded, many thanks`,
            });
            modal.update;
        })
        .catch((error) => {
        console.log(error)
        })
      }

    let reviewItemsCount = 0;
    let reviewAverageScore = 0;
    let noReview = 'No reviews';
   
    if (product.attributes.product_reviews.data.length > 0) {
        reviewItemsCount = product.attributes.product_reviews.data.length;
        const items = product.attributes.product_reviews.data.map((item) => (
            reviewAverageScore += item.attributes.Rating
        ));
        reviewAverageScore = reviewAverageScore / reviewItemsCount;
    }else{
        reviewAverageScore = 0;
        
    }

    return (
    <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 ">
            <div className="ps-block--average-rating">
                <div className="ps-block__header">
                    <h4>{reviewAverageScore > 0 ? `Average Rating: ${reviewAverageScore}` : noReview}</h4>
                    <Rating reviewAverageScore={reviewAverageScore} />

                    <span>{reviewItemsCount} Review(s)</span>
                </div>
            </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ">
            <form className="ps-form--review">
                <h4>Submit Your Review</h4>
                <p>
                    Your email address will not be published. All fields are required.
                </p>
                <div className="form-group form-group__rating">
                    <label>Your rating of this product</label>
                    <Rate defaultValue={0} allowHalf onChange={(value) => {setStarRating(value) }} value={starRating} />
                </div>
                <div className="form-group">
                    <textarea
                        name="review"
                        className="form-control"
                        type="text"
                        onChange={e => setReview(e.target.value)}
                        value={review}
                        className="form-control"
                        rows="6"
                        placeholder="Write your review here"></textarea>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
                        <div className="form-group">
                            <input
                                name="name"
                                className="form-control"
                                type="text"
                                onChange={e => setName(e.target.value)}
                                value={name}
                                placeholder="Your Name"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Your Email"
                                name="name"
                                className="form-control"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group submit">
                    <button type="button" onClick={submit} className="ps-btn">Submit Review</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default PartialReview;
