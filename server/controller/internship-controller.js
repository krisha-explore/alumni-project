const Internship = require("../model/internship-model");

const getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find();
    res.status(200).json({ success: true, data: internships });
  } catch (error) {
    console.error("Error fetching internships:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
const getInternshipById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Internship.findById(id);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to load internship" });
  }
};

const getFilterOptions = async (req, res) => {
  try {
    const domains = await Internship.distinct("domain");
    const companies = await Internship.distinct("company");
  const yearsRaw = await Internship.distinct("startDate");

    const uniqueYears = yearsRaw
      .filter(Boolean)
      .map((dateStr) => {
        const [day, month, year] = dateStr.split('/'); // Split "1/9/2023"
        return parseInt(year); // Get 2023
      })
      .filter((v, i, a) => a.indexOf(v) === i && !isNaN(v)); // Unique & valid

    res.json({ domainOptions: domains, companyOptions: companies, yearOptions: uniqueYears });
  } catch (err) {
    res.status(500).json({ error: "Error loading filters" });
  }
};
module.exports = { getAllInternships,getInternshipById, getFilterOptions };