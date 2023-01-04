import React from 'react'
import MenuButtonMobile from './HeaderMenu/MenuButtonMobile'
import SubMenu from './HeaderMenu/SubMenu'
import HeaderMenuRight from './HeaderMenu/HeaderMenuRight'

function HeaderMenu() {
	return (
		<div className='header__menu'>
			<div className='grid wide'>
				<div className='header__menu__container v-center'>
					<MenuButtonMobile />
					<SubMenu />
					<HeaderMenuRight />
				</div>
			</div>
		</div>
	)
}

export default HeaderMenu
