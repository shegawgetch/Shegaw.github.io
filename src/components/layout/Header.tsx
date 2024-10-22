import { AppBar, Avatar, Badge, Box, Card, CardMedia, CssBaseline, Grid,Icon,Menu,MenuItem,Paper, Stack, Tab, Tabs, Toolbar, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import {NavLink, NavLink as RouterLink } from 'react-router-dom';

//import { animateScroll as scroll } from 'react-scroll';
//import DrawerComp from '../Pages/DrawerComp';
import  '../styles/HeaderStyle.css'
import { Mail, Notifications, Pets } from '@mui/icons-material';
import shegu from '../img/shegu.png'
//import { useAppSelector } from '../components/featurs/hooks';
import React, { useState, useEffect } from 'react';
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Radio, RadioGroup } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { alpha } from '@mui/material/styles';
import  { MenuProps } from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Add as AddIcon} from '@mui/icons-material'
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link } from "@mui/material";
import { useSelector } from 'react-redux';


const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function Header(){

  //const {links}=useAppSelector((state)=>state.drawer)

  //const {currentUser}=useSelector((state:any)=>state.user)
  //const [admin,setAdmin]=useSelector<any, unknown>(currentUser?.foundUser.userType)

  const links=[{link:"Home",to:"/"},{link:"Manage User",to:"/user"},{link:"Upload user",to:"/upload"},{link:"Add",to:"/Add"},{link:"About",to:"/about"},{link:"Contact",to:"/contact"}];

//code for vertical menu for add(faculty,department,criteria)
const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    //setSelectedRow(row);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setValue(10)
  };


    const theme=useTheme()
    const IsMatch: boolean = useMediaQuery(() => theme.breakpoints.down("sm"));
 
  
      const StyledToolbar = styled(Toolbar)({
       display:'flex',
       justifyContent:'space-between',
       // textAlign: 'left',
       // color: theme.palette.text.primary,

      });
      const Icons=styled(Box)(({theme})=>({
        display:'none',
        alignItems:'center',
        gap:'20px',
        [theme.breakpoints.up('sm')]:{
          display:'flex'
        }

      }))
      const UserBox=styled(Box)(({theme})=>({
        display:'flex',
        alignItems:'center',
        gap:'20px',
        [theme.breakpoints.up('sm')]:{
          display:'none'
        }

      }))
      //for Tabs menu
      const [value, setValue] = useState(0);

      const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };
      //for account setting
      const [anchorEl1, setAnchorE11] = React.useState<null | HTMLElement>(null);
  const aopen = Boolean(anchorEl1);
  const handleAccountClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE11(event.currentTarget);
  };
  const handleAccuntClose = () => {
    setAnchorE11(null);
  };

       return(
        
     <AppBar position="sticky" sx={{backgroundColor:'white'}}>
     {IsMatch?(<>
        
        </>):(<> 
        <Box display='flex' width='100%'>
        <Stack direction="row" spacing={1} display="flex">
          <Typography color={'goldenrod'} variant='h4' component='div' sx={{display:{xs:'none',sm:'block'},flexGrow: 1 }}>
            My website
          </Typography>
          <Pets sx={{display:{xs:'block',sm:'none'}}}/> <Divider orientation="vertical" flexItem sx={{ bgcolor: '#90caf9',m:1 }} />

          </Stack>
              
                 <Tabs value={value} onChange={handleChange}  sx={{marginTop:"-15px",pt:0.5, minHeight: "74px", height: "74px" }}  textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example"  >  
                     <Tab icon={<HomeIcon fontSize='large' sx={{marginBottom:"-10px"}}/>} label={<Typography style={{ textTransform: 'none',marginTop:"-10px" }}>Home</Typography>} component={NavLink} to={'/'} sx={{ 
                        fontSize: '14px', 
                        //minWidth: '100px', 
                        p:'0px'
                    }} />
                       <Tab icon={<ManageAccountsIcon fontSize='large' sx={{marginBottom:"-10px"}}  />} label={<Typography style={{ textTransform: 'none',marginTop:"-10px" }}>Manage User</Typography>} component={NavLink} to='/user' />
                       <Tab icon={<CloudUploadIcon fontSize='large' sx={{marginBottom:"-10px"}} />} label={<Typography style={{ textTransform: 'none',marginTop:"-10px" }}>Manage Students</Typography>} component={NavLink} to='/managestudents' />

              </Tabs>
              
          <div style={{alignContent:'center',display:'block'}}>
            <Card elevation={0} onClick={(event) => handleClick(event)} component={NavLink} to="#" sx={{marginTop:"-15px",alignContent:'center',pt:0.5}}>
             <center> <CardMedia><Avatar sx={{backgroundColor:'white',marginBottom:'-20px'}} variant='rounded'><AppRegistrationIcon color='action' fontSize='large' sx={{p:0,marginTop:'-10px'}} /></Avatar></CardMedia></center>
        <Button
        sx={{borderRadius:3,marginBottom:"-5px"}}
        size='medium'
           id="demo-customized-button"
           aria-controls={open ? 'demo-customized-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
           variant='text'
           color='inherit'
           disableElevation
         // onClick={handleClick}
           endIcon={<KeyboardArrowDownIcon />}
           //onMouseOver={(event) => handleClick(event)}
         // onClick={handleClick}
          //onClick={() => handleDeleteData(params.row.id)}
        >
             <Typography style={{ color:'#555D50',textTransform: 'none'}}>Manage</Typography> 
        </Button></Card>
        <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onMouseLeave={handleClose}
      >    
          <Divider/>
        <MenuItem onClick={handleClose}  component={NavLink} to='/faculty' disableRipple>
           College  
        </MenuItem>
        <MenuItem onClick={handleClose}  component={NavLink} to='/department' disableRipple>
         Department
        </MenuItem>
        <MenuItem onClick={handleClose} component={NavLink} to='/criteria'  disableRipple>
          Criteria
        </MenuItem>
        <MenuItem onClick={handleClose} component={NavLink} to='/eperiod'  disableRipple>
          Evaluation Period
        </MenuItem>
        <MenuItem onClick={handleClose} component={NavLink} to='/course'  disableRipple>
          Courses
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu>
      
      </div>
      
          
          {/* code for account setting dropdown menu */}
          <Box sx={{justifyContent:'right', textAlign: 'center' }}>
          <Tooltip title="Account settings">
          <IconButton
            onClick={handleAccountClick}
            size="small"
            sx={{ mt:1,ml: 2 }}
            aria-controls={aopen ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={aopen ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }} src={shegu} alt={'S'}></Avatar>
          </IconButton>
        </Tooltip>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleAccountClick}
            size="small"
            sx={{mt:1, ml: 1 }}
            aria-controls={aopen ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={aopen ? 'true' : undefined}
          >
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl1}
        id="account-menu"
        open={aopen}
        onClose={handleAccuntClose}
        onClick={handleAccuntClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      
          </Box>
          </>)}

      </AppBar>
 )     
}
export default Header