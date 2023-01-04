import React, {useState, useRef} from 'react'
import classNames from 'classnames/bind'
import {NavLink, Link} from 'react-router-dom'
import {navsubMenu} from '../../../utils/headerMenu'
import {FaBars} from 'react-icons/fa'

function MenuButtonMobile() {
	const [isShow, setShow] = useState(false)
	const [openId, setOpenId] = useState(0)

	const menuClick = () => setShow(() => true)

	const modal = useRef(null)
	const modalClick = (e) => e.target === modal.current && setShow(() => false)

	return (
		<div className='menu-button-mobile'>
			<i onClick={menuClick}>
				<FaBars />
			</i>
			<div
				className={classNames('menu-button-mobile__modal', {show: isShow})}
				onClick={modalClick}
				ref={modal}>
				<div className='navsub-menu'>
					{navsubMenu.map(({id, title, children1}) => (
						<NavsubMenuItem
							key={id}
							onClick={() => setShow(false)}
							openId={openId}
							setOpenId={setOpenId}
							id={id}
							title={title}
							children1={children1}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

function NavsubMenuItem(props) {
	const {id, title, children1, openId, setOpenId, onClick} = props
	const isHomePage = title.toUpperCase() === 'HOME'
	const [openChildId, setOpenChildId] = useState(0)

	const menuChildren1 = useRef(null)
	const menuChildren1Node = menuChildren1.current

	const handleClick = () => {
		if (openId === id) {
			menuChildren1Node.style.height = '0px'
			setOpenId(0)
		} else {
			menuChildren1Node.style.height = menuChildren1Node.scrollHeight + 'px'
			setOpenId(id)
		}
	}

	if (id !== openId && menuChildren1Node) {
		menuChildren1Node.style.height = menuChildren1Node.scrollHeight + 'px'
		menuChildren1Node.style.height = '0px'
	}

	return (
		<div className='navsub-menu__item'>
			<div className='navsub-menu__item__title'>
				<NavLink
					to={`/React-simen-demo${
						isHomePage ? '' : '/' + title.toLowerCase()
					}`}
					exact={isHomePage}
					onClick={onClick}>
					{title}
				</NavLink>
				{children1.length > 0 && (
					<button
						className={classNames('btn__open-close', {
							open: openId === id,
						})}
						onClick={handleClick}
					/>
				)}
			</div>
			{children1.length > 0 && (
				<div className='navsub-menu__children-1' ref={menuChildren1}>
					{children1.map(({id, title1, children2}) => (
						<NavsubMenuChildren1Item
							key={id}
							id={id}
							title1={title1}
							children2={children2}
							menuChildren1Node={menuChildren1Node}
							openChildId={openChildId}
							setOpenChildId={setOpenChildId}
						/>
					))}
				</div>
			)}
		</div>
	)
}

function NavsubMenuChildren1Item(props) {
	const {id, title1, children2, openChildId, setOpenChildId, menuChildren1Node} = props
	const menuChildren2 = useRef(null)
	const menuChildren2Node = menuChildren2.current

	// When click child open-close-button
	const handleClick = () => {
		console.log(menuChildren1Node.pageYoffset)
		if (id === openChildId) {
			console.log(menuChildren1Node.style.height)
			menuChildren1Node.style.height = 'auto'
			menuChildren2Node.style.height = '0px'
			setOpenChildId(0)
		} else {
			console.log(menuChildren1Node.style.height)
			menuChildren2Node.style.height = menuChildren2Node.scrollHeight + 'px'
			menuChildren1Node.style.height = 'auto'
			setOpenChildId(id)
		}
	}

	if (id !== openChildId && menuChildren2Node) {
		menuChildren2Node.style.height = '0px'
	}

	return (
		<div className='navsub-menu__children-1__item'>
			<div className='navsub-menu__children-1__title navsub-menu__item__title'>
				<Link to='/React-simen-demo/no-content'>{title1}</Link>
				{children2.length > 0 && (
					<button
						className={classNames('btn__open-close', {
							open: openChildId === id,
						})}
						onClick={handleClick}
					/>
				)}
			</div>
			{children2.length > 0 && (
				<div className='navsub-menu__children-2' ref={menuChildren2}>
					{children2.map(({id, title2}) => (
						<NavsubMenuChildren2Title key={id} title2={title2} />
					))}
				</div>
			)}
		</div>
	)
}

function NavsubMenuChildren2Title(props) {
	const {title2} = props
	return (
		<div className='navsub-menu__children-2__title navsub-menu__item__title'>
			<Link to='/React-simen-demo/no-content'>{title2}</Link>
		</div>
	)
}

export default MenuButtonMobile
