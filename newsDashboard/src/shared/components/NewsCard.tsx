import { Box, Stack, Typography, useMediaQuery } from "@mui/material";

import { Link } from "react-router-dom";
import cutText from "../functions/cutText";

interface Iprops{
    title:string,
    summary:string,
    imageSrc:string,
    referenceTo?:string
}

export default function NewsCard(props:Iprops){
    const match = useMediaQuery('(min-width:1080px');
    return(<>
    <Stack 
        sx={{
            flexDirection:'row', 
            borderRadius:'4px', 
            width:'100%', 
            maxWidth:'650px',
            bgcolor:'#F7F5F5',
            alignContent:'center',
            justifyContent:'space-between'}}>
        <Link 
            to={String(props.referenceTo)} 
            style={{
                textDecoration:'none', 
                height:'fit-content', 
                color:'inherit'}}>
            <Box 
                sx={{
                    height:'fit-content', 
                    width:'fit-content', 
                    padding:'2em', 
                    maxWidth:'430px'}}>
                <Typography variant='h3' >
                    {
                        cutText( props.title,30)
                    }
                </Typography>
                <Typography variant="body1">
                    {
                        cutText(props.summary,93)
                    }
                </Typography>
            </Box>
        </Link>
        <Link 
            to={String(props.referenceTo)} 
            style={{
                textDecoration:'none', 
                maxHeight:'18em', 
                height:match?'150px':'100em', 
            color:'inherit'}}>
        <Box 
            component='img' 
            src={props.imageSrc} 
            sx={{
                height:match?'150px':'100%', 
                width:'220px',
                maxHeight:'18em', 
                borderBottomRightRadius:'3px', 
                borderTopRightRadius:'3px'}}/>
        </Link>
    </Stack>
    </>)
}