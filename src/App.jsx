import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import Nav from './components/nav/Nav';
import ProductsListPage from './pages/ProductListPage';
import './styles/_global.scss';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Nav count={count}/>
        <Routes>
          <Route path='/' element={<HomePage setCount={setCount} />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/productlist' element={<ProductsListPage/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
