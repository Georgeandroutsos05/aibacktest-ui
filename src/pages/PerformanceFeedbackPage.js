// src/pages/PerformanceFeedbackPage.js
import { useParams, Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

// Placeholder for a chart component
const ChartPlaceholder = ({ label }) => (
  <div className="bg-slate-100 rounded-lg p-4 h-56 flex items-center justify-center print:border print:border-gray-200">
    <p className="text-slate-500 font-medium">{label}</p>
  </div>
);

export default function PerformanceFeedbackPage() {
  const { jobId } = useParams();

  // Mock data for this specific view
  const performanceData = {
    summary: {
      peakMemory: '212MB',
      cpuTime: '4.6s',
      startupTime: '0.82s',
      avgResponseTime: '75ms',
    },
    timeline: [
        { time: '0s', event: 'Agent Initialized' },
        { time: '0.82s', event: 'Startup Complete' },
        { time: '1.5s', event: 'First Request Received' },
        { time: '4.6s', event: 'Final Task Completed' },
    ]
  };

  const handleSaveAsPdf = () => {
    window.print();
  };

  const handleSendEmail = () => {
    alert(`A copy of the report for Job ID ${jobId} has been sent to your email address.`);
  };

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
                  Performance Report
                </h1>
                <p className="mt-2 text-lg text-gray-500">
                  Detailed analysis for Job ID: <span className="font-mono text-gray-700">{jobId}</span>
                </p>
              </div>
              {/* Action buttons container */}
              <div className="flex items-center gap-2 print:hidden">
                {/* Email button with tooltip */}
                <div className="relative group">
                  <button onClick={handleSendEmail} className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                    <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                      <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                    </svg>
                  </button>
                  {/* The Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Send to Email
                  </div>
                </div>
                {/* PDF button with tooltip */}
                <div className="relative group">
                   <button onClick={handleSaveAsPdf} className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                     <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 3.75a.75.75 0 01.75.75v5.19l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V4.5a.75.75 0 01.75-.75z" />
                      <path d="M3.5 9.75a.75.75 0 01.75.75v3.5c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75v-3.5a.75.75 0 011.5 0v3.5A2.25 2.25 0 0115.75 16h-10.5A2.25 2.25 0 013 13.5v-3a.75.75 0 01.5-.5z" />
                    </svg>
                  </button>
                   {/* The Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Save as PDF
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Summary */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 print:grid-cols-4">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 print:shadow-none">
              <p className="text-sm text-gray-500">Peak Memory</p>
              <p className="text-2xl font-bold text-gray-800">{performanceData.summary.peakMemory}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 print:shadow-none">
              <p className="text-sm text-gray-500">Total CPU Time</p>
              <p className="text-2xl font-bold text-gray-800">{performanceData.summary.cpuTime}</p>
            </div>
             <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 print:shadow-none">
              <p className="text-sm text-gray-500">Startup Time</p>
              <p className="text-2xl font-bold text-gray-800">{performanceData.summary.startupTime}</p>
            </div>
             <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 print:shadow-none">
              <p className="text-sm text-gray-500">Avg. Response</p>
              <p className="text-2xl font-bold text-gray-800">{performanceData.summary.avgResponseTime}</p>
            </div>
          </div>

          {/* Detailed Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 print:grid-cols-2">
            {/* Resource Usage Card */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 print:shadow-none">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Resource Usage</h2>
              <div className="space-y-4">
                <ChartPlaceholder label="Memory Usage (MB) over Time" />
                <ChartPlaceholder label="CPU Utilization (%) over Time" />
              </div>
            </div>

            {/* Execution Timeline Card */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 print:shadow-none">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Execution Timeline</h2>
              <div className="flow-root">
                <ul className="-mb-8">
                  {performanceData.timeline.map((item, itemIdx) => (
                    <li key={item.time}>
                      <div className="relative pb-8">
                        {itemIdx !== performanceData.timeline.length - 1 ? (
                          <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                        ) : null}
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                              <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" />
                              </svg>
                            </span>
                          </div>
                          <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                            <div>
                              <p className="text-sm text-gray-500">{item.event}</p>
                            </div>
                            <div className="whitespace-nowrap text-right text-sm text-gray-500">
                              <time>{item.time}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AnimatedPage>
  );
}