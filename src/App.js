import React, {
	lazy,
	Suspense
} from 'react'
import {
	BrowserRouter as Router,
	Route,
	Redirect
} from 'react-router-dom'
import Progress from './components/progress'
const Home = lazy(() =>
	import ('./pages'))
const Layout = lazy(() =>
	import ('./pages/layout'))
const Login = lazy(() =>
	import ('./pages/login'))



const App = props => {
	let auth = true
	const authComponent = auth ? <Layout></Layout> : <Redirect to='/login'></Redirect>

	return <Suspense fallback={ <Progress></Progress> } >
	<Router>
		<Route path='/' component={ Home } exact></Route>
		<Route path='/zone' render={()=> authComponent}></Route>
		<Route path='/login' component={Login} exact></Route>
	</Router>
	</Suspense>
}


export default App