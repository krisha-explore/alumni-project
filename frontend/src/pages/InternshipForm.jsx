import React from "react";
import formbg from "../assets/formbg.png";
import imgform from "../assets/imgform.png"; // Side background image

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen text-black flex flex-col bg-no-repeat bg-[length:100%_auto] bg-top" style={{ backgroundImage: `url(${formbg})` }}>
      {/* Spacer for Banner Height */}
      <div className="h-[80vh] w-full" />

      {/* White Form Section */}
      <div className="relative flex justify-center items-center">
        <img src={imgform} alt="side design" className="absolute left-0 top-0 h-full object-contain " />
        <img src={imgform} alt="side design" className="absolute right-0 top-0 h-full object-contain " />

        <div className="bg-white flex-1 p-8 rounded-t-3xl z-10 relative shadow-2xl max-w-2xl mx-auto w-[90%]">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-800">
            Alumni Data Form
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block mb-1 text-sm font-semibold">
                Full Name (as per academic records)
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">
                Enrollment Number
              </label>
              <input
                type="text"
                placeholder="Enrollment Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">Mobile Number</label>
              <input
                type="number"
                placeholder="Mobile Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">
                SCET Email Id
              </label>
              <input
                type="email"
                placeholder="Enter SCET Email ID"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">
                Division (e.g. A|B)
              </label>
              <input
                type="TEXT"
                placeholder="Division"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold">
                Internship or Research Project
              </label>
              <div className="flex gap-4 items-center">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600" />
                  <span>Internship</span>
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600" />
                  <span>Research Project</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">
                Domain (e.g. AI, Security, Computer Vision)
              </label>
              <input
                type="text"
                placeholder="Domain"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">
                Internship Company Name (In case of Research Project, write NA)
              </label>
              <input
                type="text"
                placeholder="Internship Company Name/NA"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">
                Internship Company Full Address with Pin code (In case of Research Project, write NA)
              </label>
              <input
                type="text"
                placeholder="Company Address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">
                Name of the Internship Company Mentor/Immediate Supervisor/Contact Person (In case of Research Project, write NA)
              </label>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">
                Designation of the Internship Company Mentor/Immediate Supervisor/Contact Person (In case of Research Project, write NA)
              </label>
              <input
                type="text"
                placeholder="Contact Person"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">
                Mobile number of the Internship Company Mentor/Immediate Supervisor/Contact Person (In case of Research Project, write NA)
              </label>
              <input
                type="number"
                placeholder="Contact Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">
                Email ID of the Internship Company Mentor/Immediate Supervisor/Contact Person (In case of Research Project, write NA)
              </label>
              <input
                type="email"
                placeholder="Enter Email ID"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">
                Receiving Stipend (In case of Research Project, select No)
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">
                If receiving Stipend, mention the stipend amount per month else write NA
              </label>
              <input
                type="text"
                placeholder="Stipend Amount / NA"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">
                Date of Joining the Company/Starting date of the Internship (DD/MM/YY) (In case of Research Project, write NA)
              </label>
              <input
                type="text"
                placeholder="DD/MM/YY or NA"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">
                Date of End of Internship (DD/MM/YY) (In case of Research Project, write NA)
              </label>
              <input
                type="text"
                placeholder="DD/MM/YY or NA"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
                <label className="block mb-1 text-sm font-semibold">
                  Internship/Project Report Submission (PDF, max 5MB)
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                  <label className="block mb-1 text-sm font-semibold">
                    PowerPoint Presentation (PPT/PPTX, max 10MB)
                  </label>
                  <input
                    type="file"
                    accept=".ppt,.pptx"
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  />
                </div>
                <div>
                    <label className="block mb-1 text-sm font-semibold">
                      No Objection Certificate (NoC) from the Institute (PDF, max 5MB)
                    </label>
                    <input
                      type="file"
                      accept=".pdf"
                      className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-semibold">
                      Company Joining Letter / Internship Offer Letter (PDF, max 5MB)
                    </label>
                    <input
                      type="file"
                      accept=".pdf"
                      className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-semibold">
                      Internship Completion Certificate / Letter from Company (PDF, max 5MB)
                    </label>
                    <input
                      type="file"
                      accept=".pdf"
                      className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                      required
                    />
                  </div>


            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
