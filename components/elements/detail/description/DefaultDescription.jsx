import React from 'react';
import { Tabs } from 'antd';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/ModuleProductDetailDescription';
import PartialReview from '~/components/elements/detail/description/PartialReview';

const { TabPane } = Tabs;

const DefaultDescription = ({product}) => {
    
    return (
        <div className="ps-product__content ps-tab-root">
            <Tabs defaultActiveKey="1">
                <TabPane tab="Description" key="1">
				    <ModuleProductDetailDescription product={product} />
                </TabPane>
                <TabPane tab="Reviews" key="4">
                    <PartialReview product={product} />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default DefaultDescription;
