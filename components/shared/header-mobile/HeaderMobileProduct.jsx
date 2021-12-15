import React, { useEffect } from 'react';
import { stickyHeader } from '~/utilities/common-helpers';
import { useRouter } from 'next/router'

const HeaderMobileProduct = () => {
    const router = useRouter();
    const stickyHeader = () => {
        let number =
            window.pageXOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        const header = document.getElementById('header-mobile');
        if (header !== null) {
            if (number >= 300) {
                header.classList.add('header--sticky');
            } else {
                header.classList.remove('header--sticky');
            }
        }
    };
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    return (
        <header
            className="header header--mobile header--mobile-product"
            id="header-mobile"
            data-sticky="true">
            <div className="navigation--mobile">
                <div className="navigation__left">
                <button
                    className="ps-btn backbtn backbtn-top"
                    onClick={() => router.back()}>
                    Back</button>
                </div>
                <div className="navigation__right">
                </div>
            </div>
        </header>
    );
};

export default HeaderMobileProduct;
