import { CardContainer, CardTitle, CardImage, CardPrice, CardButton } from "./Card.styled.js"

const Card = ({ title, image, price, setCount }) => {
  return (
    <CardContainer>
        <CardTitle>{title}</CardTitle>
        <CardImage src={image} alt={title} />
        <CardPrice>${price}</CardPrice>
        <CardButton onClick={() => setCount(prev => prev + 1)}>Agregar al carrito</CardButton>
    </CardContainer>
  )
}

export default Card