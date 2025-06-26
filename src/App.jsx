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
  const [count, setCount] = useState(0)
  
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
      <Nav count={count}/>
        <Routes>
          <Route 
            path='/' 
            element={
              <HomePage 
                setCount={setCount} 
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
