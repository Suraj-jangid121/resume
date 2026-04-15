import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    default: 'My Resume',
  },
  // Personal Info
  name: String,
  role: String,
  email: String,
  phone: String,
  location: String,
  linkedin: String,
  website: String,
  summary: String,
  photo: String,

  // Template & Design
  template: {
    type: String,
    enum: ['modern', 'classic', 'minimal', 'bold'],
    default: 'modern',
  },
  accentColor: { type: String, default: '#2563eb' },
  fontSize: { type: Number, default: 13 },

  // Toggles
  showPhoto: { type: Boolean, default: true },
  showSkills: { type: Boolean, default: true },
  showProjects: { type: Boolean, default: true },

  // Arrays
  skills: [String],
  experience: [{
    title: String,
    company: String,
    period: String,
    desc: String,
  }],
  education: [{
    degree: String,
    school: String,
    year: String,
    grade: String,
  }],
  projects: [{
    name: String,
    tech: String,
    desc: String,
    link: String,
  }],
}, { timestamps: true });

export default mongoose.model('Resume', resumeSchema);
