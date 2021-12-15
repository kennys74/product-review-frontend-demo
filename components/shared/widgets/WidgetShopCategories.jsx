import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from 'antd';

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1'];

const WidgetShopCategories = () => {

  return (
    <Menu mode="inline" >
	  <SubMenu key="sub1" title="Air Fryers">
	  <Menu.Item key="1">
		<a href="#">Brand 1</a>
		</Menu.Item>
        <Menu.Item key="2">
		<a href="#">Brand 2</a>
		</Menu.Item>
		<Menu.Item key="3">
		<a href="#">Brand 3</a>
		</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default WidgetShopCategories;
