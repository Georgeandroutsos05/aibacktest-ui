// src/pages/DetailedFeedbackPage.js
import { useParams, Link } from 'react-router-dom';

export default function DetailedFeedbackPage() {
  const { jobId } = useParams();

  // In a real app, you would fetch job details using the jobId.
  // Here we use mock data.
  const feedbackDetails = {
    jobId,
    status: 'Completed',
    uploaded: 'June 9, 2025',
    performance: { startupTime: '0.82s', memoryPeak: '212MB' },
    compliance: {
      gdpr: 'Passed',
      aiAct: 'Missing classification',
      explainability: 'Failed'
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link to="/test" className="text-blue-600 mb-4 inline-block">&larr; Back to Dashboard</Link>
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-3xl font-bold mb-4">Feedback for Job ID: {feedbackDetails.jobId}</h2>
          <div className="space-y-4">
             <div className="bg-gray-50 p-4 rounded shadow">
              <p><strong>Status:</strong> <span className="text-green-600">{feedbackDetails.status}</span></p>
              <p><strong>Uploaded:</strong> {feedbackDetails.uploaded}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow border">
                <h3 className="font-semibold text-lg">⚙️ Performance</h3>
                <p>Startup Time: {feedbackDetails.performance.startupTime}</p>
                <p>Memory Peak: {feedbackDetails.performance.memoryPeak}</p>
              </div>
              <div className="bg-white p-4 rounded shadow border">
                <h3 className="font-semibold text-lg">🛡️ Compliance</h3>
                <p className="text-green-600">✔ GDPR: {feedbackDetails.compliance.gdpr}</p>
                <p className="text-yellow-600">⚠ EU AI Act: {feedbackDetails.compliance.aiAct}</p>
                <p className="text-red-600">❌ Explainability: {feedbackDetails.compliance.explainability}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}