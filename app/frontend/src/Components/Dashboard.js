import React from 'react';
import { useLocation } from 'react-router';

const Dashboard = () => {
  const { state } = useLocation();
  return (
    <>
      <h1>{state.message}</h1>
    </>
  );
};

export default Dashboard;