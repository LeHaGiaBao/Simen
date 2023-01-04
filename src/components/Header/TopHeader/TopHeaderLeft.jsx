import React from 'react'
import en from '../../../assets/image/en.jpg'
import ru from '../../../assets/image/ru.jpg'
import bra from '../../../assets/image/bra.jpg'
import fr from '../../../assets/image/fr.jpg'

function TopHeaderLeft() {
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

export default TopHeaderLeft
