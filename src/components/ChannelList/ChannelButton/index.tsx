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
    selected?: boolean
}

const ChannelButton: React.FC<Props> = ({selected, channelName}) => {
    return(
        <Container className={selected ? 'active' : ''}>
            <div>
                <HashtagIcon />
                <span>{channelName}</span>
            </div>
            <div>
                <InviteIcon />
                <SettingsIcon />
            </div>
        </Container>
    )
}

export default ChannelButton;