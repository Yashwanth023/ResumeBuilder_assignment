import React from 'react';
import { TextField, Grid } from '@mui/material';
import { useResume } from '../../../contexts/ResumeContext';
import ImageUpload from '../../shared/ImageUpload';

export default function PersonalInfoSection() {
  const { state, dispatch } = useResume();

  const handleChange = (field) => (event) => {
    dispatch({
      type: 'UPDATE_PERSONAL_INFO',
      field,
      value: event.target.value,
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ImageUpload
          currentImage={state.personalInfo.photo}
          onImageUpload={(imageUrl) =>
            dispatch({
              type: 'UPDATE_PERSONAL_INFO',
              field: 'photo',
              value: imageUrl,
            })
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Full Name"
          value={state.personalInfo.fullName}
          onChange={handleChange('fullName')}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={state.personalInfo.email}
          onChange={handleChange('email')}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Phone"
          value={state.personalInfo.phone}
          onChange={handleChange('phone')}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Professional Summary"
          multiline
          rows={4}
          value={state.personalInfo.summary}
          onChange={handleChange('summary')}
        />
      </Grid>
    </Grid>
  );
}

