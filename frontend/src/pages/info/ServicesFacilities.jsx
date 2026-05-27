import React, { useState } from 'react';
import { Server, Users, GraduationCap, Monitor, Database, Library, Cpu, LayoutDashboard, FileText } from 'lucide-react';

const ServicesFacilities = () => {
  const [activeTab, setActiveTab] = useState('services');

  const services = [
    {
      icon: <Server size={24} />,
      title: "Admin Tools",
      description: "Comprehensive system management",
      features: ["User provisioning & RBAC", "Automated audit logs", "Overall system metrics"]
    },
    {
      icon: <Users size={24} />,
      title: "Teacher Tools",
      description: "Empowering educators",
      features: ["Instant classroom generation", "Dynamic gradebooks", "Assignment trackers"]
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Student Tools",
      description: "Focused learning environment",
      features: ["Personalized assignment feeds", "Progress tracking", "Downloadable resources"]
    }
  ];

  const facilities = [
    {
      icon: <Monitor size={24} />,
      title: "Smart Classrooms",
      description: "Next-gen physical spaces",
      features: ["Hardware configurations", "Digital whiteboard streaming", "IoT environmental control"]
    },
    {
      icon: <Cpu size={24} />,
      title: "Virtual Labs",
      description: "Cloud-based experimentation",
      features: ["Sandboxed runtime environments", "Pre-configured tech stacks", "Real-time collaboration"]
    },
    {
      icon: <Library size={24} />,
      title: "Resource Library",
      description: "Centralized knowledge base",
      features: ["Academic PDFs repository", "Syllabus models", "Recorded lecture archives"]
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <h1 className="title-xl text-gradient">Services & Facilities</h1>
        <p className="subtitle mx-auto" style={{ margin: '0 auto' }}>
          Discover our comprehensive suite of digital services and integrated institutional facilities.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem', gap: '1rem' }}>
        <button 
          onClick={() => setActiveTab('services')}
          style={{
            padding: '1rem 2rem',
            background: activeTab === 'services' ? 'var(--primary)' : 'transparent',
            border: `1px solid ${activeTab === 'services' ? 'var(--primary)' : 'var(--border-color)'}`,
            borderRadius: 'var(--radius-lg)',
            color: activeTab === 'services' ? 'white' : 'var(--text-muted)',
            cursor: 'pointer',
            fontFamily: 'Outfit, sans-serif',
            fontSize: '1.1rem',
            fontWeight: '600',
            transition: 'var(--transition)'
          }}
        >
          Portal Digital Services
        </button>
        <button 
          onClick={() => setActiveTab('facilities')}
          style={{
            padding: '1rem 2rem',
            background: activeTab === 'facilities' ? 'var(--primary)' : 'transparent',
            border: `1px solid ${activeTab === 'facilities' ? 'var(--primary)' : 'var(--border-color)'}`,
            borderRadius: 'var(--radius-lg)',
            color: activeTab === 'facilities' ? 'white' : 'var(--text-muted)',
            cursor: 'pointer',
            fontFamily: 'Outfit, sans-serif',
            fontSize: '1.1rem',
            fontWeight: '600',
            transition: 'var(--transition)'
          }}
        >
          Integrated Facilities
        </button>
      </div>

      <div className="grid-3 animate-fade-in delay-1">
        {(activeTab === 'services' ? services : facilities).map((item, index) => (
          <div key={index} className="modern-card">
            <div className="icon-box">
              {item.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.title}</h3>
            <p style={{ color: 'var(--text-muted)' }}>{item.description}</p>
            <ul className="bullet-list">
              {item.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesFacilities;
