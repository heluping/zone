import React from 'react'
import {
	Switch,
	Route
} from 'react-router-dom'
import {
	routes
} from './config'


const route = (arr) => arr.map(item => {
	return <Route path={ item.path } component={ item.component } key={ item.name } exact={ item.exact }></Route>
})


export default function Routes() {
	return <Switch> {
		route(routes)
	} < /Switch>
}