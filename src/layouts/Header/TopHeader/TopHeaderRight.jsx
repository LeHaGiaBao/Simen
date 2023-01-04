import React from 'react'
import {BiUser} from 'react-icons/bi'
import {FiHeart} from 'react-icons/fi'
import {BsCheck2Square} from 'react-icons/bs'
import {IoKey} from 'react-icons/io5'
import {FiAnchor} from 'react-icons/fi'

function TopHeaderRight() {
	const item = [
		{
			id: 1,
			icon: <BiUser />,
			content: 'My Account',
		},
		{
			id: 2,
			icon: <FiHeart />,
			content: 'Wishlist',
		},
		{
			id: 3,
			icon: <BsCheck2Square />,
			content: 'Checkout',
		},
		{
			id: 4,
			icon: <IoKey />,
			content: 'Login',
		},
	]

	return (
		<div className='topheader__right v-center'>
			<div className='icon__mobile'>
				<FiAnchor />
			</div>
			<ul className='topheader__right__list v-center'>
				{item.map(({id, icon, content}) => {
					return (
						<TopHeaderRightItem id={id} icon={icon} content={content} />
					)
				})}
			</ul>
		</div>
	)
}

const TopHeaderRightItem = ({icon, content}) => {
	return (
		<li className='topheader__right__item'>
			{icon} {''} {content}
		</li>
	)
}

export default TopHeaderRight
