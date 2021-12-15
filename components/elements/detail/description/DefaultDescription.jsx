import React from 'react';
import { Tabs } from 'antd';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/ModuleProductDetailDescription';
import PartialReview from '~/components/elements/detail/description/PartialReview';

const { TabPane } = Tabs;

const DefaultDescription = ({product}) => {

    return (
        <div className="ps-product__content ps-tab-root">
            <Tabs defaultActiveKey="1">
            <TabPane tab="Reviews" key="1">
                    <PartialReview product={product} />
                </TabPane>
                <TabPane tab="Description" key="4">
				    <ModuleProductDetailDescription product={product} />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default DefaultDescription;
