import CTA from './components/CTA';
import Header from './components/Header';
import LogoCompany from './components/LogoCompany';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Studies from './components/Studies';

function App() {
  return (
    <main className="overflow-x-hidden min-h-screen font-space-grotesk">
      <>
        <Navbar />
        <Header />
        <LogoCompany />
      </>
      {/* Services book */}

      <Services />
      <CTA />
      <Studies />
      <div className="h-[2000px]"></div>
    </main>
  );
}

export default App;
