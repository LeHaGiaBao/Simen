import React from 'react'
import classNames from 'classnames'

function NavSuggestTitles({titles, active, setActive}) {
	return (
		<div className='nav-suggest__titles-row row no-gutters'>
			{titles.map(({id, img, title}) => (
				<div key={id} className='col xlg-1-3 lg-1-3'>
					<div
						className={classNames('suggest__title-img', {
							'suggest__title-img--active': id === active,
						})}
						onClick={() => setActive(id)}>
						<div>
							<img src={img} alt='' />
							<p>{title}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default NavSuggestTitles
