import {
	lazy
} from 'react'
const Home = lazy(() =>
	import ('../pages/home'))
const Share = lazy(() =>
	import ('../pages/share'))
const Config = lazy(() =>
	import ('../pages/config'))


export const routes = [{
	path: '/zone',
	name: 'home',
	component: Home,
	exact: true,
	title: '首页'
}, {
	path: '/zone/share',
	name: 'share',
	component: Share,
	exact: true,
	title: '朋友圈'
}, {
	path: '/zone/config',
	name: 'config',
	component: Config,
	exact: true,
	title: '配置页'
}]