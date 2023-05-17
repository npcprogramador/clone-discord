import React, { useState } from 'react';

import {
    Container
} from './styles';

//definindo o tipo das props
export interface Props {
    channelName?: string
}

const ChannelButton: React.FC<Props> = (props) => {
    return(
        <Container>
            <p>{props.channelName}</p>
        </Container>
    )
}

export default ChannelButton;