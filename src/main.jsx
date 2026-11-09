import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './style.css';

class AppErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error) { console.error('StudyMate render error:', error); }
  render() {
    if (this.state.error) return <main style={{maxWidth:720,margin:'10vh auto',padding:24,fontFamily:'system-ui'}}>
      <h1>StudyMate yüklenemedi</h1><p>Bir ekran hatası oluştu. Verilerin tarayıcıda korunuyor.</p>
      <pre style={{whiteSpace:'pre-wrap',background:'#f5f1ed',padding:16,borderRadius:12}}>{String(this.state.error?.message || this.state.error)}</pre>
      <button onClick={()=>location.reload()}>Yeniden yükle</button>
    </main>;
    return this.props.children;
  }
}
createRoot(document.getElementById('root')).render(<React.StrictMode><AppErrorBoundary><App /></AppErrorBoundary></React.StrictMode>);
