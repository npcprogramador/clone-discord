import React, { useState } from 'react';

import {
    Container,
    Role,
    User,
    Avatar
} from './styles';

interface UserProps {
    nickname: string
    isBot?: boolean
    isOnline?: boolean
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot, isOnline }) => {
    return (
        <User >
            <Avatar className={isBot ? 'bot' : ''}>
                {
                    isOnline && <div className='online'></div>
                }
            </Avatar>
            <strong>{nickname}</strong>

            {
                isBot && <span>Bot</span>
            }
        </User>
    )
}


const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponivel - 1</Role>
            <UserRow nickname="Guilherme Rotz" />

            <Role>Disponivel - 18</Role>
            <UserRow nickname="Diego Fernandes" isBot />
            <UserRow nickname="Lucas Emanuel" isOnline={true} />
        </Container>
    )
}

export default UserList;