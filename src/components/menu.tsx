import React from 'react'
import { Button, Drawer, Menu, type MenuProps } from 'antd';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router';

const menuItems: MenuProps['items'] = [
  {
    key: 'my-cv',
    label: <NavLink to="/my-cv">My CV</NavLink>,
  },
  {
    key: 'contact',
    label: <NavLink to="/contact">Contact</NavLink>,
  },
];


const MenuMobile = () => {
  const [open, setOpen] = React.useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  
  return (
    <>
      <Button
        onClick={showDrawer}
        type="text"
        className="p-0!"
        icon={<Icon icon="simple-line-icons:menu" width="24" height="24" />}
      />

      <Drawer
        open={open}
        onClose={onClose}
        closable={{
          placement: 'end',
          closeIcon: <Icon icon="material-symbols:close-rounded" width="24" height="24" />
        }}
      >
        <Menu mode="vertical" items={menuItems} defaultSelectedKeys={[window.location.pathname]}/>
      </Drawer>
    </>
  )
}

export default React.memo(MenuMobile);