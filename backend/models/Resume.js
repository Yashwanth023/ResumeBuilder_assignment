// server/models/Resume.js
const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  templateId: {
    type: String,
    required: true
  },
  personalInfo: {
    fullName: String,
    email: String,
    phone: String,
    address: String,
    linkedin: String,
    website: String
  },
  experience: [{
    company: String,
    position: String,
    startDate: String,
    endDate: String,
    description: String
  }],
  education: [{
    school: String,
    degree: String,
    fieldOfStudy: String,
    graduationYear: String
  }],
  skills: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('resume', ResumeSchema);