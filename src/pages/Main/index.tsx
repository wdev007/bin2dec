import React, { FC, useCallback, useState } from 'react';
import convertBase from '../../utils/functions/converterBase';

import Card from '../../components/Card';
import { Container, Input } from './styles';

interface Props {
}

const Main: FC<Props> = (props) => {
  const [input, setInput] = useState<string>("");

  const converter = useCallback(() => {
    const res: Array<number> = input.split('').map(item => parseInt(item));

    return convertBase(res)
  }, [input]);

  return (
    <Container>
      <h1>Conversor de Binário</h1>
      <Card>
        <Input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={converter}>Converter</button>
      </Card>
    </Container >
  )
}
export default Main;