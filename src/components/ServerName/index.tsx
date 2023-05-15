import React from 'react';
import { Container, Title, ExpandIcon } from "./styles";


//modo certo de criar uma função usando typescript
const ServerName: React.FC = () => {
    return (
        <Container>
            <Title>Servidor do Rodz</Title>


            <ExpandIcon />
        </Container>
    )
}

export default ServerName;

