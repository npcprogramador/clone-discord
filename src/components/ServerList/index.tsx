import React from 'react';

import {
    Container,
    Separator
} from './styles';
import ServerButton from '../ServerButton';

//isHome hasNotification mentions={3}


const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton />

            <Separator />

            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
        </Container>
    )
}

export default ServerList;