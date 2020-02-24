import React, { FC, useCallback, useState } from 'react';
import convertBase from '../utils/functions/converterBase';

import Card from '../components/Card';

interface Props {
}

const Main: FC<Props> = (props) => {
  const [input, setInput] = useState<string>("");

  const converter = useCallback(() => {
    const res: Array<number> = input.split('').map(item => parseInt(item));

    return convertBase(res)
  }, [input]);

  return (
    <div className="app-main">
      <h1>Conversor de Binário</h1>
      <Card>
        <input type="text" value={input} onChange={(e) => {
          setInput(e.target.value)
        }} />
        <button onClick={converter}>Converter</button>
      </Card>
    </div >
  )
}
export default Main;