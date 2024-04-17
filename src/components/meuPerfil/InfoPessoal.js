import ProfileCard from "./usuario/ProfileCard";
import ProfileTab from "./usuario/ProfileTab";
import TabPersonal from "./usuario/TabPersonal";

import { Grid } from '@mui/material';

const InfoPessoal = () => {

    return (
        <>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <ProfileCard />
            </Grid>
            <Grid item xs={12} md={3}>
                <ProfileTab />
            </Grid>
            <Grid item xs={12} md={9}>
                <TabPersonal />
            </Grid>
        </Grid>
            
            
        </>
    );
}

export default InfoPessoal;