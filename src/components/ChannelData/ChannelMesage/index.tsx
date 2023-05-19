import React, { useState } from 'react';

import {
    Container,
    Avatar,
    Mensage,
    Header,
    Content
} from './styles';

export interface Props {
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
}


const ChannelMesage: React.FC<Props> = ({ author, date, content, hasMention, isBot }) => {
    return(
        <Container className={hasMention ? 'mention' : ''}>
            <Avatar className={isBot ? 'bot' : ''}/>

            <Mensage>
                <Header>
                    <strong>{author}</strong>
                    {isBot && <span>Bot</span>}
                    <time>{date}</time>
                </Header>
                <Content>{content}</Content>
            </Mensage>
        </Container>
    )
}

export default ChannelMesage;