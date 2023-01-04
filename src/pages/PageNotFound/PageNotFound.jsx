import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../../layouts/Header'
import './PageNotFound.scss'

function PageNotFound() {
	return (
		<div>
			<Header />
			<div className='grid wide'>
				<div className='not-found'>
					<span className='error-404'>404</span>
					<span className='error-infor'>OPPS, PAGE NOT FOUND</span>
					<span className='error-detail'>
						Sorry,an error has occured. Request Page Not Found.
					</span>
					<Link to='/' className='link-home'>
						Go Home
					</Link>
				</div>
			</div>
		</div>
	)
}

export default PageNotFound
