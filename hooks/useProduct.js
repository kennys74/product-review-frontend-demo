import React from 'react';
import LazyLoad from 'react-lazyload';
import { formatCurrency } from '~/utilities/product-helper';
import Link from 'next/link';

export default function useProduct() {
    return {
        thumbnailImage: (payload) => {
            if (payload) {
                console.log(payload);
                if (payload.attributes.Image.data.attributes) {
                    if(payload.attributes.Image.data.attributes.name){
                        return (
                            <>
                                <LazyLoad>
                                    <img
                                        src={payload.attributes.Image.data.attributes.name}
                                        alt={payload.attributes.Image.data.attributes.name}
                                    />
                                </LazyLoad>
                            </>
                        );
                    }else{
                        return (
                            <>
                                <LazyLoad>
                                    <img
                                        src={getImageURL(payload.thumbnail)}
                                        alt={getImageURL(payload.thumbnail)}
                                    />
                                </LazyLoad>
                            </>
                        );
                    }
                }
            }
        },
        price: (payload) => {
            let view;
            view = (
                <p className="ps-product__price">
                    <span>R</span>
                    {formatCurrency(payload.attributes.Price)}
                </p>
            );
            return view;
        },
        title: (payload) => {
            let view = (
                <Link href="/product/[pid]" as={`/product/${payload.id}`}>
                    <a className="ps-product__title">{payload.attributes.Name}</a>
                </Link>
            );
            return view;
        }
    };
}
