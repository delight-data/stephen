import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

import TheaterSentimentDashboard from './TheaterSentimentDashboard';
import FrancofoliesDashboard from './francofolies-sentiment-analysis';

// Fonction pour charger dynamiquement un dashboard
const DashboardLoader = () => {
  const { dashboardId } = useParams();

  // Mapping des fichiers de dashboard
  const dashboards: { [key: string]: React.FC } = {
    "theater-sentiment": TheaterSentimentDashboard,
    "francofolies": FrancofoliesDashboard,
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