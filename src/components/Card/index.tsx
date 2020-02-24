import React, { FC } from 'react';
import { Container } from './styles';

const Card: FC = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default Card;