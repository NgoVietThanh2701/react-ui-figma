import CTA from './components/CTA';
import Group from './components/Group';
import Header from './components/Header';
import LogoCompany from './components/LogoCompany';
import Navbar from './components/Navbar';
import Process from './components/Process';
import Services from './components/Services';
import Studies from './components/Studies';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <main className="overflow-hidden min-h-screen font-space-grotesk">
      <>
        <Navbar />
        <Header />
        <LogoCompany />
      </>
      {/* Services book */}

      <Services />
      <CTA />
      <Studies />
      <Process />
      <Group />
      <Testimonial />
      <div className="h-[1000px]"></div>
    </main>
  );
}

export default App;
