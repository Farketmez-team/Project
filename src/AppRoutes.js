import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import AuthGuard from './AuthGuard'
import Auth from './pages/Auth'
import Patients from './pages/Patients'
import Profile from './pages/Profile'
import AddPatient from './pages/AddPatient'
import { Redirect } from './pages/Redirect'
import Treatments from './pages/Treatments'
import Treatment from './pages/Treatment'

function AppRoutes() {
    return (
        <Router>
            <Routes>
                
                <Route path="/auth" element={<Auth />} />
                <Route element={<AuthGuard />}>
                    <Route path="/" element={<Redirect />} />
                    <Route path="/patients" element={<Patients />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/treatments/:patientID" element={<Treatments/>} />
                    <Route path="/addPatient" element={<AddPatient />} />
                    <Route path="patient/:patientID/treatment/:treatmentID" element={<Treatment />} />
                </Route>
            </Routes>
        </Router>

    )
}

export default AppRoutes