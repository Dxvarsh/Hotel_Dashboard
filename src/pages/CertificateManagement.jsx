import React, { useState } from 'react';
import { FaPlus, FaFilePdf, FaCheckCircle, FaEdit, FaEye, FaDownload, FaCertificate, FaAward, FaBriefcase } from 'react-icons/fa';

// Stats Card Component
const StatsCard = ({ title, value, description, icon, colorClass }) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200/30 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className={`text-3xl font-bold ${colorClass}`}>{value}</p>
          <p className="text-sm text-gray-500 mt-2">{description}</p>
        </div>
        <div className="w-12 h-12 rounded-lg flex items-center justify-center"
             style={{ backgroundColor: `${colorClass.replace('text-', 'bg-')}100` }}>
          {icon}
        </div>
      </div>
    </div>
  );
};

// Certificate Template Card Component
const CertificateTemplateCard = ({ template, onEdit }) => {
  const iconMap = {
    'Course Completion': <FaCertificate className="text-primary" />,
    'Excellence Award': <FaAward className="text-green-600" />,
    'Internship Certificate': <FaBriefcase className="text-blue-600" />
  };

  return (
    <div className="bg-white rounded-lg border border-neutral-200/30 overflow-hidden">
      <img
        src={template.image}
        alt={template.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
          {iconMap[template.name]} {template.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{template.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Used: {template.usageCount} times</span>
          <button
            onClick={() => onEdit(template)}
            className="text-primary text-sm font-medium flex items-center"
          >
            <FaEdit className="mr-1" /> Edit Template
          </button>
        </div>
      </div>
    </div>
  );
};

// Certificate Table Row Component
const CertificateRow = ({ certificate, onView, onDownload, onVerify }) => {
  const statusColors = {
    'Downloaded': 'bg-green-100 text-green-800',
    'Generated': 'bg-blue-100 text-blue-800',
    'Verified': 'bg-purple-100 text-purple-800'
  };

  const statusIcons = {
    'Downloaded': <FaDownload className="text-green-500" />,
    'Generated': <FaFilePdf className="text-blue-500" />,
    'Verified': <FaCheckCircle className="text-purple-500" />
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full"
            src={certificate.student.avatar}
            alt={certificate.student.name}
          />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{certificate.student.name}</div>
            <div className="text-sm text-gray-500">{certificate.student.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {certificate.type}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {certificate.issueDate}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[certificate.status]}`}>
          {statusIcons[certificate.status]} {certificate.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button
          onClick={() => onView(certificate)}
          className="text-primary hover:text-primary/80 mr-3 flex items-center"
        >
          <FaEye className="mr-1" /> View
        </button>
        <button
          onClick={() => onDownload(certificate)}
          className="text-blue-600 hover:text-blue-800 mr-3 flex items-center"
        >
          <FaDownload className="mr-1" /> Download
        </button>
        <button
          onClick={() => onVerify(certificate)}
          className="text-green-600 hover:text-green-800 flex items-center"
        >
          <FaCheckCircle className="mr-1" /> Verify
        </button>
      </td>
    </tr>
  );
};

// Generate Certificate Modal Component
const GenerateCertificateModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Generate Certificate</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <FaPlus className="w-5 h-5 rotate-45" />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Student</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option>Select Student</option>
                <option>Rajesh Kumar</option>
                <option>Priya Sharma</option>
                <option>Amit Patel</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Certificate Type</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option>Select Certificate Type</option>
                <option>Course Completion</option>
                <option>Excellence Award</option>
                <option>Internship Certificate</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Issue Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option>Select Course</option>
                  <option>Web Development</option>
                  <option>Data Science</option>
                  <option>Digital Marketing</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
              <textarea
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Any special achievements or notes..."
              ></textarea>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90"
              >
                Generate Certificate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Main Certificate Management Component
const CertificateManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [certificateTemplates, setCertificateTemplates] = useState([
    {
      id: 1,
      name: 'Course Completion',
      description: 'Standard template for course completion certificates',
      usageCount: 856,
      image: 'https://images.unsplash.com/photo-1660795468951-0b37051eb1b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8Y2VydGlmaWNhdGUlMjBwcmVzZW50YXRpb24lMjBjZXJlbW9ueXxlbnwxfDB8fHwxNzU3ODUwMzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'Excellence Award',
      description: 'Merit-based certificates for outstanding performance',
      usageCount: 234,
      image: 'https://images.unsplash.com/photo-1709377598544-0c28bbe437bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8Y2VydGlmaWNhdGUlMjBwcmVzZW50YXRpb24lMjBjZXJlbW9ueXxlbnwxfDB8fHwxNzU3ODUwMzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: 'Internship Certificate',
      description: 'For students completing internships',
      usageCount: 157,
      image: 'https://images.unsplash.com/photo-1660795308754-4c6422baf2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8Y2VydGlmaWNhdGUlMjBwcmVzZW50YXRpb24lMjBjZXJlbW9ueXxlbnwxfDB8fHwxNzU3ODUwMzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ]);

  const [certificates, setCertificates] = useState([
    {
      id: 1,
      student: {
        name: 'Rajesh Kumar',
        email: 'rajesh@email.com',
        avatar: 'https://avatar.iran.liara.run/public/30'
      },
      type: 'Course Completion',
      issueDate: '14 Dec 2024',
      status: 'Downloaded'
    },
    {
      id: 2,
      student: {
        name: 'Priya Sharma',
        email: 'priya@email.com',
        avatar: 'https://avatar.iran.liara.run/public/31'
      },
      type: 'Excellence Award',
      issueDate: '13 Dec 2024',
      status: 'Generated'
    },
    {
      id: 3,
      student: {
        name: 'Amit Patel',
        email: 'amit@email.com',
        avatar: 'https://avatar.iran.liara.run/public/32'
      },
      type: 'Internship Certificate',
      issueDate: '12 Dec 2024',
      status: 'Verified'
    }
  ]);

  const handleGenerateCertificate = (e) => {
    e.preventDefault();
    // Add logic to generate certificate
    console.log('Certificate generated');
    setIsModalOpen(false);
  };

  const handleView = (certificate) => {
    console.log('View certificate:', certificate);
    // Add view logic
  };

  const handleDownload = (certificate) => {
    console.log('Download certificate:', certificate);
    // Add download logic
  };

  const handleVerify = (certificate) => {
    console.log('Verify certificate:', certificate);
    // Add verify logic
  };

  const handleEditTemplate = (template) => {
    console.log('Edit template:', template);
    // Add edit template logic
  };

  return (
    <div className="p-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Certificate Management</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 flex items-center"
        >
          <FaFilePdf className="mr-2" />
          Generate Certificate
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <StatsCard
          title="Total Issued"
          value="1,247"
          description="All time"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          }
          colorClass="text-primary"
        />
        <StatsCard
          title="This Month"
          value="89"
          description="New certificates"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          }
          colorClass="text-green-600"
        />
        <StatsCard
          title="Verified"
          value="1,156"
          description="Online verifications"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          }
          colorClass="text-blue-600"
        />
      </div>

      {/* Certificate Templates */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {certificateTemplates.map((template) => (
          <CertificateTemplateCard
            key={template.id}
            template={template}
            onEdit={handleEditTemplate}
          />
        ))}
      </div>

      {/* Certificates Table */}
      <div className="bg-white rounded-lg border border-neutral-200/30 overflow-hidden">
        <div className="p-4 border-b border-neutral-200/20">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search certificates..."
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none"
              />
            </div>
            <select className="px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none">
              <option>All Templates</option>
              {certificateTemplates.map(template => (
                <option key={template.id}>{template.name}</option>
              ))}
            </select>
            <select className="px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:border-primary focus:outline-none">
              <option>All Status</option>
              <option>Generated</option>
              <option>Downloaded</option>
              <option>Verified</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certificate Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/20">
              {certificates.map((certificate) => (
                <CertificateRow
                  key={certificate.id}
                  certificate={certificate}
                  onView={handleView}
                  onDownload={handleDownload}
                  onVerify={handleVerify}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Generate Certificate Modal */}
      <GenerateCertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleGenerateCertificate}
      />
    </div>
  );
};

export default CertificateManagement;
