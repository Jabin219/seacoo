import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Home from 'pages/Home'
import HomeCN from 'pages/HomeCN'
import Contact from 'pages/Contact'
import About from 'pages/About'
import NoMatch from 'pages/NoMatch'
import OrderPage from 'pages/Order/OrderPage'
import ProductRouter from 'pages/Product/ProductRouter'
// blog-router
import BlogRouter from 'pages/Blog/BlogRouter'
// footer linked pages
import FAQs from 'pages/FAQs'
import TermOfUse from 'pages/TermOfUse'
import PrivacyPolicy from 'pages/PrivacyPolicy'
import ShippingAndReturns from 'pages/ShippingAndReturns'
import EastCoast from 'pages/EastCoast'
import WestCoast from 'pages/WestCoast'
import RedSCBiology from 'pages/SeaCucumbers/RedSCBiology'
import AtlanticSCBiology from 'pages/SeaCucumbers/AtlanticSCBiology'
import RedSCHistory from 'pages/SeaCucumbers/RedSCHistory'
import AtlanticSCHistory from 'pages/SeaCucumbers/AtlanticSCHistory'
import AnnouncementBar from 'components/AnnouncementBar'
import LandingPage from 'pages/LandingPage'
import WxPubCode from 'pages/WxPubCode'
import { isSeacooCN } from 'utils'
import MetaTags from 'react-meta-tags'

interface Props {
	setSubscribeWindowOpen: (subscribeWindowOpen: boolean) => void
}
const RouterSeacoo = ({ setSubscribeWindowOpen }: Props) => {
	return (
		<Router>
			<Header />
			{!isSeacooCN() && (
				<div className='pop-up-bar'>
					<AnnouncementBar setSubscribeWindowOpen={setSubscribeWindowOpen} />
				</div>
			)}
			<MetaTags>
				<title>Wild Dried Canadian Sea Cucumber | Seacoo</title>
				<link rel='icon' href='/images/icon/seacoo-mini-icon.png' />
				<meta
					name='description'
					content='The most well-known North American brand for Canada Sea Cucumber, processing 6 million of sea cucumber aunnually from East Coast and West Coast Canada.'
				/>
			</MetaTags>
			<div
				style={{
					maxWidth: 1920,
					margin: '0 auto',
					minHeight: '100vh'
				}}
			>
				<Switch>
					{/* products pages */}
					<Route path='/product' component={ProductRouter} />
					{/* blogs pages */}
					<Route path='/blog' component={BlogRouter} />
					<Route path='/contact' component={Contact} />
					<Route path='/about' component={About} />

					{/* order page */}
					<Route path='/order' component={OrderPage} />

					{/* footer linked pages */}
					<Route path='/term-of-use' component={TermOfUse} />
					<Route path='/privacy-policy' component={PrivacyPolicy} />
					<Route path='/shipping-and-returns' component={ShippingAndReturns} />
					<Route path='/east-coast' component={EastCoast} />
					<Route path='/west-coast' component={WestCoast} />
					<Route path='/faqs' component={FAQs} />
					<Route path='/red-sea-cucumber-biology' component={RedSCBiology} />
					<Route
						path='/atlantic-sea-cucumber-biology'
						component={AtlanticSCBiology}
					/>
					<Route path='/red-sea-cucumber-history' component={RedSCHistory} />
					<Route
						path='/atlantic-sea-cucumber-history'
						component={AtlanticSCHistory}
					/>
					<Route path='/landing-page' component={LandingPage} />
					<Route path='/wxpub/:orderId' component={WxPubCode} />
					<Route exact path='/' component={!isSeacooCN() ? Home : HomeCN} />
					<Route path='*' component={NoMatch} />
				</Switch>
			</div>
			<Footer />
		</Router>
	)
}

export default RouterSeacoo
