import React from 'react'
import {BsHouseFill} from 'react-icons/bs'
import {BsTelephoneFill} from 'react-icons/bs'
import {IoMdMail} from 'react-icons/io'
import FooterWidget from './FooterWidget'
import Info from './Info'
import ContentLink from './ContentLink'

function FooterMenu(props) {
	const contactUs = {
		title: 'CONTACT US',
		infor: [
			{
				icon: <BsHouseFill />,
				inforText: '8888 South Avenue Street, New York',
			},
			{
				icon: <BsTelephoneFill />,
				inforText: (
					<>
						<p>(12) 3 456 7896</p>
						<p>(12) 3 456 7895</p>
					</>
				),
			},
			{
				icon: <IoMdMail />,
				inforText: (
					<>
						<span>contact@simen.com</span>
						<span>info@simen.com</span>
					</>
				),
			},
		],
	}

	const footerWidgetLink = [
		{
			title: 'SERVICE',
			links: [
				{link: 'Prices & Currencies'},
				{link: 'Secure Payment'},
				{link: 'Delivery Times & Costs'},
				{link: 'Returns & Exchanges'},
				{link: 'FAQ’s'},
			],
		},
		{
			title: 'ACCOUNT',
			links: [
				{link: 'My Account'},
				{link: 'Wishlist'},
				{link: 'Order History'},
				{link: 'Specials'},
				{link: 'Gift Vouchers'},
			],
		},
		{
			title: 'IMFORMATION',
			links: [
				{link: 'My Account'},
				{link: 'Wishlist'},
				{link: 'Order History'},
				{link: 'Specials'},
				{link: 'Gift Vouchers'},
			],
		},
	]

	return (
		<div className='row'>
			<FooterWidget title={contactUs.title}>
				{contactUs.infor.map(({icon, inforText}, index) => (
					<Info key={index} icon={icon} inforText={inforText} />
				))}
			</FooterWidget>
			{footerWidgetLink.map(({title, links}, i) => (
				<FooterWidget key={i} title={title}>
					{links.map(({link}, index) => (
						<ContentLink key={index} link={link} />
					))}
				</FooterWidget>
			))}
			<FooterWidget title='NEWSLETTER'>
				<span className='register-text'>Register your email for news</span>
				<input type='text' placeholder='Your email here' />
				<button>SUBSCRIBE</button>
			</FooterWidget>
		</div>
	)
}

export default FooterMenu
