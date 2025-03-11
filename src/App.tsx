// import React from 'react';
//import { HashRouter as Router, Routes, Route, useParams } from 'react-router-dom';

// import TheaterSentimentDashboard from './TheaterSentimentDashboard';
// import FrancofoliesDashboard from './francofolies-sentiment-analysis';
// import PlpDashboard from './plp-dashboard';

// const GOOGLE_DRIVE_FOLDER_ID = "1APJ4ZZvk5o249RLcTjJD3XalqlLnb3zv";
// const API_KEY = "AIzaSyBv7y8OtHNbXhOkPMc76_vJpFKnXLMQIhI";

// // Fonction pour charger dynamiquement un dashboard
// const DashboardLoader = () => {
//   const { dashboardId } = useParams();

//   // Mapping des fichiers de dashboard
//   const dashboards: { [key: string]: React.FC } = {
//     "renaissance-c52s9g": TheaterSentimentDashboard,
//     "francofolies-dh3qf7": FrancofoliesDashboard,
//     "plp-b91lc": PlpDashboard,
//     // Ajouter d'autres dashboards ici : "client2": Client2Dashboard,
//   };
//   const SelectedDashboard = dashboards[dashboardId];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {SelectedDashboard ? <SelectedDashboard /> : <h1>Dashboard non trouvé</h1>}
//     </div>
//   );
// };






// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import * as Babel from "@babel/standalone";
// import React from "react";


// const GOOGLE_DRIVE_FOLDER_ID = "1APJ4ZZvk5o249RLcTjJD3XalqlLnb3zv";
// const API_KEY = "AIzaSyBv7y8OtHNbXhOkPMc76_vJpFKnXLMQIhI";

// const DashboardLoader = () => {
//   const { dashboardId } = useParams();
//   const [DashboardComponent, setDashboardComponent] = useState<React.FC | null>(null);

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       try {
//         const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${GOOGLE_DRIVE_FOLDER_ID}'+in+parents&key=${API_KEY}`);
//         const data = await response.json();
//         console.log("Fichiers disponibles :", data.files);
//         console.log("🔍 Nom du dashboard recherché :", `${dashboardId}.tsx`);


//         const file = data.files.find((f: any) => f.name === `${dashboardId}.tsx`);
//         if (!file) {
//           console.error("Dashboard introuvable");
//           return;
//         }

//         Télécharger le fichier TypeScript
//         const fileResponse = await fetch(`https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&key=${API_KEY}`);
//         const code = await fileResponse.text();
//         console.log("📜 Code récupéré :", code.substring(0, 200), "...");

//         Transformer TypeScript en JavaScript exécutable avec Babel
//         const transpiledCode = Babel.transform(code, {
//           presets: ["react", "typescript"],
//         }).code;

//         Créer un composant React dynamiquement
//         const Component = new Function("React", `return ${transpiledCode}`)(React);
//         setDashboardComponent(() => Component);
//       } catch (error) {
//         console.error("Erreur de chargement :", error);
//       }
//     };

//     fetchDashboard();
//   }, [dashboardId]);

//   if (!DashboardComponent) return <h1>Chargement...</h1>;

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <DashboardComponent />
//     </div>
//   );
// };

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLoader from "./DashboardLoader"; // 🔥 Importation du composant séparé

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Bienvenue, sélectionnez un dashboard</h1>} />
        <Route path="/dashboard/:dashboardId" element={<DashboardLoader />} />
      </Routes>
    </Router>
  );
}

export default App;
