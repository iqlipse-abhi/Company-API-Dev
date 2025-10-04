import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  industry: { type: String, index: true },
  headquarters: { type: String },
  foundedYear: { type: Number },
  employees: { type: Number },
  revenue: { type: Number },
  website: { type: String },
  isActive: { type: Boolean, default: true },
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

CompanySchema.index({ name: "text", industry: "text", tags: "text" });

const Company = mongoose.model("Company", CompanySchema);
export default Company;
