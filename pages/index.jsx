import React, { useState, useEffect } from 'react';
import HomeDefaultTopCategories from '~/components/partials/homepage/home-default/HomeDefaultTopCategories';
import PageContainer from '~/components/layouts/PageContainer';

const HomepageDefaultPage = () => {
    return (
        <PageContainer title="Yuppiechef Demo">
            <main id="homepage-1">
                <HomeDefaultTopCategories />
            </main>
        </PageContainer>
    );
};

export default HomepageDefaultPage;
