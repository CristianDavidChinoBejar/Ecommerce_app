import { useEffect, useState } from "react"
import Cards from "../Cards/Cards"

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
  return (
    <Cards
      products={products}
    />  
  )
}

export default Home