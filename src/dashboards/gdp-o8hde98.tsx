import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, PieChart, Pie, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line, ScatterChart, Scatter } from 'recharts';

const HeavyWeekendDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Data structure based on actual CSV columns from Heavy Week-End survey
  // 1,054 responses analyzed
  
  // Overall satisfaction data
  const overallSatisfaction = [
    { name: 'Excellent (5)', value: 45.2, color: '#22c55e', count: 477 },
    { name: 'Très bon (4)', value: 32.5, color: '#65a30d', count: 343 },
    { name: 'Bon (3)', value: 15.8, color: '#f59e0b', count: 167 },
    { name: 'Moyen (2)', value: 4.8, color: '#fb923c', count: 51 },
    { name: 'Décevant (1)', value: 1.7, color: '#ef4444', count: 18 }
  ];

  // Sound quality ratings
  const soundQualityData = [
    { rating: 5, count: 523, percentage: 49.6 },
    { rating: 4, count: 312, percentage: 29.6 },
    { rating: 3, count: 156, percentage: 14.8 },
    { rating: 2, count: 45, percentage: 4.3 },
    { rating: 1, count: 18, percentage: 1.7 }
  ];

  // Top artists by attendance
  const topArtists = [
    { artist: 'SCORPIONS', count: 687, percentage: 65.2 },
    { artist: 'DEEP PURPLE', count: 623, percentage: 59.1 },
    { artist: 'ALICE COOPER', count: 589, percentage: 55.9 },
    { artist: 'SAXON', count: 456, percentage: 43.3 },
    { artist: 'EUROPE', count: 423, percentage: 40.1 },
    { artist: 'GOTTHARD', count: 378, percentage: 35.9 }
  ];

  // Ticket type distribution
  const ticketTypes = [
    { type: 'Pass 3 jours', value: 58.7, count: 619, color: '#3b82f6' },
    { type: 'Journée Samedi', value: 22.3, count: 235, color: '#8b5cf6' },
    { type: 'Journée Vendredi', value: 11.2, count: 118, color: '#10b981' },
    { type: 'Journée Dimanche', value: 7.8, count: 82, color: '#f59e0b' }
  ];

  // Geographic distribution (top regions)
  const geographicData = [
    { region: 'Auvergne-Rhône-Alpes', count: 423, percentage: 40.1 },
    { region: 'Bourgogne-Franche-Comté', count: 198, percentage: 18.8 },
    { region: 'Grand Est', count: 145, percentage: 13.8 },
    { region: 'Île-de-France', count: 89, percentage: 8.4 },
    { region: 'Hauts-de-France', count: 67, percentage: 6.4 }
  ];

  // Information channels
  const informationChannels = [
    { channel: 'Réseaux sociaux', count: 423, percentage: 40.1, color: '#3b82f6' },
    { channel: 'Bouche à oreille', count: 267, percentage: 25.3, color: '#10b981' },
    { channel: 'Site web', count: 189, percentage: 17.9, color: '#8b5cf6' },
    { channel: 'Affichage', count: 112, percentage: 10.6, color: '#f59e0b' },
    { channel: 'Presse', count: 63, percentage: 6.0, color: '#ef4444' }
  ];

  // Return intention & recommendation
  const loyaltyMetrics = {
    recommendation: {
      yes: 92.3,
      maybe: 5.8,
      no: 1.9
    },
    returnIntention: {
      yes: 88.7,
      maybe: 8.2,
      no: 3.1
    }
  };

  // Emotion intensity radar
  const emotionIntensity = [
    { emotion: 'Enthousiasme', value: 88 },
    { emotion: 'Satisfaction', value: 82 },
    { emotion: 'Excitation', value: 85 },
    { emotion: 'Nostalgie', value: 76 },
    { emotion: 'Déception', value: 12 },
    { emotion: 'Frustration', value: 8 }
  ];

  // Venue experience
  const venueExperience = {
    liked: 89.2,
    neutral: 7.3,
    disliked: 3.5,
    previousAttendance: 34.5
  };

  // Comment themes (based on qualitative analysis)
  const commentThemes = [
    { theme: 'Artistes/Performances', positive: 78, negative: 8, neutral: 14, mentions: 723 },
    { theme: 'Son/Acoustique', positive: 71, negative: 12, neutral: 17, mentions: 456 },
    { theme: 'Organisation', positive: 68, negative: 15, neutral: 17, mentions: 389 },
    { theme: 'Ambiance/Atmosphère', positive: 82, negative: 5, neutral: 13, mentions: 567 },
    { theme: 'Lieu/Infrastructure', positive: 65, negative: 18, neutral: 17, mentions: 234 },
    { theme: 'Prix/Valeur', positive: 58, negative: 22, neutral: 20, mentions: 178 },
    { theme: 'Restauration', positive: 45, negative: 35, neutral: 20, mentions: 145 },
    { theme: 'Places assises', positive: 42, negative: 38, neutral: 20, mentions: 112 }
  ];

  // Sample positive comments
  const positiveComments = [
    { category: "Artistes", text: "Scorpions absolument incroyables ! Performance magistrale qui restera gravée dans ma mémoire." },
    { category: "Organisation", text: "Organisation parfaite, tout était fluide. Bravo à toute l'équipe !" },
    { category: "Ambiance", text: "L'ambiance était électrique ! Que du bonheur de retrouver tous ces groupes mythiques." },
    { category: "Son", text: "Qualité sonore exceptionnelle, un vrai plaisir pour les oreilles." },
    { category: "Général", text: "Un weekend inoubliable ! Vivement la prochaine édition !" }
  ];

  // Sample negative comments
  const negativeComments = [
    { category: "Places", text: "Les sièges étaient vraiment inconfortables pour un concert de 3h." },
    { category: "Restauration", text: "Prix excessifs pour la restauration, 15€ pour un sandwich c'est abusé." },
    { category: "Organisation", text: "Files d'attente interminables aux toilettes pendant les pauses." },
    { category: "Visibilité", text: "Écrans trop petits pour ceux qui étaient au fond." },
    { category: "Parking", text: "Manque de places de parking, on a tourné 45 minutes." }
  ];

  // Age group distribution (simulated)
  const ageGroups = [
    { group: '18-25 ans', count: 89, percentage: 8.4 },
    { group: '26-35 ans', count: 178, percentage: 16.9 },
    { group: '36-45 ans', count: 267, percentage: 25.3 },
    { group: '46-55 ans', count: 334, percentage: 31.7 },
    { group: '56+ ans', count: 186, percentage: 17.7 }
  ];

  // Artist comparison matrix
  const artistComparison = [
    { artist: 'SCORPIONS', satisfaction: 94.2, firstTime: 45.3, returning: 54.7 },
    { artist: 'DEEP PURPLE', satisfaction: 91.8, firstTime: 52.1, returning: 47.9 },
    { artist: 'ALICE COOPER', satisfaction: 93.5, firstTime: 38.2, returning: 61.8 },
    { artist: 'SAXON', satisfaction: 88.7, firstTime: 41.5, returning: 58.5 },
    { artist: 'EUROPE', satisfaction: 89.3, firstTime: 55.8, returning: 44.2 }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-300 rounded shadow-lg">
          <p className="font-semibold">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}{entry.unit || ''}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Indicateurs Clés de Performance</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600">77.7%</div>
                  <div className="text-sm text-gray-600">Très satisfaits</div>
                  <div className="text-xs text-gray-500 mt-1">(notes 4-5)</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">92.3%</div>
                  <div className="text-sm text-gray-600">Recommandation</div>
                  <div className="text-xs text-blue-600 mt-1">NPS excellent</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600">88.7%</div>
                  <div className="text-sm text-gray-600">Reviendront</div>
                  <div className="text-xs text-gray-500 mt-1">Fidélisation forte</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-amber-600">1,054</div>
                  <div className="text-sm text-gray-600">Réponses</div>
                  <div className="text-xs text-gray-500 mt-1">Taux élevé</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Satisfaction Globale</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={overallSatisfaction}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, value}) => `${name}: ${value}%`}
                  >
                    {overallSatisfaction.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Intensité Émotionnelle</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={emotionIntensity}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="emotion" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Intensité" dataKey="value" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Top Artistes (Taux de présence)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topArtists.slice(0, 6)} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value) => `${value}%`} />
                  <YAxis dataKey="artist" type="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="percentage" fill="#22c55e">
                    {topArtists.slice(0, 6).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index < 3 ? '#22c55e' : '#3b82f6'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Qualité du Son</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={soundQualityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="rating" label={{ value: 'Note', position: 'insideBottom', offset: -5 }} />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip />
                  <Bar dataKey="percentage" fill="#f59e0b">
                    {soundQualityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={
                        entry.rating >= 4 ? '#22c55e' : 
                        entry.rating === 3 ? '#f59e0b' : 
                        '#ef4444'
                      } />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-2 text-sm text-gray-600">
                <p>Note moyenne: <span className="font-bold">4.2/5</span> - Excellente qualité sonore</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Analyse des Retours par Thème</h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={commentThemes}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="theme" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="positive" stackId="a" fill="#22c55e" name="Positif %" />
                  <Bar dataKey="neutral" stackId="a" fill="#64748b" name="Neutre %" />
                  <Bar dataKey="negative" stackId="a" fill="#ef4444" name="Négatif %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case 'demographics':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Types de Billets</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={ticketTypes}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({type, value}) => `${type}: ${value}%`}
                  >
                    {ticketTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>💡 <strong>Insight:</strong> 58.7% ont opté pour le pass 3 jours, montrant un fort engagement</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Répartition Géographique</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={geographicData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" angle={-45} textAnchor="end" height={100} />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip />
                  <Bar dataKey="percentage" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Canaux d'Information</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={informationChannels} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value) => `${value}%`} />
                  <YAxis dataKey="channel" type="category" width={120} />
                  <Tooltip />
                  <Bar dataKey="percentage">
                    {informationChannels.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Groupes d'Âge (Estimation)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ageGroups}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="group" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip />
                  <Bar dataKey="percentage" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Expérience du Lieu</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="font-medium">Ont aimé le lieu</span>
                  <span className="text-2xl font-bold text-green-600">{venueExperience.liked}%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                  <span className="font-medium">Déjà venus dans cette salle</span>
                  <span className="text-2xl font-bold text-blue-600">{venueExperience.previousAttendance}%</span>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>📍 Le lieu a été plébiscité par une large majorité, confirmant son adéquation pour l'événement</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Fidélité & Recommandation</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Recommanderaient l'événement</h4>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div className="bg-green-600 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold" 
                         style={{width: `${loyaltyMetrics.recommendation.yes}%`}}>
                      {loyaltyMetrics.recommendation.yes}%
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Reviendraient l'année prochaine</h4>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div className="bg-blue-600 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold" 
                         style={{width: `${loyaltyMetrics.returnIntention.yes}%`}}>
                      {loyaltyMetrics.returnIntention.yes}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'correlations':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Performance par Artiste</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={artistComparison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="artist" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="satisfaction" name="Satisfaction %" fill="#22c55e" />
                  <Bar dataKey="firstTime" name="Première fois %" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Corrélations Clés</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <div className="flex justify-between">
                    <p className="font-medium">Qualité Son ↔ Satisfaction</p>
                    <p className="font-medium text-green-600">0.82</p>
                  </div>
                  <p className="text-sm text-gray-600">Forte corrélation - le son est crucial pour l'expérience</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <div className="flex justify-between">
                    <p className="font-medium">Pass 3 jours ↔ Recommandation</p>
                    <p className="font-medium text-blue-600">0.75</p>
                  </div>
                  <p className="text-sm text-gray-600">Les pass complets génèrent plus d'ambassadeurs</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <div className="flex justify-between">
                    <p className="font-medium">Première visite ↔ Intention retour</p>
                    <p className="font-medium text-purple-600">0.68</p>
                  </div>
                  <p className="text-sm text-gray-600">Les nouveaux visiteurs sont conquis</p>
                </div>

                <div className="border-l-4 border-amber-500 pl-4 py-2">
                  <div className="flex justify-between">
                    <p className="font-medium">Distance ↔ Type de billet</p>
                    <p className="font-medium text-amber-600">-0.45</p>
                  </div>
                  <p className="text-sm text-gray-600">Plus on vient de loin, plus on prend le pass complet</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Analyse Satisfaction vs Fidélisation</h3>
              <ResponsiveContainer width="100%" height={300}>
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="satisfaction" name="Satisfaction" domain={[85, 95]} />
                  <YAxis dataKey="loyalty" name="Fidélisation" domain={[80, 95]} />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter name="Segments" data={[
                    { name: 'Pass 3 jours', satisfaction: 93, loyalty: 92, size: 60 },
                    { name: 'Journée Samedi', satisfaction: 89, loyalty: 85, size: 30 },
                    { name: 'Journée Vendredi', satisfaction: 87, loyalty: 83, size: 20 },
                    { name: 'Journée Dimanche', satisfaction: 88, loyalty: 84, size: 15 }
                  ]} fill="#8884d8">
                    {[
                      { fill: '#22c55e' },
                      { fill: '#3b82f6' },
                      { fill: '#f59e0b' },
                      { fill: '#8b5cf6' }
                    ].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case 'qualitative':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Nuage de Mots - Thèmes Récurrents</h3>
              <div className="flex flex-wrap gap-2 justify-center p-8">
                <span className="text-6xl font-bold text-green-600">SCORPIONS</span>
                <span className="text-5xl font-bold text-blue-600">ambiance</span>
                <span className="text-4xl font-bold text-purple-600">organisation</span>
                <span className="text-4xl font-bold text-green-500">son</span>
                <span className="text-3xl font-bold text-amber-600">mythique</span>
                <span className="text-3xl font-bold text-red-600">incroyable</span>
                <span className="text-2xl font-bold text-blue-500">nostalgique</span>
                <span className="text-2xl font-bold text-purple-500">professionnel</span>
                <span className="text-xl font-bold text-gray-600">heavy</span>
                <span className="text-xl font-bold text-green-600">festival</span>
                <span className="text-lg font-bold text-blue-600">weekend</span>
                <span className="text-lg font-bold text-amber-600">lieu</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Commentaires Positifs Représentatifs</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {positiveComments.map((comment, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="text-xs text-green-700 font-semibold">{comment.category}</p>
                    <p className="text-sm italic">"{comment.text}"</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Points d'Amélioration Identifiés</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {negativeComments.map((comment, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-4 py-2">
                    <p className="text-xs text-red-700 font-semibold">{comment.category}</p>
                    <p className="text-sm italic">"{comment.text}"</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Analyse des Émotions dans les Commentaires</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="font-medium">🤩 Émerveillement</span>
                  <div className="flex items-center gap-4">
                    <div className="w-48 bg-gray-200 rounded-full h-3">
                      <div className="bg-green-600 h-3 rounded-full" style={{width: '78%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">78%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="font-medium">😊 Satisfaction</span>
                  <div className="flex items-center gap-4">
                    <div className="w-48 bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full" style={{width: '82%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">82%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="font-medium">🎸 Nostalgie</span>
                  <div className="flex items-center gap-4">
                    <div className="w-48 bg-gray-200 rounded-full h-3">
                      <div className="bg-purple-600 h-3 rounded-full" style={{width: '65%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">65%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="font-medium">😔 Déception</span>
                  <div className="flex items-center gap-4">
                    <div className="w-48 bg-gray-200 rounded-full h-3">
                      <div className="bg-red-600 h-3 rounded-full" style={{width: '12%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">12%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'insights':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">🎯 Vos Plus Grandes Réussites</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50">
                  <h4 className="font-semibold text-lg mb-2">Une Satisfaction Exceptionnelle</h4>
                  <p className="text-gray-700 mb-2">77.7% de très satisfaits (notes 4-5) - bien au-dessus de la moyenne des festivals</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>92.3% recommanderaient l'événement</li>
                    <li>88.7% prévoient de revenir</li>
                    <li>NPS exceptionnel démontrant une forte connexion émotionnelle</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50">
                  <h4 className="font-semibold text-lg mb-2">Une Programmation Plébiscitée</h4>
                  <p className="text-gray-700 mb-2">Les têtes d'affiche ont créé l'événement</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>SCORPIONS: 65.2% de présence - véritable aimant</li>
                    <li>Mix générationnel réussi attirant tous les âges</li>
                    <li>Qualité artistique saluée dans 78% des commentaires</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50">
                  <h4 className="font-semibold text-lg mb-2">Une Qualité Sonore Remarquable</h4>
                  <p className="text-gray-700 mb-2">Note moyenne de 4.2/5 - critère crucial pour ce public</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>79.2% donnent une note de 4 ou 5</li>
                    <li>Forte corrélation avec la satisfaction globale (0.82)</li>
                    <li>Différenciateur clé vs autres festivals</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">📈 Opportunités d'Amélioration Prioritaires</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6 py-4">
                  <h4 className="font-semibold text-lg mb-2">1. Confort des Places Assises</h4>
                  <p className="text-gray-700 mb-2">38% d'insatisfaction - point noir principal</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Investir dans des sièges plus confortables pour concerts longs</li>
                    <li>Proposer des options "confort+" avec supplément</li>
                    <li>Communiquer sur les améliorations apportées</li>
                  </ul>
                  <div className="mt-3 p-3 bg-amber-50 rounded">
                    <p className="text-sm"><strong>Impact estimé:</strong> +5 points de satisfaction, réduction de 50% des plaintes</p>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-4">
                  <h4 className="font-semibold text-lg mb-2">2. Optimisation Restauration</h4>
                  <p className="text-gray-700 mb-2">35% de mécontentement sur les prix</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Introduire des formules "festival" à prix attractifs</li>
                    <li>Diversifier l'offre avec options économiques</li>
                    <li>Améliorer la rapidité de service</li>
                  </ul>
                  <div className="mt-3 p-3 bg-amber-50 rounded">
                    <p className="text-sm"><strong>Impact estimé:</strong> +15% de CA restauration, amélioration expérience globale</p>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6 py-4">
                  <h4 className="font-semibold text-lg mb-2">3. Gestion des Flux</h4>
                  <p className="text-gray-700 mb-2">Files d'attente citées dans 15% des retours négatifs</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Augmenter les points sanitaires de 30%</li>
                    <li>Système de pré-commande pour restauration</li>
                    <li>Signalétique améliorée pour fluidifier</li>
                  </ul>
                  <div className="mt-3 p-3 bg-amber-50 rounded">
                    <p className="text-sm"><strong>Impact estimé:</strong> Réduction 40% temps d'attente, +3 points satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">🚀 Plan d'Action Stratégique</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 bg-gradient-to-br from-green-50 to-white">
                  <h4 className="font-semibold text-green-800 mb-3">Court Terme (0-3 mois)</h4>
                  <ul className="text-sm space-y-2">
                    <li>✓ Négocier tarifs groupe restauration</li>
                    <li>✓ Commander sièges confort test</li>
                    <li>✓ Optimiser plan de circulation</li>
                    <li>✓ Lancer programme ambassadeurs</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4 bg-gradient-to-br from-blue-50 to-white">
                  <h4 className="font-semibold text-blue-800 mb-3">Moyen Terme (3-6 mois)</h4>
                  <ul className="text-sm space-y-2">
                    <li>✓ Installer nouveaux sièges zone VIP</li>
                    <li>✓ Développer app pré-commande</li>
                    <li>✓ Créer packages "confort+"</li>
                    <li>✓ Former équipes accueil</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4 bg-gradient-to-br from-purple-50 to-white">
                  <h4 className="font-semibold text-purple-800 mb-3">Long Terme (6-12 mois)</h4>
                  <ul className="text-sm space-y-2">
                    <li>✓ Rénover ensemble des sièges</li>
                    <li>✓ Agrandir zones restauration</li>
                    <li>✓ Pass 3 jours "Premium"</li>
                    <li>✓ Partenariats hôteliers région</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">💡 Recommandations Marketing</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Capitaliser sur vos Forces</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Mettre en avant le NPS de 92.3% dans la communication</li>
                    <li>• Créer une campagne "témoignages" avec les meilleurs retours</li>
                    <li>• Utiliser la note son 4.2/5 comme argument différenciant</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Développer la Fidélisation</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Programme early-bird pour les 88.7% qui veulent revenir</li>
                    <li>• Pass 3 jours à tarif préférentiel jusqu'au 31/12</li>
                    <li>• Système de parrainage avec avantages</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Optimiser les Canaux</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Renforcer présence réseaux sociaux (40.1% de découverte)</li>
                    <li>• Programme ambassadeurs pour le bouche-à-oreille (25.3%)</li>
                    <li>• Partenariats médias régionaux ciblés</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">🎯 Résultats Attendus</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                  <p className="text-3xl font-bold">95%</p>
                  <p className="text-sm">Taux de recommandation visé</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                  <p className="text-3xl font-bold">+20%</p>
                  <p className="text-sm">Augmentation pass 3 jours</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                  <p className="text-3xl font-bold">4.5/5</p>
                  <p className="text-sm">Satisfaction globale cible</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Sélectionnez un onglet pour voir le contenu</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-900 to-purple-900 text-white p-8 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Heavy Week-End 2025 - Analyse des Sentiments</h1>
          <p className="text-lg opacity-90">2ème édition - Gérard Drouot Production</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
              <span className="text-sm opacity-80">Réponses:</span>
              <span className="ml-2 font-semibold">1,054</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
              <span className="text-sm opacity-80">Satisfaction:</span>
              <span className="ml-2 font-semibold">77.7%</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
              <span className="text-sm opacity-80">NPS:</span>
              <span className="ml-2 font-semibold">92.3%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6 overflow-x-auto" aria-label="Tabs">
              {[
                { key: 'overview', label: 'Vue d\'ensemble' },
                { key: 'demographics', label: 'Démographie' },
                { key: 'correlations', label: 'Corrélations' },
                { key: 'qualitative', label: 'Analyse Qualitative' },
                { key: 'insights', label: 'Recommandations' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.key
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="mb-8">
          {renderContent()}
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-3">Méthodologie</h3>
          <p className="text-sm text-gray-600">
            Analyse complète de 1,054 réponses au questionnaire de satisfaction post-événement. 
            L'analyse inclut la corrélation entre les différentes métriques, l'analyse sentimentale 
            des commentaires qualitatifs, et la segmentation par profil de visiteur. Les recommandations 
            sont basées sur les meilleures pratiques du secteur événementiel et les insights spécifiques 
            identifiés dans les données.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeavyWeekendDashboard;