import React from 'react';
import LazyLoad from 'react-lazyload';
import { baseUrl } from '~/repositories/Repository';
import Link from 'next/link';

export function formatCurrency(num) {
    if (num !== undefined) {
        return parseFloat(num)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
    }
}

export function StrapiProductPriceExpanded(product) {
    let view;
    if (product.black_friday === true) {
        let discount;
        discount = product.black_friday_discount;
        let price = product.price - (product.black_friday_discount / 100) * product.price;
        price = price.toFixed(0);
        view = (
            <p className="ps-product__price sale">
                 R{formatCurrency(price)}
                <del className="ml-2">
                R{formatCurrency(product.price)}
                </del>
            </p>
        );
    } else {
        view = (
            <p className="ps-product__price">
                R{formatCurrency(product.price)}
            </p>
        );
    }
    return view;
}

export function StrapiProductThumbnail(product) {
    let view;

    if (product.thumbnail) {
        view = (
            <Link href="/product/[pid]" as={`/product/${product.id}`}>
                <a>
                    <LazyLoad>
                        <img
                            src={`${baseUrl}${product.thumbnail.url}`}
                            alt={product.title}
                        />
                    </LazyLoad>
                </a>
            </Link>
        );
    } else {
        view = (
            <Link href="/product/[pid]" as={`/product/${product.id}`}>
                <a>
                    <LazyLoad>
                        <img src="/static/img/not-found.jpg" alt="not-found" />
                    </LazyLoad>
                </a>
            </Link>
        );
    }

    return view;
}
