import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

const HeaderActions = ({ ecomerce, auth }) => {
    
    return (
        <div className="header__actions">
    
        </div>
    );
};

export default connect((state) => state)(HeaderActions);
