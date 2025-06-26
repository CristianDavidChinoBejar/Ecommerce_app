import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import Nav from './components/nav/Nav';
import ProductsListPage from './pages/ProductListPage';
import './styles/_global.scss';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { useState, useEffect } from 'react';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : [];
  });

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}, [cartItems]);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route 
            path='/' 
            element={
              <HomePage
                setCartItems={setCartItems}
              />}
          />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/productlist' element={<ProductsListPage/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
