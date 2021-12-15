import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import AboutInfo from '~/components/partials/page/about-us/AboutInfo';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';

const AboutUsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Our Story',
        },
    ];
    return (
        <PageContainer footer={<FooterDefault />} title="Our Story">
            <div className="ps-page--single">
                <img src="/static/img/about-us.jpg" alt="" />
                <BreadCrumb breacrumb={breadCrumb} />
                <AboutInfo />
            </div>
        </PageContainer>
    );
};
export default AboutUsPage;
