import React from 'react'
import {Link} from 'react-router-dom'
import img1 from '../../assets/image/img1.png'
import img2 from '../../assets/image/img2.jpg'
import img3 from '../../assets/image/img3.jpg'

function ContentBoxRight() {
	return (
		<div className='content-box-right col xlg-6 lg-6 md-6 sm-12 xsm-12'>
			<Link to='/' className='content-box-right__top img-effect-hover-1'>
				<img src={img1} alt='' className='content-box-right__top__img' />
			</Link>
			<div className='row content-box-right__bot'>
				<div className='col xlg-6 lg-6 md-6 sm-6 xsm-6'>
					<Link
						to='/'
						className='content-box-right__bot__left img-effect-hover-2'>
						<img
							src={img2}
							alt=''
							className='content-box-right__bot__left__img'
						/>
					</Link>
				</div>
				<div className='col xlg-6 lg-6 md-6 sm-6 xsm-6'>
					<Link
						to='/'
						className='content-box-right__bot__right img-effect-hover-3'>
						<img
							src={img3}
							alt=''
							className='content-box-right__bot__right__img'
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ContentBoxRight
