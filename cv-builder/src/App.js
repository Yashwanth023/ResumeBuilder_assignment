import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TemplateSelection from './pages/TemplateSelection';
import ResumeEditor from './pages/ResumeEditor';
import { ResumeProvider } from './contexts/ResumeContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
    },
    secondary: {
      main: '#4f46e5',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResumeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<TemplateSelection />} />
            <Route path="/edit/:templateId" element={<ResumeEditor />} />
          </Routes>
        </Router>
      </ResumeProvider>
    </ThemeProvider>
  );
}

export default App;
