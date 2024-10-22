import React, { useState } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Card,
  CardContent,
  Avatar,Dialog ,
  Icon,
  Box,IconButton ,
  Paper,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
//import sheguImage from '/assets/shegu.png'; // Adjust this if you're importing directly
const About = () => {
    const [open, setOpen] = useState<any>(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const sheguImage = `${process.env.PUBLIC_URL}/assets/shegu.png`;
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" align="center" gutterBottom color="#333">
          My CV
        </Typography>
      </motion.div>
      <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
      <Avatar
        alt="Profile Picture"
        src={sheguImage} // Directly from public folder
        sx={{
          width: 140, // Increased size for better visibility
          height: 140, // Increased size for better visibility
          border: '2px solid #3f51b5',
          cursor: 'pointer',
          transition: 'transform 0.3s ease', // Animation effect
          '&:hover': {
            transform: 'scale(1.1)', // Scale up on hover
          },
        }}
        onClick={handleOpen}
      />
      <Typography variant="h5" sx={{ marginLeft: 2, color: '#3f51b5' }}>
        Full Stack Developer & Lecturer
      </Typography>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm" // You can adjust the maxWidth as needed
        fullWidth
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative', // Position relative to place the close button
            padding: 2,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={sheguImage}// Same image from public folder
            alt="Full Profile"
            sx={{
              maxWidth: '100%', // Responsive width
              maxHeight: '400px', // Set a max height for the image
              borderRadius: '8px',
            }}
          />
        </Box>
      </Dialog>
    </Box>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Typography variant="h5" gutterBottom color="#3f51b5">
          Profile
        </Typography>
        <Typography variant="body1" paragraph>
          I am a dedicated, hardworking, and proactive full stack developer with a strong background in Node.js,Express.js React.js, TypeScript, Redux, Material UI, Bootstrap, JavaScript, CSS3, and HTML5. I have solid technical skills in developing full stack software projects and am currently seeking opportunities to utilize my skills in a challenging environment.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Typography variant="h5" gutterBottom color="#3f51b5">
          Current Position
        </Typography>
        <Paper variant="outlined" style={{ padding: '20px', marginBottom: '20px', borderColor: '#3f51b5' }}>
          <Typography variant="h6">
            Lecturer - Wollo University
          </Typography>
          <Typography variant="body1">
            Teaching courses related to Information Technology, focusing on practical applications of full stack development, programming languages, and software engineering principles.
          </Typography>
          <Typography variant="body1">
            Responsibilities include curriculum development, student mentorship, and conducting research in emerging technologies.
          </Typography>
        </Paper>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Typography variant="h5" gutterBottom color="#3f51b5">
          Education
        </Typography>
        <List>
          <ListItem>
            <Icon><SchoolIcon color="primary" /></Icon>
            <ListItemText primary="MSc in Information Technology" secondary="Feb 2021 - Bahirdar University, Bahirdar" />
          </ListItem>
          <ListItem>
            <Icon><SchoolIcon color="primary" /></Icon>
            <ListItemText primary="BSc in Information Technology" secondary="Jun 2017 - Wollo University, Kombolcha" />
          </ListItem>
        </List>
      </motion.div>

      <Divider style={{ margin: '20px 0' }} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Typography variant="h5" gutterBottom color="#3f51b5">
          Technical Skills
        </Typography>
        <Card variant="outlined" style={{ marginBottom: '20px', borderColor: '#3f51b5' }}>
          <CardContent>
            <Typography variant="body1"><strong>Operating Systems:</strong> Windows 7/8/10, Ubuntu Linux</Typography>
            <Typography variant="body1"><strong>Primary Skills:</strong> NodeJS, ReactJS, JavaScript, TypeScript, CSS3, HTML5, Material UI, Bootstrap</Typography>
            <Typography variant="body1"><strong>Frameworks:</strong> NodeJS, ReactJS, React Redux, TypeScript, Material UI</Typography>
            <Typography variant="body1"><strong>Databases:</strong> MySQL, MongoDB</Typography>
            <Typography variant="body1"><strong>Application Servers:</strong> Wildfly Application Server</Typography>
            <Typography variant="body1"><strong>Tools:</strong> Visual Studio Code, WebStorm, IntelliJ IDEA, Android Studio, Git, GitLab</Typography>
            <Typography variant="body1"><strong>Scripting:</strong> JavaScript, TypeScript</Typography>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Typography variant="h5" gutterBottom color="#3f51b5">
          Management Skills
        </Typography>
        <List>
          <ListItem>
            <Icon><BuildIcon color="primary" /></Icon>
            <ListItemText primary="Effective communication" />
          </ListItem>
          <ListItem>
            <Icon><BuildIcon color="primary" /></Icon>
            <ListItemText primary="Problem-solving abilities" />
          </ListItem>
          <ListItem>
            <Icon><BuildIcon color="primary" /></Icon>
            <ListItemText primary="Experience managing numerous projects at once" />
          </ListItem>
          <ListItem>
            <Icon><BuildIcon color="primary" /></Icon>
            <ListItemText primary="Time management skills" />
          </ListItem>
        </List>
      </motion.div>

      <Divider style={{ margin: '20px 0' }} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Typography variant="h5" gutterBottom color="#3f51b5">
          Experience
        </Typography>
        <Paper variant="outlined" style={{ padding: '20px', marginBottom: '20px', borderColor: '#3f51b5' }}>
          <Typography variant="h6">
            <BusinessCenterIcon style={{ verticalAlign: 'middle' }} />
            Mekdela Amba University
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Project:</strong> Staff Performance Evaluation System
          </Typography>
          <Typography variant="body1" paragraph>
            Developed a comprehensive web-based application designed to manage staff evaluations efficiently. Key features include:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="User Management: Facilitated user registration and account management." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Evaluation Management: Maintained and managed peer, student, and supervisor evaluations." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Result Printing: Provided functionality for downloading evaluation results." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Course Management: Implemented features for adding and dropping courses, as well as assigning instructors." />
            </ListItem>
          </List>
          <Typography variant="body1">
            <strong>Role:</strong> Full Stack Developer
          </Typography>
          <Typography variant="body1">
            <strong>Environment:</strong> Frontend: React.js, TypeScript, Redux Toolkit, HTML5, CSS3, Material UI; Backend: Node.js, Express.js, MongoDB, Postman.
          </Typography>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default About;
