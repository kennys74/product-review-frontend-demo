import React from 'react';
import Link from 'next/link';

const HomeDefaultTopCategories = () => (
    <div className="ps-top-categories">
        <div className="ps-container">
            <h3>Shop by Category</h3>
            <div className="row">
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                    <div className="ps-block--category">
                        <Link href="/category/air-fryers-1">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img
                            src="/static/img/categories/air-fryers.jpg"
                            alt="Air Fryers"
                        />
                        <p>Air Fryers</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HomeDefaultTopCategories;
