import { Box, Stack } from "@mui/material";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

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
            <Link to='/' style={{textDecoration:'none', fontWeight:'600', color:'#F7F5F5'}}>
                StockNews
            </Link>
            <Box/>
        </Stack>
        </>
    )
}