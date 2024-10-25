import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  IconButton,
  Divider,
  Chip,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBack from '@mui/icons-material/KeyboardArrowLeft';
import ArrowForward from '@mui/icons-material/KeyboardArrowRight';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Project {
  title: string;
  description: string;
  images: string[];
}

const projectData: Project[] = [
  {
    title: "Staff Evaluation System",
    description: "Click the image to zoom out.",
    images: [
      "assets/login.png",
      "assets/admin.png",
      "assets/depthead.png",
      "assets/period.png",
      "assets/depte.png",
      "assets/updatee.png",
      "assets/updatee2.png",
    ],
  },
];

const ProjectImages: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleClickOpen = (index: number) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectData[0].images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectData[0].images.length) % projectData[0].images.length);
  };

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-between" gap={2}>
      {projectData.map((project, index) => (
        <Box key={index} textAlign='center' flexBasis={{ xs: '100%', sm: '48%', md: '60%' }} p={1}>
          <Card elevation={3}>
            <Carousel showThumbs={false} infiniteLoop autoPlay>
              {project.images.map((image, imgIndex) => (
                <div key={imgIndex} onClick={() => handleClickOpen(imgIndex)} style={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    image={image}
                    alt={`${project.title} - ${imgIndex + 1}`}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      cursor: 'pointer',
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '10px',
                      color: 'white',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      padding: '4px',
                      borderRadius: '4px',
                    }}
                  >
                    {project.description}
                  </Typography>
                </div>
              ))}
            </Carousel>
            <CardContent sx={{ padding: '1px' }}>
              <Typography variant="h6" component="div" textAlign="center">
                {project.title}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}

      {/* Fullscreen Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth='md' fullWidth>
        <IconButton
          onClick={handleClose}
          style={{ position: 'absolute', right: '16px', top: '16px' }}
          color="inherit"
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', position: 'relative', flexDirection: 'column' }}>
          <CardMedia
            component="img"
            image={projectData[0].images[currentImageIndex]}
            alt="Fullscreen Image"
            sx={{
              maxWidth: '90%',
              maxHeight: '80%',
              objectFit: 'contain',
            }}
          />
          <IconButton onClick={handlePrevImage} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} color="primary" size="large">
            <ArrowBack fontSize="inherit" />
          </IconButton>
          <IconButton onClick={handleNextImage} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)' }} color="primary" size="large">
            <ArrowForward fontSize="inherit" />
          </IconButton>
        </Box>
      </Dialog>
    </Box>
  );
};

const Portfolio: React.FC = () => {
  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
      }}
    >
      <Typography variant="h3" align="center" gutterBottom color="#3f51b5">
        My Portfolio
      </Typography>

      <Divider style={{ margin: '20px 0' }} />

      <Typography variant="h4" gutterBottom color="#3f51b5">
        Current Position
      </Typography>
      <Paper variant="outlined" style={{ padding: '20px', marginBottom: '20px', borderColor: '#3f51b5' }}>
        <Typography variant="h6">Lecturer - Wollo University</Typography>
        <Typography variant="body1" paragraph>
          I am a Lecturer at Wollo University in the Department of Information Technology.
        </Typography>
      </Paper>

      <Divider style={{ margin: '20px 0' }} />

      <Typography variant="h4" gutterBottom color="#3f51b5">
        Experience
      </Typography>
      <Paper variant="outlined" style={{ padding: '20px', marginBottom: '20px', borderColor: '#3f51b5' }}>
        <Typography variant="h6">
          <BusinessCenterIcon style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Full Stack Developer - Mekdela Amba University
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
          <strong>Environment:</strong>
          <strong>Frontend:</strong> React.js, TypeScript, Redux Toolkit, HTML5, CSS3, Material UI, VS Code;
          <br />
          <strong>Backend:</strong> Node.js, Express.js, MongoDB, Postman.
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

      <Divider style={{ margin: '20px 0' }} />

      <Typography variant="h4" gutterBottom color="#3f51b5">
        My Projects
      </Typography>
      <ProjectImages />

      <Divider style={{ margin: '20px 0' }} />
    </Container>
  );
};

export default Portfolio;
