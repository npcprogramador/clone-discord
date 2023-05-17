import React, { useState } from 'react';

import {
    Container,
    HashtagIcon,
    InviteIcon,
    SettingsIcon
} from './styles';

//definindo o tipo das props
export interface Props {
    channelName?: string
}

const ChannelButton: React.FC<Props> = (props) => {
    return(
        <Container>
            <div>
                <HashtagIcon />
                <span>{props.channelName}</span>
            </div>
            <div>
                <InviteIcon />
                <SettingsIcon />
            </div>
        </Container>
    )
}

export default ChannelButton;