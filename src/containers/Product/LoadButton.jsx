import React, {useState} from 'react'

const LoadButton = ({setListProduct}) => {
	const [isLoading, setIsLoading] = useState(false)

	const handleClick = () => {
		setIsLoading(true)
		setListProduct((prevState) => [
			...prevState,
			...Array.from(Array(5).keys(), (n) => n + prevState.length),
		])
		setTimeout(() => setIsLoading(false), 400)
	}
	return (
		<button onClick={handleClick} className='load-btn'>
			{isLoading ? 'LOADING...' : 'LOAD MORE ITEMS'}
		</button>
	)
}

export default LoadButton
