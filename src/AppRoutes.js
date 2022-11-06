import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import AuthGuard from './AuthGuard'
import Auth from './pages/Auth'
import Patients from './pages/Patients'

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/auth" element={<Auth />} />
                <Route element={<AuthGuard />}>
                    <Route path="/patients" element={<Patients />} />
                </Route>
            </Routes>
        </Router>

    )
}

export default AppRoutes