import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Landing from './Landing/Landing.jsx';
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import OurTool from './OurTool.js';
import ManualTest from './ManualTest.js';
import { Toaster } from 'react-hot-toast'; // Import the Toaster component

function App() {
  return (
    <div>
      <Toaster /> {/* Add the Toaster component here */}

      <Routes>
        <Route 
          path="/" 
          element={<Landing />} 
        />

        <Route 
          path="/our-tool" 
          element={
            <>
              <Container>
                <Sidebar />
                <OurTool />
              </Container>
            </>
          } 
        />
        <Route 
          path="/manual-test" 
          element={
            <>
              <Container>
                <Sidebar />
                <ManualTest />
              </Container>
            </>
          } 
        />
        {/* <Route path="/ai-chat" element={<AIChat />} /> */}
        {/* Define the route for the login page */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;

const Container = styled.div``;
