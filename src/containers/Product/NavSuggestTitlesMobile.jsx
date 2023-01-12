import React from 'react'
import classNames from 'classnames'
import {FaBars} from 'react-icons/fa'

function NavSuggestTitlesMobile({titles, active, setActive}) {
	return (
		<div className='nav-suggest__mobile-button'>
			<i className='fas fa-bars'>
				<FaBars />
			</i>
			<div className='nav-suggest__mobile-button__title__list'>
				{titles.map(({id, title}) => (
					<div
						key={id}
						className={classNames(
							'nav-suggest__mobile-button__title__item',
							{
								'nav-suggest__mobile-button__title__item--active':
									id === active,
							}
						)}
						onClick={() => setActive(id)}>
						{title}
					</div>
				))}
			</div>
		</div>
	)
}

export default NavSuggestTitlesMobile
