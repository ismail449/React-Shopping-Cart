import React from 'react';
import Header from './components/Header Component/Header';
import Footer from './components/Footer component/Footer';
import Products from './components/Products/Products';

function App() {
  return (
    <div className='layout' >
      <Header />
      <main>
        <div className='wrapper' >
          <Products />
          <div className='filter' >Filter</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
