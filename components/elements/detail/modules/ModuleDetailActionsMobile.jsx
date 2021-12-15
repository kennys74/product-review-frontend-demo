import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import useEcomerce from '~/hooks/useEcomerce';
import { useRouter } from 'next/router';
import { Modal } from 'antd';

const ModuleDetailActionsMobile = ({ ecomerce, product }) => {
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useEcomerce();
    const Router = useRouter();
    const handleAddItemToCart = (e) => {
        e.preventDefault();
        addItem(
            { id: product.id, quantity: quantity },
            ecomerce.cartItems,
            'cart'
        );
		const modal = Modal.success({
            centered: true,
            title: 'Success!',
            content: `This product has been added to your shopping cart!`,
        });
        modal.update;
    };

    return (
        <div className="ps-product__actions-mobile">
            <a
                className="ps-btn ps-btn--black"
                href="#"
                onClick={(e) => handleAddItemToCart(e)}>
                Add to cart
            </a>
        </div>
    );
};

export default connect((state) => state)(ModuleDetailActionsMobile);
