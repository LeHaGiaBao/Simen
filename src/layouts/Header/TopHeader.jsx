import React from 'react'

import en from '../../assets/image/en.jpg'
import ru from '../../assets/image/ru.jpg'
import bra from '../../assets/image/bra.jpg'
import fr from '../../assets/image/fr.jpg'

import {BiUser} from 'react-icons/bi'
import {FiHeart} from 'react-icons/fi'
import {BsCheck2Square} from 'react-icons/bs'
import {GrKey} from 'react-icons/gr'
import {FiAnchor} from 'react-icons/fi'

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

const TopHeaderLeft = () => {
	const language = [
		{
			id: 1,
			src: en,
			alt: 'en',
			content: 'English',
		},
		{
			id: 2,
			src: ru,
			alt: 'ru',
			content: 'Russian',
		},
		{
			id: 3,
			src: bra,
			alt: 'bra',
			content: 'Brazil',
		},
		{
			id: 3,
			src: fr,
			alt: 'fr',
			content: 'France',
		},
	]

	const currency = [
		{
			id: 1,
			content: 'USD',
		},
		{
			id: 2,
			content: 'EURO',
		},
	]

	return (
		<div className='topheader__left v-center'>
			<ul className='topheader__left__list v-center'>
				<li className='topheader__left__item switch-language'>
					<div className='select-language'>
						<img src={en} alt='en' /> English
						<ul className='language__list'>
							{language.map(({id, src, alt, content}) => {
								return (
									<LanguageItem
										key={id}
										src={src}
										alt={alt}
										content={content}
									/>
								)
							})}
						</ul>
					</div>
				</li>
				<li className='topheader__left__item switch-currency'>
					<div className='select-currency'>USD</div>
					<ul className='currency__list'>
						{currency.map(({id, content}) => {
							return <CurrencyItem key={id} content={content} />
						})}
					</ul>
				</li>
			</ul>
		</div>
	)
}

const LanguageItem = ({src, alt, content}) => {
	return (
		<li className='language__item'>
			<img src={src} alt={alt} /> {content}
		</li>
	)
}

const CurrencyItem = ({content}) => {
	return <li className='currency__item'>{content}</li>
}

const TopHeaderRight = () => {
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
			icon: <GrKey />,
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

export default TopHeader
