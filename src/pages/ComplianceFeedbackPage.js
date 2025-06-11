// src/pages/ComplianceFeedbackPage.js
import { useParams, Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

// Helper component for status icons
const StatusIcon = ({ status }) => {
  const styles = {
    Passed: { icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z', color: 'text-green-500' },
    Warning: { icon: 'M8.485 1.485a1 1 0 011.03 0l6.515 6.515a1 1 0 010 1.03l-6.515 6.515a1 1 0 01-1.03 0L1.97 9.03a1 1 0 010-1.03L8.485 1.485zM9 11a1 1 0 100 2 1 1 0 000-2zm0-7a1 1 0 00-1 1v4a1 1 0 102 0V5a1 1 0 00-1-1z', color: 'text-yellow-500' },
    Failed: { icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z', color: 'text-red-500' },
  }
  const selected = styles[status] || { icon: '', color: 'text-gray-500' };
  return (
    <svg className={`w-6 h-6 ${selected.color}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d={selected.icon} clipRule="evenodd" />
    </svg>
  );
};

export default function ComplianceFeedbackPage() {
  const { jobId } = useParams();

  // Mock data for this specific view
  const complianceData = [
    { name: 'GDPR Compliance', status: 'Passed', description: 'Agent correctly handled and anonymized all Personally Identifiable Information (PII) during test cases.', recommendation: null, evidence: 'All PII hashes match expected values.' },
    { name: 'EU AI Act', status: 'Warning', description: 'The agent did not declare its risk category. While not a failure, this is required for deployment in the EU.', recommendation: 'Add a metadata file to your agent package declaring the risk category (e.g., "Minimal", "Limited", "High").', evidence: 'metadata.json -> risk_category: null' },
    { name: 'Explainability (XAI)', status: 'Failed', description: 'The agent failed to generate decision logs for 3 out of 10 test cases involving high-impact decisions.', recommendation: 'Ensure all decision pathways log their reasoning. Implement fallback logging for unexpected exceptions.', evidence: "Log Trace Error: case_id='A9B1', outcome='denied', reason=NULL" },
  ];

  const summary = {
    passed: complianceData.filter(c => c.status === 'Passed').length,
    warnings: complianceData.filter(c => c.status === 'Warning').length,
    failed: complianceData.filter(c => c.status === 'Failed').length,
  };

  const handleSaveAsPdf = () => { window.print(); };
  const handleSendEmail = () => { alert(`A copy of the report for Job ID ${jobId} has been sent to your email address.`); };

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-white pt-20">
        <div className="fixed inset-0 h-full w-full bg-slate-50 bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_50%_60%_at_50%_50%,transparent_40%,#000_100%)] print:hidden"></div>

        <div className="relative z-10 p-6 sm:p-8 max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <Link to="/test" className="text-sm font-semibold text-blue-600 hover:text-blue-700 mb-2 inline-block print:hidden">
              &larr; Back to Dashboard
            </Link>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-800">
                  Compliance Report
                </h1>
                <p className="mt-2 text-lg text-gray-500">
                  Detailed audit for Job ID: <span className="font-mono text-gray-700">{jobId}</span>
                </p>
              </div>
              <div className="flex items-center gap-2 print:hidden">
                {/* Email button with tooltip */}
                <div className="relative group">
                  <button onClick={handleSendEmail} className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                    <svg className="w-6 h-6 text-gray-600" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" /><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" /></svg>
                  </button>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Send to Email
                  </div>
                </div>
                {/* PDF button with tooltip */}
                <div className="relative group">
                   <button onClick={handleSaveAsPdf} className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                     <svg className="w-6 h-6 text-gray-600" viewBox="0 0 20 20" fill="currentColor"><path d="M10 3.75a.75.75 0 01.75.75v5.19l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V4.5a.75.75 0 01.75-.75z" /><path d="M3.5 9.75a.75.75 0 01.75.75v3.5c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75v-3.5a.75.75 0 011.5 0v3.5A2.25 2.25 0 0115.75 16h-10.5A2.25 2.25 0 013 13.5v-3a.75.75 0 01.5-.5z" /></svg>
                  </button>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Save as PDF
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 print:shadow-none">
              <p className="text-sm font-bold text-red-600">Failed</p>
              <p className="text-2xl font-bold text-gray-800">{summary.failed} Checks</p>
            </div>
             <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 print:shadow-none">
              <p className="text-sm font-bold text-yellow-600">Warnings</p>
              <p className="text-2xl font-bold text-gray-800">{summary.warnings} Checks</p>
            </div>
             <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 print:shadow-none">
              <p className="text-sm font-bold text-green-600">Passed</p>
              <p className="text-2xl font-bold text-gray-800">{summary.passed} Checks</p>
            </div>
          </div>

          {/* Detailed Findings */}
          <div className="space-y-6">
            {complianceData.map((item) => (
              <div key={item.name} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 print:shadow-none">
                <div className="flex items-center gap-4">
                  <StatusIcon status={item.status} />
                  <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                  <span className={`text-xs font-bold uppercase px-2 py-1 rounded-full bg-${item.status.toLowerCase()}-100 text-${item.status.toLowerCase()}-700`}>{item.status}</span>
                </div>
                <p className="mt-4 text-gray-600 ml-10">{item.description}</p>
                {item.evidence && (
                  <div className="ml-10 mt-4">
                    <p className="text-sm font-semibold text-gray-700">Evidence:</p>
                    <pre className="bg-gray-100 text-gray-700 text-sm p-3 rounded-lg mt-1 font-mono">{item.evidence}</pre>
                  </div>
                )}
                {item.recommendation && (
                  <div className="ml-10 mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm font-semibold text-blue-800">Recommendation:</p>
                    <p className="mt-1 text-sm text-blue-700">{item.recommendation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </AnimatedPage>
  );
}

// Dummy classes to ensure Tailwind includes them for dynamic generation
// bg-red-100 text-red-700 bg-yellow-100 text-yellow-700 bg-green-100 text-green-700