import { CardContainer, CardTitle, CardImage, CardPrice, CardButton } from "./Card.styled.js"

const Card = ({ title, image, price }) => {
  return (
    <CardContainer>
        <CardTitle>{title}</CardTitle>
        <CardImage src={image} alt={title} />
        <CardPrice>${price}</CardPrice>
        <CardButton>Agregar al carrito</CardButton>
    </CardContainer>
  )
}

export default Card