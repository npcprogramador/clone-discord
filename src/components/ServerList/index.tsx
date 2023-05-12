import React, { useState } from 'react';

import {
    Container,
    Separator
} from './styles';
import ServerButton from '../ServerButton';

//isHome hasNotifications mentions={3}


const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton
                isHome 
                hasNotifications={true}
                mentions={43}
            />

            <Separator />

            <ServerButton hasNotifications={false} mentions={0} />
            <ServerButton hasNotifications={false} mentions={0} />
            <ServerButton hasNotifications={true} mentions={33} />
            <ServerButton hasNotifications={false} mentions={0} />
            <ServerButton hasNotifications={false} mentions={0} />
            <ServerButton hasNotifications={false} mentions={0} />
            <ServerButton hasNotifications={false} mentions={0} />
            <ServerButton hasNotifications={false} mentions={0} />
            <ServerButton hasNotifications={false} mentions={0} />
            <ServerButton hasNotifications={true} mentions={7} />
            <ServerButton hasNotifications={false} mentions={0} />
        </Container>
    )
}

export default ServerList;