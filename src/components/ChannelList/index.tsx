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

            <ChannelButton channelName="chat-livre"/>
            <ChannelButton channelName="regras"/>
            <ChannelButton channelName="global"/>
            <ChannelButton channelName="games"/>
        </Container>
    )
}

export default ChannelList;