import React from 'react'
import logo from '../../assets/image/logo.png'
import {FaTruck} from 'react-icons/fa'
import {MdCloudUpload} from 'react-icons/md'
import {BsFillGiftFill} from 'react-icons/bs'

function BotHeader() {
	return (
		<div className='bot-header'>
			<div className='grid wide'>
				<div className='row botheader'>
					<div className='botheader__brand col xlg-3 lg-3 md-3 sm-12 xsm-12'>
						<a href='/'>
							<img src={logo} alt='SNS Simen' />
						</a>
					</div>
					<div className='col xlg-9 lg-9 md-9 sm-12 xsm-12'>
						<div className='row'>
							<div className='col xlg-4 lg-4 md-4'>
								<div className='sns-icon-box v-center'>
									<div className='sns-icon-left v-center'>
										<i>
											<FaTruck />
										</i>
									</div>
									<div className='sns-icon-right-content'>
										<h4>FREE DELIVERY WORLDWIDE</h4>
										<span>On order over $100</span>
									</div>
								</div>
							</div>
							<div className='col xlg-4 lg-4 md-4'>
								<div className='sns-icon-box v-center'>
									<div className='sns-icon-left v-center'>
										<i>
											<MdCloudUpload />
										</i>
									</div>
									<div className='sns-icon-right-content'>
										<h4>UP TO 20% OFF COSY LAYERS</h4>
										<span>Lorem ipsum dolor sit amet</span>
									</div>
								</div>
							</div>
							<div className='col xlg-4 lg-4 md-4'>
								<div className='sns-icon-box v-center'>
									<div className='sns-icon-left v-center'>
										<i>
											<BsFillGiftFill />
										</i>
									</div>
									<div className='sns-icon-right-content'>
										<h4>BUY 1 GET 1 FREE</h4>
										<span>On order over $100</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BotHeader
