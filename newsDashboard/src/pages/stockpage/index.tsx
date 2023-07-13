import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import theme from "../../themes/DarkTheme";
import NewsSection from "./components/NewsSection";
import NavBar from "../../shared/components/NavBar";

export default function StockPage(){
    return(<>

    <ThemeProvider theme={theme}>

        <CssBaseline/>
    <Stack sx={{
        bgcolor:'#24221E', 
        width:'100%', 
        height:'fit-content',
        alignItems:'center'
        }}>
        <NavBar/>
        <NewsSection/>
    </Stack>
    </ThemeProvider>

        
    </>)
}