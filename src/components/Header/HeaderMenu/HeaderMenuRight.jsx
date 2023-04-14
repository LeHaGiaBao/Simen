import React from 'react'
import {IoSearch} from 'react-icons/io5'
import ViewCart from './ViewCart'

function HeaderMenuRight() {
	return (
		<div className='header__menu__right v-center'>
			<div className='header__menu__right__search'>
				<i>
					<IoSearch />
				</i>
				<div className='search__content'>
					<form action='' className='v-center'>
						<input
							type='text'
							placeholder='Search entire store here ...'
						/>
						<button type='submit'>SEARCH</button>
					</form>
				</div>
				{/* <ViewCart /> */}
			</div>
		</div>
	)
}

export default HeaderMenuRight
