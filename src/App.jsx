import React from 'react'
import './assets/style/base.css'
import './assets/style/grid.css'
import './assets/style/style.scss'
import './assets/style/responsive.scss'
import {RouterProvider} from 'react-router-dom'
import {routes} from './routes/index'

function App() {
	return (
		<div className='app'>
			<RouterProvider router={routes} />
		</div>
	)
}

export default App
