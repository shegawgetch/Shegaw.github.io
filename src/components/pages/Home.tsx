import React from 'react';
import { Container, Typography, Button, Card, CardContent, CardMedia, Box, List, ListItem, ListItemText, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const projects = [
    {
      title: 'Staff Performance Evaluation System',
      description: 'A comprehensive web-based application designed to manage staff evaluations efficiently.',
      image: 'https://via.placeholder.com/150', // Replace with your project image URL
      link: '#', // Link to your project
      features: [
        'User Management: Facilitated user registration and account management.',
        'Evaluation Management: Maintain and manage peer, student, and supervisor evaluations.',
        'Result Printing: Functionality for downloading evaluation results.',
        'Course Management: Features for adding and dropping courses, as well as assigning instructors.',
      ],
      role: 'Full Stack Developer',
      environment: 'Frontend: React.js, TypeScript, Redux Toolkit, HTML5, CSS3, Material UI. Backend: Node.js, Express.js, MongoDB, Postman.',
    },
  ];

  const skills = ['React', 'Node.js', 'Express.js', 'TypeScript', 'Redux Toolkit', 'MongoDB', 'MySQL'];

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" align="center" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
          Welcome to My Portfolio
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Typography variant="h5" align="center" paragraph sx={{ color: '#555' }}>
          Hi, I'm Shegaw Getie, a passionate Full Stack Developer and Lecturer.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Typography variant="h6" align="center" sx={{ color: '#333' }}>
          My Skills:
        </Typography>
        <Box display="flex" justifyContent="center" flexWrap="wrap" mb={4}>
          {skills.map((skill) => (
            <Box
              key={skill}
              sx={{
                display: 'inline-block',
                backgroundColor: '#3f51b5',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '20px',
                margin: '4px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              {skill}
            </Box>
          ))}
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Typography variant="h6" align="center" sx={{ color: '#333' }}>
          Featured Project:
        </Typography>
        <Divider style={{ margin: '20px 0' }} />
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={4}>
          {projects.map((project, index) => (
            <Card key={index} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
                sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>{project.title}</Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  Role: {project.role}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  Environment: {project.environment}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Key Features:
                </Typography>
                <List>
                  {project.features.map((feature, idx) => (
                    <ListItem key={idx}>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
                <Button variant="contained" color="primary" href={project.link} sx={{ marginTop: 2 }}>
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
};

export default Home;
