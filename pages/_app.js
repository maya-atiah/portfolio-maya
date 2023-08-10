import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import "@fontsource/playfair-display";
export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}
