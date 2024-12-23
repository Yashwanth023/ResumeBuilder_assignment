const resumeController = {
    getTemplates: (req, res) => {
      const templates = [
        {
          id: 'modern',
          name: 'Modern Template',
          thumbnail: '/templates/modern.png'
        },
        {
          id: 'minimal',
          name: 'Minimal Template',
          thumbnail: '/templates/minimal.png'
        },
        {
          id: 'creative',
          name: 'Creative Template',
          thumbnail: '/templates/creative.png'
        }
      ];
      res.json(templates);
    },
  
    // Store resumes in memory for demo purposes
    resumes: new Map(),
  
    createResume: (req, res) => {
      const id = Date.now().toString();
      resumeController.resumes.set(id, req.body);
      res.json({ id, ...req.body });
    },
  
    updateResume: (req, res) => {
      const { id } = req.params;
      if (!resumeController.resumes.has(id)) {
        return res.status(404).json({ error: 'Resume not found' });
      }
      resumeController.resumes.set(id, req.body);
      res.json({ id, ...req.body });
    },
  
    getResume: (req, res) => {
      const { id } = req.params;
      const resume = resumeController.resumes.get(id);
      if (!resume) {
        return res.status(404).json({ error: 'Resume not found' });
      }
      res.json({ id, ...resume });
    },
  
    deleteResume: (req, res) => {
      const { id } = req.params;
      if (!resumeController.resumes.has(id)) {
        return res.status(404).json({ error: 'Resume not found' });
      }
      resumeController.resumes.delete(id);
      res.json({ message: 'Resume deleted successfully' });
    }
  };
  
  module.exports = resumeController;