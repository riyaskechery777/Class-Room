import React from 'react';
import { Lock, FileText, Database, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  const policies = [
    {
      icon: <Lock size={28} />,
      title: "Data Security & Encryption",
      content: "We encrypt passwords via bcrypt, secure sessions via stateless JWT tokens, and employ strict TLS 1.3 encryption for all data in transit. Your sensitive institutional data is never stored in plain text."
    },
    {
      icon: <Database size={28} />,
      title: "Data Ownership & Sharing",
      content: "We never sell or share raw student/faculty logs. Institutions retain 100% ownership of their academic data, files, and user metrics. Third-party integrations are strictly opt-in."
    },
    {
      icon: <Shield size={28} />,
      title: "Infrastructure & Compliance",
      content: "Our infrastructure runs on isolated virtual private clouds (VPCs). We comply with modern data protection standards including GDPR, FERPA, and CCPA guidelines for educational software."
    },
    {
      icon: <FileText size={28} />,
      title: "Audit & Transparency",
      content: "System administrators have access to comprehensive, immutable audit logs. You can export, review, or request permanent deletion of your institutional data at any time."
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <h1 className="title-xl text-gradient">Privacy & Site Policy</h1>
        <p className="subtitle mx-auto" style={{ margin: '0 auto' }}>
          Streamlined, transparent, and built with modern security principles. No dense legal jargon.
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {policies.map((policy, index) => (
          <div 
            key={index}
            className={`animate-fade-in delay-${(index % 3) + 1}`}
            style={{
              padding: '2.5rem',
              borderRadius: 'var(--radius-lg)',
              marginBottom: '1.5rem',
              background: index % 2 === 0 ? 'rgba(30, 41, 59, 0.4)' : 'rgba(15, 23, 42, 0.6)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              gap: '2rem',
              alignItems: 'flex-start'
            }}
          >
            <div style={{
              minWidth: '56px',
              height: '56px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-hover)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent)'
            }}>
              {policy.icon}
            </div>
            
            <div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1rem',
                color: 'var(--text-main)'
              }}>
                {policy.title}
              </h3>
              <p style={{ 
                color: 'var(--text-muted)',
                lineHeight: '1.8',
                fontSize: '1.05rem'
              }}>
                {policy.content}
              </p>
            </div>
          </div>
        ))}

        <div 
          className="animate-fade-in delay-3"
          style={{
            marginTop: '3rem',
            padding: '2rem',
            textAlign: 'center',
            borderTop: '1px solid var(--border-color)',
            color: 'var(--text-muted)'
          }}
        >
          <p>Last updated: May 2026</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
            If you have specific legal or compliance questions, please contact our security team directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
