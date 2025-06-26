import { CardContainer, CardTitle, CardImage, CardPrice, CardButton } from "./Card.styled.js"

const Card = ({ title, image, price, setCartItems}) => {
    const handleClick = () => {
    const product = { title, price };
    setCartItems(prev => [...prev, product]);
  };

  return (
    <CardContainer>
        <CardTitle>{title}</CardTitle>
        <CardImage src={image} alt={title} />
        <CardPrice>${price}</CardPrice>
        <CardButton 
            onClick={handleClick}>Agregar al carrito</CardButton>
    </CardContainer>
  )
}

export default Card