import React from 'react';
import { Grid } from "./styles";
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelData from '../ChannelData';
import UserList from '../UserList';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';


//modo certo de criar uma função usando typescript
const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo />
            <ChannelData />
            <UserList />
            <ChannelList />
            <UserInfo />
        </Grid>
    )
}

export default Layout;

