import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Babel from "@babel/standalone";
import React from "react";

const GOOGLE_DRIVE_FOLDER_ID = "1APJ4ZZvk5o249RLcTjJD3XalqlLnb3zv";
const API_KEY = "AIzaSyBv7y8OtHNbXhOkPMc76_vJpFKnXLMQIhI";

const DashboardLoader = () => {
  const { dashboardId } = useParams();
  const [DashboardComponent, setDashboardComponent] = useState<React.FC | null>(null);

  useEffect(() => {
    console.log("🔍 dashboardId récupéré :", dashboardId);
    console.log("🔗 URL actuelle :", window.location.href);

    if (!dashboardId) {
      console.error("❌ Aucun dashboardId détecté.");
      return;
    }

    const fetchDashboard = async () => {
      try {
        console.log("📡 Récupération de la liste des fichiers...");

        const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${GOOGLE_DRIVE_FOLDER_ID}'+in+parents&key=${API_KEY}`);
        const data = await response.json();
        console.log("📂 Fichiers disponibles :", data.files);

        const file = data.files.find((f: any) => f.name.trim().toLowerCase() === `${dashboardId}.tsx`.toLowerCase());
        if (!file) {
          console.error("❌ Dashboard introuvable :", dashboardId);
          return;
        }
        
        console.log("📥 Téléchargement du fichier :", file.name);
        const fileResponse = await fetch(`https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&key=${API_KEY}`);
        const code = await fileResponse.text();
        console.log("📜 Code récupéré :", code.substring(0, 200), "...");

        console.log("⚙️ Compilation avec Babel...");
        const transpiledCode = Babel.transform(code, { presets: ["react", "typescript"] }).code;

        console.log("🚀 Exécution du code React...");
        const Component = new Function("React", `return ${transpiledCode}`)(React);
        setDashboardComponent(() => Component);
      } catch (error) {
        console.error("❌ Erreur de chargement :", error);
      }
    };

    fetchDashboard();
  }, [dashboardId]);

  if (!DashboardComponent) return <h1>Chargement...</h1>;

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardComponent />
    </div>
  );
};

export default DashboardLoader;
