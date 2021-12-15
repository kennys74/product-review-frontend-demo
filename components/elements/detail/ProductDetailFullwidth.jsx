import React from 'react';
import DefaultDescription from '~/components/elements/detail/description/DefaultDescription';
import ModuleDetailShoppingActions from '~/components/elements/detail/modules/ModuleDetailShoppingActions';
import ModuleDetailTopInformation from '~/components/elements/detail/modules/ModuleDetailTopInformation';

const ProductDetailFullwidth = ({ product }) => {
    return (
        <div className="ps-product--detail ps-product--fullwidth">
            <div className="ps-product__header">
                <div
                    className="ps-product__thumbnail">
                    <figure>
                        <div className="ps-wrapper">
                            <img src={product.attributes.Image.data.attributes.name}></img>
                            <p>Product images are for illustrative purposes only and may differ from the actual product.</p>
                        </div>
                    </figure>
                </div>
                <div className="ps-product__info">
                    <ModuleDetailTopInformation product={product} />
                    <ModuleDetailShoppingActions product={product} />
                </div>
            </div>
            <DefaultDescription product={product} />
        </div>
    );
};

export default ProductDetailFullwidth;
