import React, { useRef } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';
import ResumeForm from '../components/forms/ResumeForm';
import ResumePreview from '../components/preview/ResumePreview';
import ExportOptions from '../components/shared/ExportOptions';
import { useResume } from '../contexts/ResumeContext';

export default function ResumeEditor() {
  const previewRef = useRef(null);
  const { dispatch } = useResume();

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    dispatch({
      type: 'REORDER_SECTIONS',
      source: result.source.index,
      destination: result.destination.index,
    });
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <DragDropContext onDragEnd={handleDragEnd}>
            <ResumeForm />
          </DragDropContext>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ position: 'sticky', top: 20, p: 2 }}>
            <div ref={previewRef}>
              <ResumePreview />
            </div>
            <ExportOptions previewRef={previewRef} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

