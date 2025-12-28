---
title: "UFinancial Document Management UI.tsx"
project: "UFinancial Demo"
project_uuid: "019738a2-160b-7035-a396-486150629fe1"
doc_uuid: "174b587d-7d1b-4aea-9345-96d39501abce"
created_at: "2025-06-18T06:22:34.288199+00:00"
doc_index: 2
---

import { useState } from 'react';
import { Search, FileText, Users, ChevronDown, Filter, Clock, Calendar, Shield, Settings, PlusCircle, User, UserCheck, Lock, Archive } from 'lucide-react';

export default function UFinancialDocumentManagement() {
  const [activeView, setActiveView] = useState('engagements');
  const [showMetadataForm, setShowMetadataForm] = useState(false);
  const [showAccessForm, setShowAccessForm] = useState(false);
  const [selectedEngagement, setSelectedEngagement] = useState(null);
  
  const handleViewEngagement = (engagement) => {
    console.log("Viewing engagement:", engagement);
    setSelectedEngagement(engagement);
  };
  
  const renderEngagementsList = () => {
    return (
      <>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Engagements</h2>
          <div className="flex space-x-2">
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
              onClick={() => setShowMetadataForm(true)}
            >
              <PlusCircle size={18} className="mr-2" />
              New Engagement
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center">
              <Filter size={18} className="mr-2" />
              Filter
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engagement ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engagement Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Owner
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Smith Family Trust</div>
                  <div className="text-sm text-gray-500">CL-2023-0145</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">BE-2025-0187</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Financial Planning
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Sarah Johnson
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    In Progress
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  May 15, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    className="text-blue-600 hover:text-blue-900 mr-3"
                    onClick={() => setShowAccessForm(true)}
                  >
                    Manage Access
                  </button>
                  <button 
                    className="text-blue-600 hover:text-blue-900"
                    onClick={() => handleViewEngagement({
                      id: 'BE-2025-0187',
                      name: 'Smith Family Trust',
                      clientId: 'CL-2023-0145',
                      type: 'Financial Planning',
                      owner: 'Sarah Johnson',
                      status: 'In Progress',
                      date: 'May 15, 2025',
                      division: 'Financial Planning'
                    })}
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Johnson Industries Pty Ltd</div>
                  <div className="text-sm text-gray-500">CL-2022-0078</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">BE-2025-0165</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                    Accounting
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Michael Lee
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Review
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  June 2, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    className="text-blue-600 hover:text-blue-900 mr-3"
                    onClick={() => setShowAccessForm(true)}
                  >
                    Manage Access
                  </button>
                  <button 
                    className="text-blue-600 hover:text-blue-900"
                    onClick={() => handleViewEngagement({
                      id: 'BE-2025-0165',
                      name: 'Johnson Industries Pty Ltd',
                      clientId: 'CL-2022-0078',
                      type: 'Accounting',
                      owner: 'Michael Lee',
                      status: 'Review',
                      date: 'June 2, 2025',
                      division: 'Accounting'
                    })}
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Peterson Superannuation Fund</div>
                  <div className="text-sm text-gray-500">CL-2024-0212</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">BE-2025-0194</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                    Brokerage
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Amanda Chen
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Complete
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  June 10, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    className="text-blue-600 hover:text-blue-900 mr-3"
                    onClick={() => setShowAccessForm(true)}
                  >
                    Manage Access
                  </button>
                  <button 
                    className="text-blue-600 hover:text-blue-900"
                    onClick={() => handleViewEngagement({
                      id: 'BE-2025-0194',
                      name: 'Peterson Superannuation Fund',
                      clientId: 'CL-2024-0212',
                      type: 'Brokerage',
                      owner: 'Amanda Chen',
                      status: 'Complete',
                      date: 'June 10, 2025',
                      division: 'Brokerage'
                    })}
                  >
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };
  
  const renderClientsList = () => {
    return (
      <>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Clients</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
              <PlusCircle size={18} className="mr-2" />
              New Client
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center">
              <Filter size={18} className="mr-2" />
              Filter
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Division Owner
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Smith Family Trust</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">CL-2023-0145</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Financial Planning
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" 
                     className="text-blue-600 hover:text-blue-900"
                     onClick={(e) => {
                       e.preventDefault();
                       setActiveView('engagement-detail');
                       handleViewEngagement({
                         id: 'BE-2025-0187',
                         name: 'Smith Family Trust',
                         clientId: 'CL-2023-0145',
                         type: 'Financial Planning',
                         owner: 'Sarah Johnson',
                         status: 'In Progress',
                         date: 'May 15, 2025',
                         division: 'Financial Planning'
                       });
                     }}
                  >View Engagements</a>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Johnson Industries Pty Ltd</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">CL-2022-0078</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Accounting
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" 
                     className="text-blue-600 hover:text-blue-900"
                     onClick={(e) => {
                       e.preventDefault();
                       setActiveView('engagement-detail');
                       handleViewEngagement({
                         id: 'BE-2025-0165',
                         name: 'Johnson Industries Pty Ltd',
                         clientId: 'CL-2022-0078',
                         type: 'Accounting',
                         owner: 'Michael Lee',
                         status: 'Review',
                         date: 'June 2, 2025',
                         division: 'Accounting'
                       });
                     }}
                  >View Engagements</a>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Peterson Superannuation Fund</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">CL-2024-0212</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Brokerage
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" 
                     className="text-blue-600 hover:text-blue-900"
                     onClick={(e) => {
                       e.preventDefault();
                       setActiveView('engagement-detail');
                       handleViewEngagement({
                         id: 'BE-2025-0194',
                         name: 'Peterson Superannuation Fund',
                         clientId: 'CL-2024-0212',
                         type: 'Brokerage',
                         owner: 'Amanda Chen',
                         status: 'Complete',
                         date: 'June 10, 2025',
                         division: 'Brokerage'
                       });
                     }}
                  >View Engagements</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };
  
  const renderArchivedList = () => {
    return (
      <>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Archived Engagements</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center">
              <Filter size={18} className="mr-2" />
              Filter
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engagement ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engagement Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Owner
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Archived Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 text-gray-500">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium">Harrison Pty Ltd</div>
                  <div className="text-sm">CL-2021-0056</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">BE-2023-0112</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                    Financial Planning
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  Sarah Johnson
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  January 10, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900">View</a>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 text-gray-500">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium">Thompson Family</div>
                  <div className="text-sm">CL-2022-0134</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">BE-2024-0078</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                    Accounting
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  Michael Lee
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  March 22, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900">View</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };
  
  const renderMyEngagements = () => {
    return (
      <>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">My Engagements</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center">
              <Filter size={18} className="mr-2" />
              Filter
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engagement ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engagement Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Smith Family Trust</div>
                  <div className="text-sm text-gray-500">CL-2023-0145</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">BE-2025-0187</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Financial Planning
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    In Progress
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  May 15, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    className="text-blue-600 hover:text-blue-900"
                    onClick={() => {
                      setActiveView('engagement-detail');
                      handleViewEngagement({
                        id: 'BE-2025-0187',
                        name: 'Smith Family Trust',
                        clientId: 'CL-2023-0145',
                        type: 'Financial Planning',
                        owner: 'Sarah Johnson',
                        status: 'In Progress',
                        date: 'May 15, 2025',
                        division: 'Financial Planning'
                      });
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Wilson Family</div>
                  <div className="text-sm text-gray-500">CL-2023-0178</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">BE-2025-0199</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Financial Planning
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Review
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  June 5, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    className="text-blue-600 hover:text-blue-900"
                    onClick={() => {
                      setActiveView('engagement-detail');
                      handleViewEngagement({
                        id: 'BE-2025-0199',
                        name: 'Wilson Family',
                        clientId: 'CL-2023-0178',
                        type: 'Financial Planning',
                        owner: 'Sarah Johnson',
                        status: 'Review',
                        date: 'June 5, 2025',
                        division: 'Financial Planning'
                      });
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Melbourne Property Trust</div>
                  <div className="text-sm text-gray-500">CL-2022-0156</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">BE-2025-0177</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Financial Planning
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  June 15, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    className="text-blue-600 hover:text-blue-900"
                    onClick={() => {
                      setActiveView('engagement-detail');
                      handleViewEngagement({
                        id: 'BE-2025-0177',
                        name: 'Melbourne Property Trust',
                        clientId: 'CL-2022-0156',
                        type: 'Financial Planning',
                        owner: 'Sarah Johnson',
                        status: 'Pending',
                        date: 'June 15, 2025',
                        division: 'Financial Planning'
                      });
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };
  
  const renderRecentDocuments = () => {
    return (
      <>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Recent Documents</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center">
              <Filter size={18} className="mr-2" />
              Filter
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Document Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engagement
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Document Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Modified
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Modified By
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileText size={16} className="text-gray-400 mr-2" />
                    <div className="text-sm font-medium text-gray-900">Financial Statement.xlsx</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Smith Family Trust (BE-2025-0187)</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Financial
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Today, 2:15 PM
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  You
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    className="text-blue-600 hover:text-blue-900 mr-2"
                    onClick={() => {
                      setActiveView('engagement-detail');
                      handleViewEngagement({
                        id: 'BE-2025-0187',
                        name: 'Smith Family Trust',
                        clientId: 'CL-2023-0145',
                        type: 'Financial Planning',
                        owner: 'Sarah Johnson',
                        status: 'In Progress',
                        date: 'May 15, 2025',
                        division: 'Financial Planning'
                      });
                    }}
                  >
                    View Engagement
                  </button>
                  <a href="#" className="text-blue-600 hover:text-blue-900">Open</a>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileText size={16} className="text-gray-400 mr-2" />
                    <div className="text-sm font-medium text-gray-900">Meeting Notes.docx</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Wilson Family (BE-2025-0199)</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Notes
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Today, 11:20 AM
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  You
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    className="text-blue-600 hover:text-blue-900 mr-2"
                    onClick={() => {
                      setActiveView('engagement-detail');
                      handleViewEngagement({
                        id: 'BE-2025-0199',
                        name: 'Wilson Family',
                        clientId: 'CL-2023-0178',
                        type: 'Financial Planning',
                        owner: 'Sarah Johnson',
                        status: 'Review',
                        date: 'June 5, 2025',
                        division: 'Financial Planning'
                      });
                    }}
                  >
                    View Engagement
                  </button>
                  <a href="#" className="text-blue-600 hover:text-blue-900">Open</a>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileText size={16} className="text-gray-400 mr-2" />
                    <div className="text-sm font-medium text-gray-900">Client Requirements.pdf</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Johnson Industries (BE-2025-0165)</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                    Requirements
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Yesterday, 4:45 PM
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Michael Lee
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    className="text-blue-600 hover:text-blue-900 mr-2"
                    onClick={() => {
                      setActiveView('engagement-detail');
                      handleViewEngagement({
                        id: 'BE-2025-0165',
                        name: 'Johnson Industries Pty Ltd',
                        clientId: 'CL-2022-0078',
                        type: 'Accounting',
                        owner: 'Michael Lee',
                        status: 'Review',
                        date: 'June 2, 2025',
                        division: 'Accounting'
                      });
                    }}
                  >
                    View Engagement
                  </button>
                  <a href="#" className="text-blue-600 hover:text-blue-900">Open</a>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileText size={16} className="text-gray-400 mr-2" />
                    <div className="text-sm font-medium text-gray-900">Risk Assessment.xlsx</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Melbourne Property Trust (BE-2025-0177)</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Assessment
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Yesterday, 9:30 AM
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  You
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    className="text-blue-600 hover:text-blue-900 mr-2"
                    onClick={() => {
                      setActiveView('engagement-detail');
                      handleViewEngagement({
                        id: 'BE-2025-0177',
                        name: 'Melbourne Property Trust',
                        clientId: 'CL-2022-0156',
                        type: 'Financial Planning',
                        owner: 'Sarah Johnson',
                        status: 'Pending',
                        date: 'June 15, 2025',
                        division: 'Financial Planning'
                      });
                    }}
                  >
                    View Engagement
                  </button>
                  <a href="#" className="text-blue-600 hover:text-blue-900">Open</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };
  
  const renderEngagementDetail = () => {
    const engagement = selectedEngagement;
    
    return (
      <>
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="flex items-center">
              <button 
                className="text-gray-600 hover:text-blue-600 mr-2 flex items-center"
                onClick={() => {
                  setSelectedEngagement(null);
                  setActiveView('engagements');
                }}
              >
                <ChevronDown className="transform rotate-90 mr-1" size={18} />
                Back
              </button>
              <h2 className="text-2xl font-semibold text-gray-800">{engagement.name}</h2>
            </div>
            <div className="flex mt-1 text-sm text-gray-500">
              <span className="mr-4">ID: {engagement.id}</span>
              <span className="mr-4">Client ID: {engagement.clientId}</span>
              <span className="mr-4">Owner: {engagement.owner}</span>
              <span>Date: {engagement.date}</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
              <PlusCircle size={18} className="mr-2" />
              Upload Document
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center">
              <Filter size={18} className="mr-2" />
              Filter
            </button>
          </div>
        </div>

        {/* SharePoint-style Metadata Panel */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Properties</h3>
          </div>
          <div className="p-4">
            <table className="min-w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 text-sm font-medium text-gray-500 w-1/3">Client Name</td>
                  <td className="py-3 text-sm text-gray-900">{engagement.name}</td>
                </tr>
                <tr>
                  <td className="py-3 text-sm font-medium text-gray-500 w-1/3">Client ID</td>
                  <td className="py-3 text-sm text-gray-900">{engagement.clientId}</td>
                </tr>
                <tr>
                  <td className="py-3 text-sm font-medium text-gray-500 w-1/3">Engagement ID</td>
                  <td className="py-3 text-sm text-gray-900">{engagement.id}</td>
                </tr>
                <tr>
                  <td className="py-3 text-sm font-medium text-gray-500 w-1/3">Engagement Type</td>
                  <td className="py-3 text-sm text-gray-900">{engagement.type}</td>
                </tr>
                <tr>
                  <td className="py-3 text-sm font-medium text-gray-500 w-1/3">Engagement Owner</td>
                  <td className="py-3 text-sm text-gray-900">{engagement.owner}</td>
                </tr>
                <tr>
                  <td className="py-3 text-sm font-medium text-gray-500 w-1/3">Division Owner</td>
                  <td className="py-3 text-sm text-gray-900">{engagement.division || "N/A"}</td>
                </tr>
                <tr>
                  <td className="py-3 text-sm font-medium text-gray-500 w-1/3">Status</td>
                  <td className="py-3 text-sm text-gray-900">{engagement.status}</td>
                </tr>
                <tr>
                  <td className="py-3 text-sm font-medium text-gray-500 w-1/3">Date</td>
                  <td className="py-3 text-sm text-gray-900">{engagement.date}</td>
                </tr>
                <tr>
                  <td className="py-3 text-sm font-medium text-gray-500 w-1/3">System URL</td>
                  <td className="py-3 text-sm text-gray-900">
                    <a href="#" className="text-blue-600 hover:text-blue-900">https://system.ufinancial.com.au/{engagement.id.toLowerCase()}</a>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 text-sm font-medium text-gray-500 w-1/3">Created</td>
                  <td className="py-3 text-sm text-gray-900">June 1, 2025 by {engagement.owner}</td>
                </tr>
                <tr>
                  <td className="py-3 text-sm font-medium text-gray-500 w-1/3">Last Modified</td>
                  <td className="py-3 text-sm text-gray-900">June 15, 2025 by {engagement.owner}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Documents</h3>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Document Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Modified
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Modified By
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileText size={16} className="text-gray-400 mr-2" />
                    <div className="text-sm font-medium text-gray-900">{engagement.name} - Engagement Agreement.docx</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Agreement
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  June 10, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {engagement.owner}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">Properties</button>
                  <a href="#" className="text-blue-600 hover:text-blue-900">Open</a>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileText size={16} className="text-gray-400 mr-2" />
                    <div className="text-sm font-medium text-gray-900">Financial Statement.xlsx</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Financial
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  June 12, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {engagement.owner}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">Properties</button>
                  <a href="#" className="text-blue-600 hover:text-blue-900">Open</a>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileText size={16} className="text-gray-400 mr-2" />
                    <div className="text-sm font-medium text-gray-900">Client Requirements.pdf</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                    Requirements
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  June 8, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Michael Wilson
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">Properties</button>
                  <a href="#" className="text-blue-600 hover:text-blue-900">Open</a>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FileText size={16} className="text-gray-400 mr-2" />
                    <div className="text-sm font-medium text-gray-900">Meeting Notes - {new Date().toLocaleDateString()}.docx</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Notes
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date().toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {engagement.owner}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">Properties</button>
                  <a href="#" className="text-blue-600 hover:text-blue-900">Open</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };
  
  const renderMainContent = () => {
    if (selectedEngagement) {
      return renderEngagementDetail();
    }
    
    switch (activeView) {
      case 'engagements':
        return renderEngagementsList();
      case 'clients':
        return renderClientsList();
      case 'archived':
        return renderArchivedList();
      case 'my-engagements':
        return renderMyEngagements();
      case 'recent-documents':
        return renderRecentDocuments();
      default:
        return renderEngagementsList();
    }
  };
  
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-blue-800">UFinancial Document Management</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search across all documents..." 
                className="w-96 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            <button className="flex items-center text-gray-600 hover:text-blue-600">
              <Settings size={18} className="mr-1" />
              <span>Settings</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <button 
              className={`flex items-center w-full p-2 rounded-lg ${activeView === 'engagements' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => {
                setActiveView('engagements');
                setSelectedEngagement(null);
              }}
            >
              <FileText size={18} className="mr-2" />
              <span className="font-medium">Engagements</span>
            </button>
            <button 
              className={`flex items-center w-full p-2 rounded-lg mt-1 ${activeView === 'clients' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => {
                setActiveView('clients');
                setSelectedEngagement(null);
              }}
            >
              <Users size={18} className="mr-2" />
              <span className="font-medium">Clients</span>
            </button>
            <button 
              className={`flex items-center w-full p-2 rounded-lg mt-1 ${activeView === 'archived' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => {
                setActiveView('archived');
                setSelectedEngagement(null);
              }}
            >
              <Archive size={18} className="mr-2" />
              <span className="font-medium">Archived</span>
            </button>
          </div>
          
          <div className="p-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">QUICK ACCESS</h3>
            <div className="space-y-2">
              <button 
                className={`flex items-center w-full text-left text-sm ${activeView === 'recent-documents' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={() => {
                  setActiveView('recent-documents');
                  setSelectedEngagement(null);
                }}
              >
                <Clock size={16} className="mr-2" />
                <span>Recent Documents</span>
              </button>
              <button 
                className={`flex items-center w-full text-left text-sm ${activeView === 'my-engagements' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={() => {
                  setActiveView('my-engagements');
                  setSelectedEngagement(null);
                }}
              >
                <UserCheck size={16} className="mr-2" />
                <span>My Engagements</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">
          {renderMainContent()}
        </main>
      </div>

      {/* New Engagement Metadata Form Modal */}
      {showMetadataForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Create New Engagement</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option>Select a client...</option>
                    <option>Smith Family Trust (CL-2023-0145)</option>
                    <option>Johnson Industries Pty Ltd (CL-2022-0078)</option>
                    <option>Peterson Superannuation Fund (CL-2024-0212)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Engagement ID</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Auto-generated" disabled />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Engagement Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option>Select type...</option>
                    <option>Financial Planning</option>
                    <option>Accounting</option>
                    <option>Brokerage</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Division Owner</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option>Select division...</option>
                    <option>Financial Planning</option>
                    <option>Accounting</option>