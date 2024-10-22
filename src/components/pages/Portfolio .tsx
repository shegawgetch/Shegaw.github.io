import React from 'react';
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Button,
  Chip,
} from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" align="center" gutterBottom color="#3f51b5">
          My Portfolio
        </Typography>
      </motion.div>

      <Divider style={{ margin: '20px 0' }} />

      <Typography variant="h4" gutterBottom color="#3f51b5">
        Current Position
      </Typography>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Paper variant="outlined" style={{ padding: '20px', marginBottom: '20px', borderColor: '#3f51b5' }}>
          <Typography variant="h6">
            Lecturer - Wollo University
          </Typography>
          <Typography variant="body1" paragraph>
            Teaching courses related to Information Technology, with a focus on practical applications of full stack development, programming languages, and software engineering principles.
          </Typography>
          <Typography variant="body1">
            Responsibilities include curriculum development, student mentorship, and conducting research in emerging technologies.
          </Typography>
        </Paper>
      </motion.div>

      <Divider style={{ margin: '20px 0' }} />

      <Typography variant="h4" gutterBottom color="#3f51b5">
        Experience
      </Typography>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Paper variant="outlined" style={{ padding: '20px', marginBottom: '20px', borderColor: '#3f51b5' }}>
          <Typography variant="h6">
            <BusinessCenterIcon style={{ verticalAlign: 'middle', marginRight: '8px' }} />
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
          <Typography variant="body1" paragraph>
            <strong>Role:</strong> Full Stack Developer
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Environment:</strong> Frontend: React.js, TypeScript, Redux Toolkit, HTML5, CSS3, Material UI, VS Code; 
            Backend: Node.js, Express.js, MongoDB, Postman.
          </Typography>

          <Divider style={{ margin: '20px 0' }} />

          <Typography variant="h6" gutterBottom>
            Key Technologies Used:
          </Typography>
          <Box display="flex" flexWrap="wrap">
            <Chip label="Node.js" color="primary" style={{ margin: '4px' }} />
            <Chip label="React.js" color="secondary" style={{ margin: '4px' }} />
            <Chip label="TypeScript" color="primary" style={{ margin: '4px' }} />
            <Chip label="MongoDB" color="secondary" style={{ margin: '4px' }} />
            <Chip label="Material UI" color="primary" style={{ margin: '4px' }} />
            <Chip label="Express.js" color="secondary" style={{ margin: '4px' }} />
            <Chip label="Redux Toolkit" color="primary" style={{ margin: '4px' }} />
          </Box>
        </Paper>
      </motion.div>

      <Divider style={{ margin: '20px 0' }} />

      <Typography variant="h4" gutterBottom color="#3f51b5">
        Education
      </Typography>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <List>
          <ListItem>
            <SchoolIcon color="primary" />
            <ListItemText primary="MSc in Information Technology" secondary="Feb 2021 - Bahirdar University, Bahirdar" />
          </ListItem>
          <ListItem>
            <SchoolIcon color="primary" />
            <ListItemText primary="BSc in Information Technology" secondary="Jun 2017 - Wollo University, Kombolcha" />
          </ListItem>
        </List>
      </motion.div>

      <Divider style={{ margin: '20px 0' }} />

      <Typography variant="h4" gutterBottom color="#3f51b5">
        Technical Skills
      </Typography>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Paper variant="outlined" style={{ padding: '20px', marginBottom: '20px', borderColor: '#3f51b5' }}>
          <Typography variant="body1"><strong>Operating Systems:</strong> Windows 7/8/10, Ubuntu Linux</Typography>
          <Typography variant="body1"><strong>Primary Skills:</strong> NodeJS, ReactJS, JavaScript, TypeScript, CSS3, HTML5, Material UI, Bootstrap</Typography>
          <Typography variant="body1"><strong>Frameworks:</strong> NodeJS, ReactJS, React Redux, TypeScript, Material UI</Typography>
          <Typography variant="body1"><strong>Databases:</strong> MySQL, MongoDB</Typography>
          <Typography variant="body1"><strong>Application Servers:</strong> Wildfly Application Server</Typography>
          <Typography variant="body1"><strong>Tools:</strong> Visual Studio Code, WebStorm, IntelliJ IDEA, Android Studio, Git, GitLab</Typography>
          <Typography variant="body1"><strong>Scripting:</strong> JavaScript, TypeScript</Typography>
        </Paper>
      </motion.div>

      <Divider style={{ margin: '20px 0' }} />

      <Box textAlign="center">
        <Typography variant="body2" color="textSecondary">
          Explore more of my work and projects on my portfolio!
        </Typography>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="contained"
            color="primary"
            href="#" // Replace with your actual portfolio link
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: '10px' }}
          >
            Visit My Portfolio
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Portfolio;
