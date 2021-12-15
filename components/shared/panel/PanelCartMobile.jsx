import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const PanelCartMobile = ({ ecomerce, props }) => {
   
    return (
        <div className="ps-cart--mobile">
            <div className="ps-cart__content">
            </div>
        </div>
    );
};
export default connect((state) => state)(PanelCartMobile);
