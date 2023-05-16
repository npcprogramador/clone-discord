import React from 'react';
import { Container, HashtagIcon, Title, Separator, Description } from "./styles";


//modo certo de criar uma função usando typescript
const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <HashtagIcon />

            <Title>chat-livre</Title>

            <Separator />

            <Description>canal aberto para conversas.</Description>
        </Container>
    )
}

export default ChannelInfo;

