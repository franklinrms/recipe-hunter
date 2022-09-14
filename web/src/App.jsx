import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/explore" />} />
      {/* <Route path="/explore" element={} /> */}
    </Routes>
  );
}
