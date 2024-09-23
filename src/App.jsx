import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Screens/Sigunp/Signup';
import Login from './Screens/Login/Login';
import Home from './Screens/Home/Home';
import AuthRoute from './Routing/AuthRoute';
import ProtectedRoute from './Routing/ProtectedRoute';
import RoomList from './Screens/Room/RoomList';
import Booking from './Screens/Booking/Booking';
import PMethod from './Screens/Payment/PMethod';
import Report from './Screens/Report/Report';
import Services from './Screens/Services/Services';
import Inventory from './Screens/Inventory/Inventory';


const App = () => {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/roomlist" element={<RoomList />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/paymentmethod" element={<PMethod/>} />
        <Route path="/report" element={<Report/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/inventory" element={<Inventory/>} />
        

        
      </Route>

      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;