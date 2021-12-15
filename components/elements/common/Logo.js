import React from 'react';
import Link from 'next/link';

const Logo = ({ type }) => {
    return (
        <Link href="/">
            <a className="ps-logo">
                <h3>YUPPIECHEF</h3>
            </a>
        </Link>
    );
};

export default Logo;
