import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home/Home'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import Product from '../pages/Product/Product'
import Furniture from '../pages/Furniture/Furniture'
import CoffeeTables from '../pages/CoffeeTables/CoffeeTables'
import Sofas from '../pages/Sofas/Sofas'

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <PageNotFound />,
	},
	{
		path: '/product/:id',
		element: <Product />,
	},
	{
		path: '/furniture',
		element: <Furniture />,
	},
	{
		path: '/coffee-tables',
		element: <CoffeeTables />,
	},
	{
		path: '/sofas',
		element: <Sofas />,
	},
])

export {routes}
