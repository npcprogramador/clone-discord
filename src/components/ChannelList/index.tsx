import React, { useState } from 'react';

import {
    Container,
    Category,
    AddCategoryIcon
} from './styles';
import ChannelButton from './ChannelButton';


const ChannelList: React.FC = () => {
    return(
        <Container>
            <Category>
                <span>canais de texto</span>
            </Category>
            <AddCategoryIcon />

            <ChannelButton selected={true} channelName="chat-livre"/>
            <ChannelButton selected={false} channelName="regras"/>
            <ChannelButton selected={false} channelName="global"/>
            <ChannelButton selected={false} channelName="games"/>
        </Container>
    )
}

export default ChannelList;