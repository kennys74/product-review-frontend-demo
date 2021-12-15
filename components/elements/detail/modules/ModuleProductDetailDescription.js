import React from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';

const ModuleProductDetailDescription = ({ product }) => (
    
    <div className="ps-product__desc">
        {ReactHtmlParser (product.attributes.Description)}
    </div>
);

export default ModuleProductDetailDescription;
