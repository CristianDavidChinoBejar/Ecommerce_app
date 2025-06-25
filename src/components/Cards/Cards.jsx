import Card from '../Card/Card.jsx'
import {GridLayout} from './Cards.styled.js' 

const Cards = ({products}) => {
  return (
    <GridLayout >
        {
            products.map(product => (
                <Card 
                    key={product.id}
                    title={product.title} 
                    image={product.image} 
                    price={product.price}
                />     
            ))
        }
    </GridLayout>
  )
}

export default Cards