import React from 'react'
import TopHeader from '../components/Header/TopHeader'
import BotHeader from '../components/Header/BotHeader'
// import HeaderMenu from '../components/Header/HeaderMenu'

function Header() {
	return (
		<header className='header'>
			<TopHeader />
			<BotHeader />
			{/* <HeaderMenu /> */}
		</header>
	)
}

export default Header
