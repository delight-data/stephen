import React from 'react';
import { HashRouter as Router, Routes, Route, useParams } from 'react-router-dom';

import TheaterSentimentDashboard from './TheaterSentimentDashboard';
import FrancofoliesDashboard from './francofolies-sentiment-analysis';
import PlpDashboard from './plp-dashboard';
import franceGalop from './franceGalop';
import CircusDashboard from './Circus Dashboard';
import ldlcDashboard from './ldlc.tsx'; 

// Fonction pour charger dynamiquement un dashboard
const DashboardLoader = () => {
  const { dashboardId } = useParams();

  // Mapping des fichiers de dashboard
  const dashboards: { [key: string]: React.FC } = {
    "renaissance-c52s9g": TheaterSentimentDashboard,
    "francofolies-dh3qf7": FrancofoliesDashboard,
    "plp-b91lc": PlpDashboard,
    "fg-a7f6h": franceGalop,
    "gruss-p2n8v": CircusDashboard,
    "ldlc-h3p8rt": ldlcDashboard,
    // Ajouter d'autres dashboards ici : "client2": Client2Dashboard,
  };
  const SelectedDashboard = dashboards[dashboardId];

  return (
    <div className="min-h-screen bg-gray-100">
      {SelectedDashboard ? <SelectedDashboard /> : <h1>Dashboard non trouvé</h1>}
    </div>
  );
};


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Désolé, dashboard introuvable</h1>} />
        <Route path="/dashboard/:dashboardId" element={<DashboardLoader />} />
      </Routes>
    </Router>
  );
}


export default App;