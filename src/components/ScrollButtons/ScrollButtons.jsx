import {forwardRef} from 'react'
import {FaLongArrowAltLeft, FaLongArrowAltRight} from 'react-icons/fa'

function ScrollButtons(props, ref) {
	const {ref1, ref2} = ref
	return (
		<div className='scroll__button'>
			<button className='prew-button' ref={ref1}>
				<i className='fas fa-long-arrow-alt-left'>
					<FaLongArrowAltLeft />
				</i>
			</button>
			<button className='next-button' ref={ref2}>
				<i className='fas fa-long-arrow-alt-right'>
					<FaLongArrowAltRight />
				</i>
			</button>
		</div>
	)
}

export default forwardRef(ScrollButtons)
