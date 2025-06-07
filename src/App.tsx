// src/App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Placeholder component for pages under construction
const Placeholder = ({ name }: { name: string }) => (
  <div className="text-center mt-10 text-xl text-gray-500">{name} is under construction.</div>
);

const Sidebar = ({ onAIButtonClick }: { onAIButtonClick: () => void }) => (
  <aside className="w-64 bg-white shadow h-screen p-4 space-y-4">
    <button onClick={onAIButtonClick} className="block w-full py-2 px-4 bg-blue-500 text-white rounded">
      Toggle AI Assistant
    </button>
    <nav className="space-y-2">
      <a href="/" className="block text-blue-700">Search</a>
      <a href="/bookmarks" className="block text-blue-700">Bookmarks</a>
      <a href="/downloads" className="block text-blue-700">Downloads</a>
      <a href="/history" className="block text-blue-700">History</a>
      <a href="/settings" className="block text-blue-700">Settings</a>
      <a href="/vpn" className="block text-blue-700">VPN</a>
      <a href="/privacy" className="block text-blue-700">Privacy Dashboard</a>
    </nav>
  </aside>
);

const SearchPage = () => <Placeholder name="Search Page" />;
const AIAssistant = ({ visible }: { visible: boolean }) => (
  <div className={`transition-opacity ${visible ? 'opacity-100' : 'opacity-0'} duration-500`}>
    <Placeholder name="AI Assistant" />
  </div>
);
const Bookmarks = () => <Placeholder name="Bookmarks" />;
const Downloads = () => <Placeholder name="Downloads" />;
const History = () => <Placeholder name="History" />;
const Settings = () => <Placeholder name="Settings" />;
const VPNSettings = () => <Placeholder name="VPN Settings" />;
const PrivacyDashboard = () => <Placeholder name="Privacy Dashboard" />;

export default function App() {
  const [aiVisible, setAIVisible] = useState(false);
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar onAIButtonClick={() => setAIVisible(!aiVisible)} />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/ai" element={<AIAssistant visible={aiVisible} />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/history" element={<History />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/vpn" element={<VPNSettings />} />
            <Route path="/privacy" element={<PrivacyDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
