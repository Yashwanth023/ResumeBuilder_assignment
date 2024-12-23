import React from 'react';
import { Button, Card, CardContent, Grid, TextField, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useResume } from '../../../contexts/ResumeContext';

export default function ExperienceSection() {
  const { state, dispatch } = useResume();

  const addExperience = () => {
    dispatch({
      type: 'ADD_EXPERIENCE',
      experience: {
        id: Date.now().toString(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    });
  };

  const updateExperience = (id, field, value) => {
    dispatch({
      type: 'UPDATE_EXPERIENCE',
      id,
      updates: { [field]: value },
    });
  };

  const deleteExperience = (id) => {
    dispatch({
      type: 'DELETE_EXPERIENCE',
      id,
    });
  };

  return (
    <div>
      {state.experience.map((exp) => (
        <Card key={exp.id} sx={{ mb: 2 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={11}>
                <TextField
                  fullWidth
                  label="Company"
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                />
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  onClick={() => deleteExperience(exp.id)}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Position"
                  value={exp.position}
                  onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Start Date"
                  type="date"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="End Date"
                  type="date"
                  value={exp.endDate}
                  onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  multiline
                  rows={3}
                  value={exp.description}
                  onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
      <Button variant="outlined" onClick={addExperience} fullWidth>
        Add Experience
      </Button>
    </div>
  );
}

