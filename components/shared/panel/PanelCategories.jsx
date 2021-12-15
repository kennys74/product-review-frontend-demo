import React, { Component } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';

const { SubMenu } = Menu;

class PanelCategories extends Component {
    constructor(props) {
        super(props);
    }

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(
            key => this.state.openKeys.indexOf(key) === -1
        );
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        return (
            <WidgetShopCategories 
            onOpenChange={this.onOpenChange}
            />
        );
    }
}

export default PanelCategories;
