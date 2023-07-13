import { createTheme } from "@mui/material";


const theme = createTheme()


theme.typography.h2={
    fontFamily:[
        'Inter'
    ].join(','),
    fontWeight:'Bold'
}

theme.typography.h3={
    fontFamily:[
        'Inter'
    ].join(','),
    fontWeight:'Semi-bold'
}

theme.typography.body1={
    fontFamily:[
        'Inter'
    ].join(','),
    fontWeight:'Regular'
}
export default theme