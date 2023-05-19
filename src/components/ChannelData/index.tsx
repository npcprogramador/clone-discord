import React, { useState } from 'react';

import {
    Container,
    Messags,
    InputWrapper,
    Input,
    InputIcon
} from './styles';



const ChannelData: React.FC = () => {
    return(
        <Container>
            <Messags />

            <InputWrapper>
                <Input />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData;