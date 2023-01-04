import React from 'react'
import {Link} from 'react-router-dom'

function ContentLink({link}) {
	return (
		<Link to='/' className='footer__widget__content__link'>
			{link}
		</Link>
	)
}

export default ContentLink
