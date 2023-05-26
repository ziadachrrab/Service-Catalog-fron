import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

//Inventory
const Products = React.lazy(() => import('./views/products/productList/Products'))
const AllBrands = React.lazy(() => import('./views/products/productList/Products'))
const ProductState = React.lazy(() => import('./views/products/productState/State'))
const ProductBrand = React.lazy(() => import('./views/brands/brandList/ProductBrands'))
const AddBrand = React.lazy(() => import('./views/brands/addBrand/AddBrand'))

//Transactions
const Sales = React.lazy(() => import('./views/transactions/sales/Sales'))
const Purchases = React.lazy(() => import('./views/transactions/purchases/Purchases'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/products', name: 'Inventory', element: Products, exact: true },
  { path: '/products/productList', name: 'Products', element: Products },
  { path: '/products/productState', name: 'Status', element: ProductState },
  { path: '/brands', name: 'Brands', element: AllBrands, exact: true },
  { path: '/brands/brandList', name: 'Brands', element: ProductBrand },
  { path: '/brands/addBrand', name: 'Add', element: AddBrand },
  { path: '/transactions', name: 'Transactions', element: Sales, exact: true },
  { path: '/transactions/sales', name: 'Sales', element: Sales },
  { path: '/transactions/purchases', name: 'Purchases', element: Purchases },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
