const paypal = require('@paypal/checkout-server-sdk')

// Creating an environment
const clientId = process.env.PAYPAL_CLIENT_ID
const clientSecret = process.env.PAYPAL_CLIENT_SECRET
// This sample uses SandboxEnvironment. In production, use LiveEnvironment
// const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret)
const environment = new paypal.core.LiveEnvironment(clientId, clientSecret)
const payPalClient = new paypal.core.PayPalHttpClient(environment)

export { payPalClient, paypal }
