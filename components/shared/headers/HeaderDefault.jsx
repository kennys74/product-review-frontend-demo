import React, { useEffect, useState } from 'react';
import Logo from '~/components/elements/common/Logo';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import NavigationDefault from '~/components/shared/navigation/NavigationDefault';
import HeaderActions from '~/components/shared/headers/modules/HeaderActions';
import { stickyHeader } from '~/utilities/common-helpers';
import MenuCategoriesDropdown from '~/components/shared/menus/MenuCategoriesDropdown';
import NotificationBanner from '~/components/shared/headers/modules/NotificationBanner';

const HeaderDefault = () => {
    const [showNoticeBanner, setShowNoticeBanner] = useState(false);
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
        setTimeout(function () {
            setShowNoticeBanner(true);
        }, 500); //wait 0.5 seconds
    }, []);

    return (
        <header
            className="header header--1"
            data-sticky="true"
            id="headerSticky">
            {showNoticeBanner && <NotificationBanner />}
            <div className="header__top">
                <div className="ps-container">
                    <div className="header__left">
                        <Logo />
                        <MenuCategoriesDropdown />
                    </div>
                    <div className="header__center">
                        <SearchHeader />
                    </div>
                    <div className="header__right">
                        <HeaderActions />
                    </div>
                </div>
            </div>

            <NavigationDefault />
        </header>
    );
};

export default HeaderDefault;
