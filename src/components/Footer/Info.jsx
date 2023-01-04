import React from 'react'

function Info({icon, inforText}) {
	return (
		<div className='infor v-center'>
			<div className='infor__icon v-center'>
				<i>{icon}</i>
			</div>
			<div className='infor__text'>{inforText}</div>
		</div>
	)
}

export default Info
