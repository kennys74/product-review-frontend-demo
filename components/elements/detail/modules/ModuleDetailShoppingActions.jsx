import React, { useState } from 'react';

const ModuleDetailShoppingActions = ({

}) => {
    const [quantity, setQuantity] = useState(1);

        return (
            <div className="ps-product__shopping extend">
                <div className="ps-product__btn-group">
                    <figure>
                        <figcaption>Quantity</figcaption>
                        <div className="form-group--number">
                            <button
                                className="up"
                                >
                                <i className="fa fa-plus"></i>
                            </button>
                            <button
                                className="down"
                                >
                                <i className="fa fa-minus"></i>
                            </button>
                            <input
                                className="form-control"
                                type="text"
                                placeholder={quantity}
                                disabled
                            />
                        </div>
                    </figure>
                    <a
                        className="ps-btn ps-btn--black"
                        href="#"
                        >
                        Add to cart
                    </a>
                    <div className="ps-product__actions">
                        <a href="#">
                            <i className="icon-heart"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
};

export default ModuleDetailShoppingActions;
