import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home/Home'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import Product from '../pages/Product/Product'

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
])

export {routes}
