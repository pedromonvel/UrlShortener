import NavBar from "../../components/navbar"
import "./globals.css"

export const metadata = {
  title: 'URLShrt - HomePage',
  description: 'URL Shortner project',
  keywords: "url shortener, link shortener, shorten link, link shortener, shortenlink, shorten whatsapp link, whatsapp link shortener, shorten link for whatsapp, shorten url, url shortener, shorten url, link reducer, shrink link, reduce link, google url shortener, google link shortener, tiktok link shortener, youtube link shortener"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <section className="main-section">
          {children}
        </section>
      </body>
    </html>
  )
}


