import React from 'react'
import TopHeaderLeft from './TopHeader/TopHeaderLeft'
import TopHeaderRight from './TopHeader/TopHeaderRight'

function TopHeader() {
	return (
		<div className='top-header'>
			<div className='grid wide'>
				<div className='topheader v-center'>
					<TopHeaderLeft />
					<TopHeaderRight />
				</div>
			</div>
		</div>
	)
}

export default TopHeader
