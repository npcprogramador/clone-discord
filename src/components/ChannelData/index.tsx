import React, { useState } from 'react';

import {
    Container,
    Messags,
    InputWrapper,
    Input,
    InputIcon,
    Mention
} from './styles';
import ChannelMesage from './ChannelMesage';



const ChannelData: React.FC = () => {
    return(
        <Container>
            <Messags>
                <ChannelMesage
                    author="Guilherme Walison"
                    date="21/06/2020"
                    content="Mais um dia Feliz!"
                />

                <ChannelMesage
                    isBot
                    author="rafael"
                    date="21/06/2020"
                    content={
                        <>
                            <Mention>@Guilherme Walison</Mention>, Olá, me ajuda a estudar ?
                        </>
                    }
                />
            </Messags>

            <InputWrapper>
                <Input type='text' placeholder='Conversar em #chat-livre'/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData;