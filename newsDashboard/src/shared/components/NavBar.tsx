import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";

export default function NavBar(){
    return(
        <>
        <Stack sx={{
            width:'100%', 
            alignItems:'center', 
            flexDirection:'row', 
            justifyContent:'space-evenly',
            marginY:'2em'}}>
            <SideBar/>
            <Typography variant='h3' color='#F7F5F5'>
                StockNews
            </Typography>
            <Box/>
        </Stack>
        </>
    )
}