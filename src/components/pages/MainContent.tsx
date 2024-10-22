import { Box, Paper, styled } from "@mui/material";
import { ReactNode } from "react";

type pages={
  children:ReactNode
}
function MainContent({children}:pages){
    const Item = styled(Paper)(({ theme }) => ({
        //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' :'#42a5f5',// '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
      }));
    return(
<Box component="main" p={1} flex={4}>
      <Item sx={{minHeight:'80vh'}}>
      {children}
      </Item>
    </Box>
    )
}
export default MainContent