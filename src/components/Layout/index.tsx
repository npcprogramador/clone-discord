import React from 'react';
import { Grid } from "./styles";
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';


//modo certo de criar uma função usando typescript
const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo />
        </Grid>
    )
}

export default Layout;

