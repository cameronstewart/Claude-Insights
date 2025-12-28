---
title: "Integration Admin Dashboard.tsx"
project: "TWC - Client Posture Doctor"
project_uuid: "019752ea-f102-71f8-b4a3-2d653c40d993"
doc_uuid: "b4e425be-c175-4152-8386-cdc300879b30"
created_at: "2025-06-09T04:44:14.909939+00:00"
doc_index: 7
---

import React, { useState } from 'react';
import { Activity, AlertCircle, CheckCircle, Clock, Database, Users, Calendar, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    syncSuccess: 99.2,
    patientsSync: 1247,
    appointmentsSync: 342,
    errorsToday: 3,
    avgSyncTime: 2.4,
    uptime: 99.8
  };

  const recentSyncs = [
    { id: 1, type: 'Patient', action: 'CREATE', status: 'success', time: '2 min ago' },
    { id: 2, type: 'Appointment', action: 'UPDATE', status: 'success', time: '5 min ago' },
    { id: 3, type: 'Patient', action: 'UPDATE', status: 'success', time: '8 min ago' },
    { id: 4, type: 'Appointment', action: 'CREATE', status: 'error', time: '12 min ago' },
    { id: 5, type: 'Patient', action: 'CREATE', status: 'success', time: '15 min ago' }
  ];

  const errors = [
    { id: 1, message: 'Failed to sync appointment - Invalid time format', time: '12 min ago', severity: 'medium' },
    { id: 2, message: 'GHL API rate limit exceeded', time: '1 hour ago', severity: 'high' },
    { id: 3, message: 'Patient email validation failed', time: '2 hours ago', severity: 'low' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Integration Dashboard</h1>
          <p className="text-gray-600">SpineLogic ↔ GoHighLevel Synchronization</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Sync Success</p>
                <p className="text-2xl font-bold text-gray-900">{stats.syncSuccess}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Patients Synced</p>
                <p className="text-2xl font-bold text-gray-900">{stats.patientsSync.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Calendar className="w-8 h-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Appointments</p>
                <p className="text-2xl font-bold text-gray-900">{stats.appointmentsSync}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <AlertCircle className="w-8 h-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Errors Today</p>
                <p className="text-2xl font-bold text-gray-900">{stats.errorsToday}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Clock className="w-8 h-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Sync Time</p>
                <p className="text-2xl font-bold text-gray-900">{stats.avgSyncTime}s</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Activity className="w-8 h-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Uptime</p>
                <p className="text-2xl font-bold text-gray-900">{stats.uptime}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {['overview', 'syncs', 'errors', 'config'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-6 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* System Status */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">System Status</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">SpineLogic Connection</span>
                      <span className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Connected
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">GoHighLevel API</span>
                      <span className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Active
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Message Queue</span>
                      <span className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Processing
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Webhook Handler</span>
                      <span className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Listening
                      </span>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Queue Length</span>
                      <span className="text-gray-900 font-medium">12 jobs</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Memory Usage</span>
                      <span className="text-gray-900 font-medium">342 MB</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">CPU Usage</span>
                      <span className="text-gray-900 font-medium">15%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">API Rate Limit</span>
                      <span className="text-gray-900 font-medium">47/100</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'syncs' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Recent Synchronizations</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentSyncs.map((sync) => (
                        <tr key={sync.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{sync.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sync.action}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              sync.status === 'success' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {sync.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sync.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'errors' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Recent Errors</h3>
                <div className="space-y-4">
                  {errors.map((error) => (
                    <div key={error.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertCircle className={`w-5 h-5 mt-0.5 mr-3 ${
                          error.severity === 'high' ? 'text-red-600' :
                          error.severity === 'medium' ? 'text-yellow-600' : 'text-blue-600'
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{error.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{error.time}</p>
                        </div>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          error.severity === 'high' ? 'bg-red-100 text-red-800' :
                          error.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {error.severity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'config' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Configuration</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Sync Settings</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm text-gray-600">Real-time Sync</label>
                        <input type="checkbox" checked className="rounded" readOnly />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm text-gray-600">Batch Size</label>
                        <input type="number" value="100" className="w-20 text-sm border rounded px-2 py-1" readOnly />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm text-gray-600">Retry Attempts</label>
                        <input type="number" value="3" className="w-20 text-sm border rounded px-2 py-1" readOnly />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Field Mappings</h4>
                    <div className="text-sm text-gray-600">
                      <p>• FirstName → firstName</p>
                      <p>• LastName → lastName</p>
                      <p>• MobileNumber → phone</p>
                      <p>• EmailAddress → email</p>
                      <p>• DateOfBirth → customFields.dateOfBirth</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
                        