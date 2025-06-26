import Home from '../components/home/Home.jsx';

const HomePage = ({setCount, setCartItems}) => {
  return (
    <>
      <Home 
        setCount={setCount} 
        setCartItems={setCartItems} 
      />
    </>
  )
}

export default HomePage