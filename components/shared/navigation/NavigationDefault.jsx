import React, { Component } from 'react';
import Link from 'next/link';
import Menu from '../../elements/menu/Menu';
import menuData from '../../../public/static/data/menu';
import MenuCategoriesDropdown from '~/components/shared/menus/MenuCategoriesDropdown';

class NavigationDefault extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navigation">
                <div className="ps-container">
                    <div className="navigation__left">
                        <MenuCategoriesDropdown />
                    </div>
                    <div className="navigation__right">
                        <Menu
                            source={menuData.menuPrimary.menu_1}
                            className="menu"
                        />
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationDefault;
