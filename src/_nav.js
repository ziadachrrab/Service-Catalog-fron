import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBookmark,
  cilCart,
  cilHouse,
  cilMoney,
  cilPlus,
  cilQrCode,
  cilStorage,
  cilSwapHorizontal,
  cilTags,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilHouse} customClassName="nav-icon" />,
    badge: {
      color: 'warning',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'Inventory',
    to: '/products',
    icon: <CIcon icon={cilStorage} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Products',
        to: '/products/productList',
        icon: <CIcon icon={cilTags} customClassName="nav-icon" />,
        style: { marginLeft: '25px' },
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Brands',
    to: '/brands',
    icon: <CIcon icon={cilBookmark} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Brands',
        to: '/brands/brandList',
        icon: <CIcon icon={cilBookmark} customClassName="nav-icon" />,
        style: { marginLeft: '25px' },
      },
      {
        component: CNavItem,
        name: 'Add Brand',
        to: '/brands/addBrand',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
        style: { marginLeft: '25px' },
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Transactions',
    to: '/transactions',
    icon: <CIcon icon={cilSwapHorizontal} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Purchases',
        to: '/transactions/purchases',
        icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
        style: { marginLeft: '25px' },
      },
      {
        component: CNavItem,
        name: 'Sales',
        to: '/transactions/sales',
        icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
        style: { marginLeft: '25px' },
      },
      {
        component: CNavItem,
        name: 'Print Barcode',
        to: '/transactions/barcode',
        icon: <CIcon icon={cilQrCode} customClassName="nav-icon" />,
        style: { marginLeft: '25px' },
      },
    ],
  },
]

export default _nav
