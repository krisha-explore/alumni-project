import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function CardDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      const res = await fetch(`http://localhost:5000/api/internships/${id}`);
      const data = await res.json();
      setCard(data);
    };
    fetchCard();
  }, [id]);

  if (!card) return <div className="p-6 text-center text-gray-600">Loading...</div>;

  return (
   <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-10">
  <div className="bg-white shadow-xl rounded-xl w-full max-w-2xl p-8 border border-gray-200">

    <button
      onClick={() => navigate(-1)}
      className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
    >
      ← Back
    </button>

    <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
      {card.name}'s Full Details
    </h2>

    {/* Student Info */}
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Student Information</h3>
      <p><strong>Enrollment:</strong> {card.enrollment}</p>
      <p><strong>Email:</strong> {card.email}</p>
      <p><strong>Mobile:</strong> {card.mobile}</p>
      <p><strong>Type:</strong> {card.type}</p>
    </div>

    <hr className="my-4" />

    {/* Internship Info */}
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Internship Information</h3>
      <p><strong>Domain:</strong> {card.domain}</p>
      <p><strong>Company:</strong> {card.company}</p>
      <p><strong>Company Address:</strong> {card.companyAddress}</p>
      <p><strong>Year:</strong> {new Date(card.startDate).getFullYear()}</p>
      <p><strong>Start Date:</strong> {card.startDate}</p>
      <p><strong>End Date:</strong> {card.endDate}</p>
      <p><strong>Stipend Received:</strong> {card.stipendReceived}</p>
      <p><strong>Stipend Amount:</strong> {card.stipendAmount}</p>
    </div>

    <hr className="my-4" />

    {/* Mentor Info */}
    <div>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Mentor Information</h3>
      <p><strong>Mentor Name:</strong> {card.mentorName}</p>
      <p><strong>Mentor Designation:</strong> {card.mentorDesignation}</p>
      <p><strong>Mentor Email:</strong> {card.mentorEmail}</p>
      <p><strong>Mentor Mobile:</strong> {card.mentorMobile}</p>
    </div>
  </div>
</div>

  );
}
