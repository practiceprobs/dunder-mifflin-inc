import './global.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Nunito } from '@next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'optional'
})

export default function RootLayout({ children }) {
  return (
    <html className={nunito.className}>
      <head />
      <body>
          <header>
            <Navbar />
          </header>
          <main>
            { children }
          </main>
          <Footer />
      </body>
    </html>
  )
}