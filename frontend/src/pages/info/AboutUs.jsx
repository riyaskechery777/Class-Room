import React from 'react';
import { Activity, ShieldCheck, Zap, Server, Code, Users } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { value: "99.9%", label: "Uptime SLA", icon: <Activity className="text-accent" size={24} color="var(--accent)" /> },
    { value: "Zero-friction", label: "OAuth Integration", icon: <Zap size={24} color="var(--accent)" /> },
    { value: "AES-256", label: "Encrypted Pipelines", icon: <ShieldCheck size={24} color="var(--accent)" /> }
  ];

  const pillars = [
    {
      title: "Administration",
      description: "Streamlined infrastructure allowing institutional leaders to focus on academic excellence rather than IT bottlenecks.",
      icon: <Server size={32} />
    },
    {
      title: "Educators",
      description: "Powerful automation tools that eliminate busywork, providing teachers with more time for direct student engagement.",
      icon: <Users size={32} />
    },
    {
      title: "Students",
      description: "Intuitive, distraction-free interfaces designed to maximize learning retention and simplify academic workflows.",
      icon: <Code size={32} />
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      <div className="text-center" style={{ marginBottom: '5rem', marginTop: '2rem' }}>
        <h1 className="title-xl text-gradient">About Our Mission</h1>
        <p className="subtitle mx-auto" style={{ margin: '1.5rem auto 0', fontSize: '1.25rem', color: 'var(--text-main)' }}>
          Bridging the gap between administration, educators, and students through robust software engineering.
        </p>
      </div>

      {/* Visual Stat Counter Row */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
        marginBottom: '5rem'
      }} className="animate-fade-in delay-1">
        {stats.map((stat, index) => (
          <div key={index} style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            minWidth: '250px',
            textAlign: 'center',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              {stat.icon}
            </div>
            <div style={{ 
              fontSize: '2rem', 
              fontWeight: '800', 
              fontFamily: 'Outfit, sans-serif',
              color: 'var(--text-main)',
              marginBottom: '0.5rem'
            }}>
              {stat.value}
            </div>
            <div style={{ color: 'var(--text-muted)', fontWeight: '500' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Platform Pillars */}
      <div>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Platform Pillars</h2>
        <div className="grid-3 animate-fade-in delay-2">
          {pillars.map((pillar, index) => (
            <div key={index} className="modern-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
              <div className="icon-box" style={{ margin: '0 auto 1.5rem auto', width: '64px', height: '64px' }}>
                {pillar.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{pillar.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
