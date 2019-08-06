import React from 'react'
import Chart from './chart'
import Charts from './charts'
import './index.css'


export default class Home extends React.Component {
	render = () => {
		return <div>
			<p>年龄分布：</p>
			<Chart></Chart> 
			<p className='titles'>日访问量：</p>
			<Charts > < /Charts> 
			</div>
	}
}