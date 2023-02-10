import HeaderBeche from 'components/HeaderBeche'
import FooterBeche from 'components/FooterBeche'
import ProductBeche from 'pages/Beche/Product/ProductBeche'
import OrderPage from 'pages/Order/OrderPage'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MetaTags from 'react-meta-tags'

const RouterBeche = () => {
	return (
		<>
			<MetaTags>
				<title>Bêche | 100% Canadian Sea Cucumber Supplement</title>
				<meta
					name='description'
					content='Bêche provides a powerful dose of concentrated Sea Cucumber, which has long been recognized as a natural source of antioxidants and amino acids.'
				/>
				<link rel='icon' href='/images/icon/beche-icon.png' />
			</MetaTags>
			<Router>
				<HeaderBeche />
				<div
					style={{
						maxWidth: 1920,
						margin: '0 auto',
						minHeight: '100vh'
					}}
				>
					<Switch>
						<Route exact path='/' component={ProductBeche} />
						<Route path='/order' component={OrderPage} />
					</Switch>
				</div>
				<FooterBeche />
			</Router>
		</>
	)
}

export default RouterBeche
