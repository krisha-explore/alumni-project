const { Schema, model } = require("mongoose");

const internshipSchema = new Schema({
  enrollment: { type: String, required: true },
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  type: { type: String, enum: ["Internship", "Research Project"], required: true },
  domain: { type: String, required: true },
  company: { type: String },
  companyAddress: { type: String },
  mentorName: { type: String },
  mentorDesignation: { type: String },
  mentorMobile: { type: String },
  mentorEmail: { type: String },
  stipendReceived: { type: String, enum: ["Yes", "No"], required: true },
  stipendAmount: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  reportFile: { type: String },
  evaluationForm: { type: String },
  feedbackForm: { type: String },
  ppt: { type: String },
  noc: { type: String },
  offerLetter: { type: String },
  completionLetter: { type: String },
});

const Internship = model("Internship", internshipSchema);
module.exports = Internship;
