import React from 'react';
import Link from 'next/link';
import useProduct from '~/hooks/useProduct';

const ProductOnHeader = ({ product }) => {
    const { thumbnailImage, price, title } = useProduct();

    return (
        <div className="ps-product--header-sticky">
            <div className="ps-product__thumbnail">
                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                    <a>{thumbnailImage(product)}</a>
                </Link>
            </div>
            <div className="ps-product__wrapper">
                <div className="ps-product__content">{title(product)}</div>
                <div className="ps-product__shopping">
                    {price(product)}
                    <a
                        className="ps-btn"
                        href="#"
                        >
                        Add to Cart
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductOnHeader;
