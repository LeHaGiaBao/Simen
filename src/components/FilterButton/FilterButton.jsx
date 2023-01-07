import React from 'react'
import './FilterButton.scss'

function FilterButton({onClick}) {
	return (
		<button className='filter-button' onClick={onClick}>
			FILTER
		</button>
	)
}

export default FilterButton
