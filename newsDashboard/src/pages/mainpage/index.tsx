import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import MainArticle from "./components/MainArticle";
import SecondaryArticles from "./components/SecondaryArticles";
import GainersLosers from "./components/GainersLosers";
import theme from "../../themes/DarkTheme";
import IpoNewsSection from "./components/IpoNewsSection";
import NavBar from "../../shared/components/NavBar";

export default function MainPage(){
    return(
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Stack sx={{alignItems:'center', bgcolor:'#24221E', gap:8}}>
            <NavBar/>
                <Stack sx={{
                    flexDirection:'row', 
                    alignItems:'center', 
                    gap:3, 
                    ustifyContent:'center', 
                    bgcolor:'#24221E'}}>

                    <Stack gap={3} sx={{height:'fit-content', alignItems:'center'}}>
                        <MainArticle/>
                        <SecondaryArticles/>
                    </Stack>
                    <Stack>
                        <GainersLosers/>
                    </Stack>
                </Stack>
                <Stack sx={{flexDirection:'row', gap:12}}>
                    <IpoNewsSection/>
                </Stack>
            </Stack>
        </ThemeProvider>
        </>
    )
}