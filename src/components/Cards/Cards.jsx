import Card from '../Card/Card.jsx'
import {GridLayout} from './Cards.styled.js' 

const Cards = ({products, setCount}) => {
  return (
    <GridLayout >
        {
            products.map(product => (
                <Card 
                    key={product.id}
                    title={product.title} 
                    image={product.image} 
                    price={product.price}
                    setCount={setCount}
                />
            ))
        }
    </GridLayout>
  )
}

export default Cards