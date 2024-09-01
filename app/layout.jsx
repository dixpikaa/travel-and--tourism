import { ClientOnly, Footer, Navbar } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'
import CategoryModal from '@/modals/CategoryModal'
import MobileViewMenuModal from '@/modals/MobileViewMenuModal'
// import { CategoryModal } from '@/modals'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Travel & Tourism',
  description: 'KDS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <body> */}
        <ClientOnly>
          <Navbar/>
          <CategoryModal/>
          <MobileViewMenuModal/>
        </ClientOnly>
        <div className="">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
