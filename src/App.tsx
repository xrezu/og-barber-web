import Navbar        from '@/components/Navbar/Navbar'
import Hero          from '@/components/sections/Hero/Hero'
import Services      from '@/components/sections/Services/Services'
import Gallery       from '@/components/sections/Gallery/Gallery'
import About         from '@/components/sections/About/About'
import Location      from '@/components/sections/Location/Location'
import Footer        from '@/components/sections/Footer/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat/WhatsAppFloat'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
