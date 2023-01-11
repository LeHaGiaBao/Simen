import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import classNames from 'classnames/bind'
import {img11} from '../../../utils/image'
import {data} from '../../../utils/headerMenu'

function SubMenu() {
	return (
		<ul className='sub-menu v-center hide-on-low-PC-mobile-tablet'>
			{data.map(({id, content}) => (
				<SubMenuItem key={id} id={id} props={content} />
			))}
		</ul>
	)
}

const SubMenuItem = ({id, props}) => {
	const {name, isParent, items, list, listImages, privateClass, colClass, imageLink} =
		props
	const isHomePage = name === 'HOME'

	return (
		<div
			className={classNames('sub-menu__item', {
				'sub-menu__item--static': list || listImages,
			})}>
			<NavLink
				to={`${isHomePage ? '' : '/' + name.toLowerCase()}`}
				exact={isHomePage}
				activeClassName='sub-menu__item__link--active'
				className={classNames('sub-menu__item__link', {
					'sub-menu__item__link--parent': isParent,
				})}>
				{name}
			</NavLink>
			{items.length > 0 && (
				<ul className='sub-menu__item__children sub-menu__item__children--col-1'>
					{items.map(({id, item}) => (
						<li className='col-1__item' key={id}>
							<Link to='/no-content' className='col-1__item__link'>
								{item}
							</Link>
						</li>
					))}
				</ul>
			)}
			{colClass && (
				<div className={classNames('sub-menu__item__children', privateClass)}>
					<div className='row'>
						{list &&
							list.map(({id, title, items}) => {
								return (
									<div
										key={id}
										className={classNames(colClass)}>
										<TitleAndItems
											title={title}
											items={items}
										/>
									</div>
								)
							})}
						{imageLink && (
							<div className={classNames(colClass)}>
								<Link to='/no-content' className='image-link'>
									<img src={img11} alt='' />
								</Link>
							</div>
						)}
						{listImages &&
							listImages.map(({id, img, title, content}) => {
								return (
									<div
										className={classNames(colClass)}
										key={id}>
										<ImageContent
											img={img}
											title={title}
											content={content}
										/>
									</div>
								)
							})}
					</div>
				</div>
			)}
		</div>
	)
}

const TitleAndItems = ({title, items}) => {
	return (
		<div className='title-and-items'>
			<h3>{title}</h3>
			<ul className='items'>
				{items && items.map(({id, item}) => <Item key={id} item={item} />)}
			</ul>
		</div>
	)
}

const ImageContent = ({img, title, content}) => {
	return (
		<>
			<Link to='/no-content' className='image'>
				<img src={img} alt='' />
			</Link>
			<Link to='/no-content' className='title'>
				{title}
			</Link>
			<span className='content'>{content}</span>
		</>
	)
}

const Item = ({item}) => {
	return (
		<li className='item'>
			<Link to='/no-content' className='link'>
				{item}
			</Link>
		</li>
	)
}

export default SubMenu
