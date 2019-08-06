import React, {
	useState,
	useEffect
} from 'react'
import './index.scss'


const Home = props => {
	const [bool, setBool] = useState(true)
	const changePage = () => {
		let ul = document.querySelector('.home-ul ul')
		let current = 0
		ul.onmousewheel = e => {

			if (e.wheelDelta < 0) {
				if (bool) {
					if (current < ul.children.length) {
						let h = ul.children[current].offsetHeight
						current = current + 1
						console.log(current)

					}
					setBool(false)
					setTimeout(() => {
						setBool(true)
					}, 1000)
				}
			} else {
				if (bool) {
					if (current > 0) {

					}
					setBool(false)
					setTimeout(() => {
						setBool(true)
					}, 1000)
				}
			}
		}

	}

	useEffect(() => {
		changePage()
	})

	return <section id='home'>
	<div className='home-ul'>
	<ul>
		{
			[0, 1, 2].map(item=> {
				return <li key={ item }>{item}</li>
			})
		}
	</ul>
	</div>
	</section>
}


export default Home