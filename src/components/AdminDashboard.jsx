import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Contact.css'; // Reusing some styles

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState({});
  const [cvDownloads, setCvDownloads] = useState(0);

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        alert("File is too large! Please upload a file smaller than 4MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        try {
          localStorage.setItem('portfolio_resume_data', reader.result);
          localStorage.setItem('portfolio_resume_name', file.name);
          alert('Resume updated successfully!');
        } catch (error) {
          alert("Error saving resume. The file might be too large for local storage.");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem('portfolio_admin_auth');
    if (!auth) {
      navigate('/admin');
    }

    const storedMessages = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
    setMessages(storedMessages.reverse()); // Newest first

    const storedStats = JSON.parse(localStorage.getItem('portfolio_stats') || '{}');
    setStats(storedStats);

    const downloads = parseInt(localStorage.getItem('portfolio_cv_downloads') || '0', 10);
    setCvDownloads(downloads);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('portfolio_admin_auth');
    navigate('/admin');
  };

  const chartData = Object.keys(stats).filter(key => key !== 'queries').map(key => ({
    name: key,
    clicks: stats[key]
  }));

  const totalQueries = stats['queries'] || 0;

  return (
    <div style={{ minHeight: '100vh', padding: '2rem', backgroundColor: '#0a0a0a', color: '#fff' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Admin Dashboard</h1>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input 
              type="file" 
              id="resume-upload" 
              style={{ display: 'none' }} 
              accept=".pdf,.doc,.docx" 
              onChange={handleResumeUpload} 
            />
            <label 
              htmlFor="resume-upload" 
              className="btn btn-outline" 
              style={{ padding: '0.5rem 1.5rem', cursor: 'pointer', margin: 0, border: '1px solid #4ade80', color: '#4ade80' }}
            >
              Update Resume
            </label>
            <button onClick={handleLogout} className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', margin: 0 }}>
              Logout
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <motion.div 
              className="glass" 
              style={{ padding: '2rem', borderRadius: '15px', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 style={{ fontSize: '1.2rem', color: '#aaa', marginBottom: '1rem' }}>Total Form Queries</h3>
              <p style={{ fontSize: '4rem', fontWeight: 'bold', color: '#4ade80' }}>{totalQueries}</p>
            </motion.div>

            <motion.div 
              className="glass" 
              style={{ padding: '2rem', borderRadius: '15px', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 style={{ fontSize: '1.2rem', color: '#aaa', marginBottom: '1rem' }}>CV Downloads</h3>
              <p style={{ fontSize: '4rem', fontWeight: 'bold', color: '#a855f7' }}>{cvDownloads}</p>
            </motion.div>
          </div>

          <motion.div 
            className="glass" 
            style={{ padding: '2rem', borderRadius: '15px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 style={{ fontSize: '1.2rem', color: '#aaa', marginBottom: '1rem', textAlign: 'center' }}>Social Links Clicks</h3>
            <div style={{ height: '200px' }}>
              {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#aaa" />
                    <YAxis stroke="#aaa" allowDecimals={false} />
                    <Tooltip cursor={{fill: 'rgba(255,255,255,0.1)'}} contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
                    <Bar dataKey="clicks" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <p style={{ textAlign: 'center', marginTop: '4rem', color: '#666' }}>No clicks yet</p>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="glass" 
          style={{ padding: '2rem', borderRadius: '15px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>Recent Messages</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div key={index} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '10px', border: '1px solid #222' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>{msg.name}</h4>
                      <p style={{ color: '#aaa', fontSize: '0.9rem' }}>{msg.email} | {msg.phone}</p>
                    </div>
                    <span style={{ color: '#666', fontSize: '0.9rem' }}>
                      {new Date(msg.date).toLocaleString()}
                    </span>
                  </div>
                  <p style={{ color: '#ddd', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>{msg.message}</p>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center', color: '#666', padding: '2rem 0' }}>No messages received yet.</p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
