import React from 'react'
import classNames from 'classnames'

function NavProductItem({id, active, title}) {
	return (
		<li
			className={classNames('nav-product__item', {
				'nav-product__item--first': id === 1,
			})}>
			<span
				className={classNames('nav-product__item__title-link', {
					'nav-product__item__title-link--active': active === id,
				})}>
				{title}
			</span>
		</li>
	)
}

export default NavProductItem
