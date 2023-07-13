import { Box, Stack, Typography } from "@mui/material";
import cutText from "../../../shared/functions/cutText";
import { Link } from "react-router-dom";

interface Iprops{
    title:string,
    summary:string,
    imageSrc:string,
    referenceTo?:string
}

export default function IpoNewsCard(props:Iprops){
    return(<>
    <Stack 
        sx={{
            flexDirection:'row', 
            borderRadius:'4px', 
            width:'100%', 
            bgcolor:'#F7F5F5'}}>
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
                maxHeight:'fit-content', 
                height:'150px', 
            color:'inherit'}}>
        <Box 
            component='img' 
            src={props.imageSrc} 
            sx={{
                height:'150px', 
                width:'220px', 
                borderBottomRightRadius:'3px', 
                borderTopRightRadius:'3px'}}/>
        </Link>
    </Stack>
    </>)
}