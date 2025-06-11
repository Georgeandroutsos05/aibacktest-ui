// src/pages/TestDashboardPage.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

const initialJobs = [
  { jobId: 'e5f6-g7h8', agentName: 'OnboardingAI', status: 'Failed', timestamp: '2025-06-11 12:15' },
  { jobId: 'i9j0-k1l2', agentName: 'SupportAgent_v3.1', status: 'In Progress', timestamp: '2025-06-11 09:00' },
  { jobId: 'm3n4-o5p6', agentName: 'ComplianceChecker', status: 'Completed', timestamp: '2025-06-10 18:45' },
];

const StatusIndicator = ({ status }) => {
  const statusConfig = {
    'Completed': { text: 'Completed', color: 'bg-green-500' },
    'Failed': { text: 'Failed', color: 'bg-red-500' },
    'In Progress': { text: 'In Progress', color: 'bg-yellow-500' },
  };
  const config = statusConfig[status] || { text: 'Unknown', color: 'bg-gray-400' };

  return (
    <div className="flex items-center gap-2">
      <div className={`w-2.5 h-2.5 rounded-full ${config.color}`}></div>
      <span>{config.text}</span>
    </div>
  );
};

export default function TestDashboardPage() {
  const [jobs, setJobs] = useState(initialJobs);
  const [currentJobId, setCurrentJobId] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState(null);
  const [agentName, setAgentName] = useState('');


  const handleSubmit = (e) => {
    // Prevent default form submission if triggered by an event
    if (e) e.preventDefault();

    if (!fileName) {
      alert('Please select a file to upload.');
      return;
    }
    const newJobId = 'a1b2-c3d4'; // Use a fixed mock ID for consistency
    setCurrentJobId(newJobId);
    setSubmitted(true);

    const newJob = {
        jobId: newJobId,
        agentName: agentName,
        status: 'Completed',
        timestamp: new Date().toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
    };
    setJobs([newJob, ...jobs]);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  // NEW: Function to handle the example run
  const handleRunExample = () => {
    // 1. Create a fake file object
    const exampleFile = new File(['//This is a mock AI agent file content'], 'example-agent.zip', { type: 'application/zip' });

    // 2. Set the state as if this file was selected
    setFileName(exampleFile.name);
    setAgentName('Example Agent v1.0');

    // 3. Trigger the submission process directly
    // We use a short timeout to allow React to update the state before submitting
    setTimeout(() => {
        handleSubmit();
    }, 100);
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-white pt-20">
        <div className="fixed inset-0 h-full w-full bg-slate-50 bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_50%_60%_at_50%_50%,transparent_40%,#000_100%)]"></div>

        <div className="relative z-10 p-6 sm:p-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-800">Test Dashboard</h1>
            <p className="mt-2 text-lg text-gray-600">Upload a new agent for testing or review your past test results.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-2xl font-bold">Upload Your AI Agent</h2>
              <div>
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-lg border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center hover:border-blue-500 transition-colors">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="mt-2 block text-sm font-semibold text-blue-600">{fileName ? fileName : "Click to upload or drag and drop"}</span>
                  <input id="file-upload" name="file-upload" type="file" className="hidden" onChange={handleFileChange} accept=".zip" />
                </label>
              </div>
              {/* NEW: Button to run the example */}
              <div className="text-center">
                  <button type="button" onClick={handleRunExample} className="font-semibold text-sm text-blue-600 hover:underline">
                      Or, run an example test
                  </button>
              </div>
              <input type="text" placeholder="Agent Name" value={agentName} onChange={(e) => setAgentName(e.target.value)} className="w-full p-2 border rounded-lg" required />
              <input type="text" placeholder="Purpose (e.g., Customer Support)" className="w-full p-2 border rounded-lg" />
              <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 text-lg">
                Upload & Test
              </button>
            </form>

            <div className="flex flex-col justify-center">
              {/* This part remains the same */}
              {!submitted ? (
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800">Account Usage</h3>
                  <p className="text-gray-500 mt-1">Your current plan: Pro</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '35%'}}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">35 / 100 tests used this month.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Feedback for Job ID: {currentJobId}</h2>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                    <p><strong>Status:</strong> <span className="text-green-600 font-semibold">Completed</span></p>
                    <p><strong>Uploaded:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* UPDATED: Performance Link */}
                    <Link to={`/test/feedback/${currentJobId}/performance`} className="group flex flex-col bg-white p-4 rounded-lg shadow border hover:shadow-md hover:border-blue-500 transition-all">
                      <div className="flex-grow">
                        <h3 className="font-semibold">⚙️ Performance</h3>
                        <p className="text-sm">Startup Time: 0.82s</p>
                        <p className="text-sm">Memory Peak: 212MB</p>
                      </div>
                      <div className="mt-4 flex items-center justify-end gap-1 text-xs text-gray-400 group-hover:text-blue-600 transition-colors">
                        Click for more info <span>&rarr;</span>
                      </div>
                    </Link>
                    {/* UPDATED: Compliance Link */}
                    <Link to={`/test/feedback/${currentJobId}/compliance`} className="group flex flex-col bg-white p-4 rounded-lg shadow border hover:shadow-md hover:border-blue-500 transition-all">
                      <div className="flex-grow">
                        <h3 className="font-semibold">🛡️ Compliance</h3>
                        <p className="text-sm text-green-600">✔ GDPR: Passed</p>
                        <p className="text-sm text-yellow-600">⚠ EU AI Act: Missing classification</p>
                        <p className="text-sm text-red-600">❌ Explainability: Failed</p>
                      </div>
                      <div className="mt-4 flex items-center justify-end gap-1 text-xs text-gray-400 group-hover:text-blue-600 transition-colors">
                        Click for more info <span>&rarr;</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Test History</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="p-4 font-semibold text-gray-600">Job ID</th>
                    <th className="p-4 font-semibold text-gray-600">Agent Name</th>
                    <th className="p-4 font-semibold text-gray-600">Status</th>
                    <th className="p-4 font-semibold text-gray-600">Timestamp</th>
                    <th className="p-4 font-semibold text-gray-600"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {jobs.map((job) => (
                    <tr key={job.jobId} className="hover:bg-gray-50">
                      <td className="p-4 font-mono text-gray-500">{job.jobId}</td>
                      <td className="p-4 font-medium text-gray-800">{job.agentName}</td>
                      <td className="p-4"><StatusIndicator status={job.status} /></td>
                      <td className="p-4 text-gray-500">{job.timestamp}</td>
                      <td className="p-4 text-right">
                        <Link to={`/test/feedback/${job.jobId}`} className="font-semibold text-blue-600 hover:text-blue-700">
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}