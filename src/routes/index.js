import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home/Home'
import PageNotFound from '../pages/PageNotFound/PageNotFound'

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <PageNotFound />,
	},
])

export {routes}
