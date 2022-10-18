import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GithubProvider } from './context/context'
import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider
			domain='rizalshmbg.us.auth0.com'
			clientId='V50glkUBGF4HaegLFtZGdCmcbIKM2eK4'
			redirectUri={window.location.origin}
			cacheLocation='localstorage'
		>
			<GithubProvider>
				<App />
			</GithubProvider>
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
