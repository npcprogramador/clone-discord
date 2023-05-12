import React from 'react';
import { Grid } from "./styles";
import ServerList from '../ServerList';


//modo certo de criar uma função usando typescript
const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
        </Grid>
    )
}

export default Layout;

