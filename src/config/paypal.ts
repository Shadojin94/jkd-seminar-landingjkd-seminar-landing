// PayPal Configuration
export const PAYPAL_CONFIG = {
  // Set to 'sandbox' for testing, 'production' for live payments
  environment: 'production' as 'sandbox' | 'production',
  
  // Client IDs (your client needs to provide the production one)
  clientIds: {
    sandbox: 'AYTQ54_joX4rcLj87eAFr6FG1C5aXRp2v3dt78BXm6NyabrQSXsnWB_piWDBquonEvrdO0SgHheTp5NY',
    production: 'AYTQ54_joX4rcLj87eAFr6FG1C5aXRp2v3dt78BXm6NyabrQSXsnWB_piWDBquonEvrdO0SgHheTp5NY'
  },
  
  currency: 'USD',
  locale: 'en_US'
}

// Get the appropriate client ID based on environment
export const getPayPalClientId = () => {
  return PAYPAL_CONFIG.clientIds[PAYPAL_CONFIG.environment]
}

// Get PayPal script URL
export const getPayPalScriptUrl = (clientId: string) => {
  const baseUrl = 'https://www.paypal.com/sdk/js'
  const params = new URLSearchParams({
    'client-id': clientId,
    'currency': PAYPAL_CONFIG.currency,
    'locale': PAYPAL_CONFIG.locale,
    'intent': 'capture',
    'enable-funding': 'venmo,paylater',
    'disable-funding': 'card'
  })
  
  return `${baseUrl}?${params.toString()}`
}
