import React, {createRef, useEffect, useRef, useState} from 'react'
import {useTrail, animated} from '@react-spring/web'
import classNames from 'classnames'

function ContentBoxLeft() {
	const [bulletIndex, setBulletIndex] = useState(0)

	const numberBullet = [...Array(3).keys()]
	const numberImagesSplit = [...Array(5).keys()]

	const refs = useRef(
		[...new Array(3)].map(() =>
			[...new Array(numberImagesSplit.length)].map(() => createRef())
		)
	)

	const trail = useTrail(5, {
		from: {opacity: 0, transform: 'translateY(-100vh)'},
		to: {opacity: 1, transform: 'translateY(0)'},
		reset: true,
	})

	useEffect(() => {
		const interval = setInterval(
			() =>
				setBulletIndex(
					(bulletIndex) => (bulletIndex + 1) % numberBullet.length
				),
			5000
		)
		numberBullet.forEach((index) => {
			const w = refs.current[index][0].current.offsetWidth
			numberImagesSplit.forEach((id) => {
				const ImageItemNodeId = refs.current[index][id].current
				ImageItemNodeId.style.backgroundPosition = `-${w * id}px 0`
				ImageItemNodeId.style.left = `${(w - 1) * id}px`
			})
		})
		return () => clearInterval(interval)
	}, [])

	// Animation when change BulletIndex
	useEffect(() => {
		numberBullet.forEach((index) => {
			numberImagesSplit.forEach((id) => {
				const ImageItemNodeId = refs.current[index][id].current
				if (index === bulletIndex) {
					ImageItemNodeId.style.zIndex = '2'
				} else {
					ImageItemNodeId.style.zIndex = '1'
				}
			})
		})
	}, [bulletIndex])

	const handleClick = (id) => setBulletIndex(id)

	return (
		<div className='content-box-left col xlg-6 lg-6 md-6 sm-12 xsm-12'>
			<div className='image__list'>
				{numberBullet.map((index) => {
					return trail.map(({...otherProps}, id) => {
						if (index !== bulletIndex) otherProps = {}
						return (
							<animated.div
								key={id}
								className={classNames(`image__item${index}`)}
								style={{...otherProps}}
								ref={refs.current[index][id]}
							/>
						)
					})
				})}
				<div className='bullets'>
					{numberBullet.map((id) => {
						return (
							<div
								key={id}
								className={classNames('bullet', {
									selected: bulletIndex === id,
								})}
								onClick={() => handleClick(id)}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default ContentBoxLeft
