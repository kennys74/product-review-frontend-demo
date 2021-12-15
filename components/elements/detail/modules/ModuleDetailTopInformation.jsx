import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Rating from '~/components/elements/Rating';
import { loadScript } from '~/utilities/common-helpers';

const ModuleDetailTopInformation = ({ product }) => {
    const [mobicredPrice, setMobicredPrice] = useState(0);

    const MobicredBlock = () => {
        return <div id="instalmentCalc" data-amount={mobicredPrice}></div>;
    };

    useEffect(() => {
        loadScript(
            'https://app.mobicredwidget.co.za/assets/js/instalment.js',
            () => {}
        );
    }, []);

    useEffect(() => {
        if(product){
            if(product.attributes.Price){
                let price = product.attributes.Price;
                price = price.toFixed(2);
                 setMobicredPrice(price);
            }
        }
    }, [product]);

    // Views
    let priceView;
    
    var categories = (
        <p>
            <Link href="/category/air-fryers-1">
                <a className="ml-2 text-capitalize">
                    Air Fryers
                </a>
            </Link>
        </p>
    );

    priceView = <h4 className="ps-product__price">R{product.attributes.Price}</h4>;

    var payFlexBlock = (
        <div className="payflexpricing">
            <div className="payflex-box">
                <div className="row">
                    <div className="col-sm-12 col-12">
                        <p><strong>Or split into 4 x interest free payments with:{' '}</strong><br></br>
                        <img
                            height="35"
                            src="/static/img/payment-method/payflex-logo-2.png"></img>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <header>
            <h1>{product.attributes.Name}</h1>
            {priceView}
            <MobicredBlock />
            {payFlexBlock}
            <div className="ps-product__meta">
                <p>SKU: {product.attributes.Slug}</p>
            </div>
            <div className="ps-product__meta">
                <p>Categories:</p>
                {categories}
            </div>
        </header>
    );
};

export default ModuleDetailTopInformation;