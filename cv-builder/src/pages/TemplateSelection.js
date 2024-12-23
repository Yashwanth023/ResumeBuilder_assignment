import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const templates = [
  {
    id: 'modern',
    name: 'Modern Template',
    description: 'Clean and professional design with a modern touch',
    image: '/templates/modern.png'
  },
  {
    id: 'minimal',
    name: 'Minimal Template',
    description: 'Simple and elegant design focusing on content',
    image: '/templates/minimal.png'
  },
  {
    id: 'creative',
    name: 'Creative Template',
    description: 'Stand out with a unique and creative layout',
    image: '/templates/creative.png'
  }
];

export default function TemplateSelection() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Choose Your Resume Template
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Select a template to start building your professional resume
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {templates.map((template) => (
          <Grid item key={template.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="300"
                image={template.image}
                alt={template.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {template.name}
                </Typography>
                <Typography color="text.secondary" paragraph>
                  {template.description}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => navigate(`/edit/${template.id}`)}
                >
                  Use this template
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
