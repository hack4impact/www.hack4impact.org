const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  Title: { type: String, required: true },
  CodeUrl: { type: String },
  ProjectUrl: { type: String },
  ShortSummary: { type: String, required: true },
  TechStack: { type: String, required: true },
  CoverImageUrl: { type: String, required: true },
  AboutProject: { type: String, required: true },
  AboutClient: { type: String, required: true },
  Impact: { type: String, required: true },
  Features: { type: String, reqired: true },
  Challenges: { type: String, required: true },
  Team: [
    {
      name: { type: String, required: true },
      type: { type: String, required: true }
    }
  ],
  FeatureImages: [
    {
      url: { type: String, required: true },
      description: { type: String, required: true }
    }
  ]
});

const Project = mongoose.model("Project", projectSchema);

module.exports = { Project, projectSchema };
