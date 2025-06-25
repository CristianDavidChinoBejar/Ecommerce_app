import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import Nav from './components/nav/Nav';
import ProductsListPage from './pages/ProductListPage';
import './styles/_global.scss';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/productlist' element={<ProductsListPage/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
