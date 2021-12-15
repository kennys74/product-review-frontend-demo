import React, { useEffect } from 'react';
import { BackTop } from 'antd';
import { useDispatch } from 'react-redux';
import PageLoader from '~/components/elements/common/PageLoader';
import NavigationList from '~/components/shared/navigation/NavigationList';
import MainHead from '~/components/layouts/modules/MainHead';

const MasterLayout = ({ children }) => {
    const dispatch = useDispatch();

    return (
        <>
            <MainHead />
            {children}
            <PageLoader />
            <NavigationList />
            <BackTop>
                <button className="ps-btn--backtop">
                    <i className="icon-arrow-up"></i>
                </button>
            </BackTop>
        </>
    );
};

export default MasterLayout;
