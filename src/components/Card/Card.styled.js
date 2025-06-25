import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  max-width: 300px;
`;

export const CardImage = styled.img`
  max-width: 50%;
  border-radius: 8px;
`;

export const CardTitle = styled.h2`
  font-size: ${({theme}) => theme.fontSizes.heading};
  margin: 12px 0;
`;

export const CardPrice = styled.span`
  font-size: 1.25rem;
  color: #333;
`;

export const CardButton = styled.button`
  background-color: ${({theme}) => theme.colors.mainColor};
  color: ${({theme}) => theme.colors.secondaryColor};
  padding: .5rem 1rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;
