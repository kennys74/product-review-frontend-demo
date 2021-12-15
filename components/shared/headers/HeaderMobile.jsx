import React from 'react';
import Link from 'next/link';

const HeaderMobile = () => {
    
        return (
            <header className="header header--mobile">
                <div className="navigation--mobile">
                    <div className="navigation__left">
                        <Link href="/">
                           <h3>YUPPIECHEF</h3>
                        </Link>
                    </div>
                </div>
                <div className="ps-panel__search-results">
                    <form
                        className="ps-form--search-mobile"
                        action="/"
                        method="get"
                        >
                        <div className="form-group--nest">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search products..."
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                            <button>
                                <i className="icon-magnifier"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </header>
        );
    }

export default HeaderMobile;
