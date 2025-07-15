import { useEffect } from 'react'
import { getPayPalScriptUrl, PAYPAL_CONFIG } from '../config/paypal'

interface PayPalScriptProps {
  clientId: string;
}

declare global {
  interface Window {
    paypal: any;
  }
}

const PayPalScript = ({ clientId }: PayPalScriptProps) => {
  useEffect(() => {
    // Check if PayPal script is already loaded
    if (window.paypal) {
      return
    }

    // Create and load PayPal script
    const script = document.createElement('script')
    script.src = getPayPalScriptUrl(clientId)
    script.async = true
    
    // Log environment for debugging
    console.log(`PayPal Environment: ${PAYPAL_CONFIG.environment}`)
    
    script.onload = () => {
      console.log('PayPal SDK loaded successfully')
    }
    
    script.onerror = () => {
      console.error('Failed to load PayPal SDK')
    }

    document.head.appendChild(script)

    // Cleanup function
    return () => {
      // Remove script if component unmounts
      const existingScript = document.querySelector(`script[src*="paypal.com/sdk/js"]`)
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [clientId])

  return null // This component doesn't render anything
}

export default PayPalScript
