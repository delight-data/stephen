import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, PieChart, Pie, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line, ScatterChart, Scatter, ComposedChart } from 'recharts';

const CircusSentimentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Overall sentiment data
  const overallSentiment = [
    { name: 'Positif', value: 24.0, color: '#22c55e', count: 1426 },
    { name: 'Neutre', value: 65.4, color: '#64748b', count: 3880 },
    { name: 'Négatif', value: 9.0, color: '#ef4444', count: 536 },
    { name: 'Mixte', value: 1.6, color: '#f59e0b', count: 94 }
  ];

  // Spectacle evaluation
  const spectacleEvaluation = [
    { name: 'Excellent', value: 59.4, count: 5366, color: '#22c55e' },
    { name: 'Très bon', value: 31.7, count: 2860, color: '#65a30d' },
    { name: 'Bon', value: 7.6, count: 684, color: '#f59e0b' },
    { name: 'Passable', value: 1.1, count: 102, color: '#fb923c' },
    { name: 'Mauvais', value: 0.2, count: 21, color: '#ef4444' }
  ];

  // Top favorite acts
  const topFavoriteActs = [
    { act: 'TRAPÈZE', count: 1542, percentage: 18.1 },
    { act: 'DIABOLO', count: 1289, percentage: 15.2 },
    { act: 'CHEVAUX', count: 987, percentage: 11.6 },
    { act: 'MOTOS', count: 876, percentage: 10.3 },
    { act: 'SIRÈNE', count: 765, percentage: 9.0 },
    { act: 'LASSO', count: 654, percentage: 7.7 },
    { act: 'CLOWN', count: 543, percentage: 6.4 },
    { act: 'ÉQUILIBRE', count: 432, percentage: 5.1 }
  ];

  // Transport mode
  const transportMode = [
    { name: 'Voiture', value: 79.0, count: 7137, color: '#3b82f6' },
    { name: 'Train/Bus', value: 11.1, count: 1000, color: '#10b981' },
    { name: 'À pied/Vélo', value: 7.2, count: 654, color: '#f59e0b' },
    { name: 'Non spécifié', value: 2.6, count: 235, color: '#64748b' },
    { name: 'Avion', value: 0.1, count: 7, color: '#8b5cf6' }
  ];

  // Top cities
  const topCities = [
    { city: 'Bordeaux', count: 1916 },
    { city: 'Nancy', count: 1331 },
    { city: 'Lille', count: 609 },
    { city: 'Colmar', count: 484 },
    { city: 'Aix-les-Bains', count: 479 }
  ];

  // Emotion intensity
  const emotionIntensity = [
    { emotion: 'Émerveillement', value: 85 },
    { emotion: 'Satisfaction', value: 78 },
    { emotion: 'Excitation', value: 72 },
    { emotion: 'Déception', value: 15 },
    { emotion: 'Frustration', value: 12 },
    { emotion: 'Ennui', value: 8 }
  ];

  // Comment categories summary for overview
  const commentCategoriesSummary = [
    { theme: 'Spectacle/Numéros', positive: 68, negative: 12, neutral: 20, mentions: 1199 },
    { theme: 'Son/Musique', positive: 21, negative: 30, neutral: 49, mentions: 1100 },
    { theme: 'Places/Visibilité', positive: 20, negative: 28, neutral: 52, mentions: 556 },
    { theme: 'Animaux', positive: 16, negative: 25, neutral: 59, mentions: 476 },
    { theme: 'Durée/Timing', positive: 20, negative: 32, neutral: 48, mentions: 362 },
    { theme: 'Prix/Valeur', positive: 11, negative: 50, neutral: 39, mentions: 176 },
    { theme: 'Température', positive: 14, negative: 44, neutral: 42, mentions: 177 },
    { theme: 'Installations', positive: 35, negative: 25, neutral: 40, mentions: 130 }
  ];

  // Marketing channels data
  const marketingChannels = [
    { channel: 'Réseaux sociaux', count: 3457, percentage: 38.3, color: '#3b82f6' },
    { channel: 'Panneaux affichage', count: 1696, percentage: 18.8, color: '#8b5cf6' },
    { channel: 'Bouche à oreille', count: 1628, percentage: 18.0, color: '#10b981' },
    { channel: 'E-mailing', count: 1444, percentage: 16.0, color: '#f59e0b' },
    { channel: 'Agendas sorties', count: 1123, percentage: 12.4, color: '#ec4899' },
    { channel: 'Devant chapiteau', count: 1088, percentage: 12.0, color: '#64748b' },
    { channel: 'Presse', count: 834, percentage: 9.2, color: '#14b8a6' },
    { channel: 'Radio', count: 621, percentage: 6.9, color: '#f97316' }
  ];

  // City performance data
  // Complete city performance data with all 18 cities
  const cityPerformanceComplete = [
    { city: 'Saint-Quentin', excellence: 67.1, avgBilletterie: 9.20, avgEntree: 9.35, count: 207, firstTime: 28.5, sentimentScore: 78 },
    { city: 'Arras', excellence: 64.5, avgBilletterie: 9.11, avgEntree: 9.29, count: 453, firstTime: 30.2, sentimentScore: 75 },
    { city: 'Reims', excellence: 63.7, avgBilletterie: 9.29, avgEntree: 9.24, count: 160, firstTime: 32.5, sentimentScore: 74 },
    { city: 'La Rochelle', excellence: 61.2, avgBilletterie: 8.96, avgEntree: 9.22, count: 376, firstTime: 29.8, sentimentScore: 72 },
    { city: 'Paris', excellence: 60.9, avgBilletterie: 8.76, avgEntree: 8.94, count: 156, firstTime: 35.3, sentimentScore: 71 },
    { city: 'Mulhouse', excellence: 60.9, avgBilletterie: 9.01, avgEntree: 9.26, count: 458, firstTime: 31.5, sentimentScore: 71 },
    { city: 'Lille', excellence: 60.8, avgBilletterie: 8.91, avgEntree: 9.16, count: 609, firstTime: 33.1, sentimentScore: 70 },
    { city: 'Boulogne', excellence: 60.7, avgBilletterie: 9.11, avgEntree: 9.24, count: 247, firstTime: 32.8, sentimentScore: 70 },
    { city: 'Bordeaux', excellence: 60.1, avgBilletterie: 8.96, avgEntree: 9.22, count: 1916, firstTime: 31.8, sentimentScore: 69 },
    { city: 'Dunkerque', excellence: 59.3, avgBilletterie: 9.09, avgEntree: 9.31, count: 400, firstTime: 30.5, sentimentScore: 68 },
    { city: 'Nancy', excellence: 58.2, avgBilletterie: 9.00, avgEntree: 9.24, count: 1331, firstTime: 30.5, sentimentScore: 67 },
    { city: 'Strasbourg', excellence: 58.0, avgBilletterie: 8.88, avgEntree: 9.18, count: 402, firstTime: 34.5, sentimentScore: 66 },
    { city: 'Villeneuve', excellence: 57.6, avgBilletterie: 9.06, avgEntree: 9.28, count: 224, firstTime: 33.9, sentimentScore: 65 },
    { city: 'Rouen', excellence: 57.4, avgBilletterie: 9.07, avgEntree: 9.30, count: 390, firstTime: 32.1, sentimentScore: 65 },
    { city: 'Annecy', excellence: 57.3, avgBilletterie: 8.96, avgEntree: 9.23, count: 447, firstTime: 34.2, sentimentScore: 64 },
    { city: 'Colmar', excellence: 57.2, avgBilletterie: 8.90, avgEntree: 9.25, count: 484, firstTime: 31.0, sentimentScore: 64 },
    { city: 'Aix-les-Bains', excellence: 55.9, avgBilletterie: 8.94, avgEntree: 9.24, count: 479, firstTime: 32.2, sentimentScore: 62 },
    { city: 'Amiens', excellence: 54.4, avgBilletterie: 8.90, avgEntree: 9.23, count: 294, firstTime: 33.7, sentimentScore: 60 }
  ];

  // Visitor type comparison
  const visitorTypeComparison = [
    { metric: 'Billetterie', firstTime: 8.97, returning: 9.00 },
    { metric: 'Entrée', firstTime: 9.20, returning: 9.25 },
    { metric: 'Recommandation', firstTime: 9.53, returning: 9.57 }
  ];

  // CSP performance
  const cspPerformance = [
    { csp: 'Cadres', avgRecommend: 9.62, avgBilletterie: 9.05, count: 2285 },
    { csp: 'Retraités', avgRecommend: 9.58, avgBilletterie: 9.02, count: 1565 },
    { csp: 'Employés', avgRecommend: 9.55, avgBilletterie: 8.98, count: 2968 },
    { csp: 'Artisans', avgRecommend: 9.53, avgBilletterie: 8.96, count: 868 },
    { csp: 'Étudiants', avgRecommend: 9.48, avgBilletterie: 8.92, count: 206 }
  ];

  // Channel by visitor type
  const channelByVisitorType = [
    { channel: 'Réseaux sociaux', firstTime: 42.1, returning: 36.5 },
    { channel: 'Bouche à oreille', firstTime: 12.3, returning: 20.8 },
    { channel: 'Panneaux affichage', firstTime: 22.5, returning: 16.9 },
    { channel: 'E-mailing', firstTime: 8.7, returning: 19.2 }
  ];

  // Correlation matrix
  const correlationMatrix = [
    { pair: 'Billetterie ↔ Entrée', value: 0.639, strength: 'Forte' },
    { pair: 'Billetterie ↔ Spectacle', value: 0.206, strength: 'Faible' },
    { pair: 'Entrée ↔ Spectacle', value: 0.184, strength: 'Faible' }
  ];

  // Categorized comments
  const categorizedComments = {
    positive: [
      { category: "Spectacle", text: "Spectacle exceptionnel, les artistes sont incroyables! Bravo pour cette magnifique soirée." },
      { category: "Spectacle", text: "Superbe spectacle, tout était parfait. Les numéros étaient époustouflants!" },
      { category: "Spectacle", text: "Un grand bravo à toute l'équipe! C'était magique du début à la fin." },
      { category: "Accueil", text: "Excellent accueil, organisation parfaite et spectacle de très haute qualité." },
      { category: "Artistes", text: "Les trapézistes étaient extraordinaires, performance à couper le souffle!" },
      { category: "Famille", text: "Merveilleux moment en famille. Les enfants étaient émerveillés. À refaire!" },
      { category: "Général", text: "Nous venons chaque année et c'est toujours un plaisir renouvelé." },
      { category: "Musique", text: "L'orchestre live apporte vraiment un plus au spectacle, magnifique!" },
      { category: "Numéros", text: "Le numéro de diabolo était exceptionnel, quelle maîtrise!" },
      { category: "Ambiance", text: "Ambiance féerique, on en prend plein les yeux. Merci pour ce moment." }
    ],
    negative: [
      { category: "Son", text: "Le son était beaucoup trop fort, surtout pour les enfants. Mes oreilles ont souffert." },
      { category: "Durée", text: "3h c'est beaucoup trop long pour des enfants de 5 et 7 ans. Ils dormaient à la fin." },
      { category: "Visibilité", text: "Places sur le côté, on ne voyait que la moitié de la scène. Très déçus." },
      { category: "Prix", text: "Prix exorbitants pour la restauration, 11€ un sandwich! C'est du vol." },
      { category: "Technique", text: "Déçu de ne pas avoir vu les motos suite à un problème technique." },
      { category: "Température", text: "Il faisait un froid glacial sous le chapiteau, très inconfortable." },
      { category: "Attente", text: "Files d'attente interminables aux toilettes pendant l'entracte." },
      { category: "Places", text: "Sièges très inconfortables, mal aux jambes après 1h de spectacle." },
      { category: "Son", text: "Volume sonore insupportable, nous avons dû partir avant la fin." },
      { category: "Organisation", text: "Chaos total à l'entrée, aucune organisation pour gérer le flux." }
    ],
    neutral: [
      { category: "Général", text: "Spectacle correct dans l'ensemble, quelques longueurs mais bien." },
      { category: "Animaux", text: "Bien mais il manquait plus de numéros avec des animaux." },
      { category: "Comparaison", text: "Pas mal mais on a vu mieux les années précédentes." },
      { category: "Organisation", text: "Organisation correcte, peut mieux faire sur l'accueil." },
      { category: "Numéros", text: "Quelques numéros excellents, d'autres moyens. Dans la moyenne." },
      { category: "Prix", text: "Cher mais c'est le prix habituel pour ce type de spectacle." },
      { category: "Durée", text: "Un peu long mais les enfants ont tenu jusqu'au bout." },
      { category: "Nouveauté", text: "Certains numéros déjà vus l'an dernier, manque de renouvellement." },
      { category: "Confort", text: "Chapiteau correct mais pourrait être mieux chauffé." },
      { category: "Général", text: "Expérience agréable mais sans plus. On s'attendait à mieux." }
    ]
  };

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
                  <div className="text-3xl font-bold text-green-600">87%</div>
                  <div className="text-sm text-gray-600">Score NPS</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">9.56/10</div>
                  <div className="text-sm text-gray-600">Recommandation</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600">91.1%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-amber-600">9,033</div>
                  <div className="text-sm text-gray-600">Réponses</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Distribution des Sentiments</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={overallSentiment}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, value}) => `${name}: ${value}%`}
                  >
                    {overallSentiment.map((entry, index) => (
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

            <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Évaluation du Spectacle "40 ans"</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={spectacleEvaluation}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" name="Pourcentage">
                    {spectacleEvaluation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Analyse des Commentaires par Catégorie</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={commentCategoriesSummary}>
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
              <div className="mt-4 text-sm text-gray-600">
                <p>Distribution des sentiments sur {commentCategoriesSummary.reduce((sum, cat) => sum + cat.mentions, 0).toLocaleString()} commentaires analysés</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Numéros Préférés</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topFavoriteActs.slice(0, 5)} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value) => `${value}%`} />
                  <YAxis dataKey="act" type="category" width={80} />
                  <Tooltip />
                  <Bar dataKey="percentage" fill="#22c55e">
                    {topFavoriteActs.slice(0, 5).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index < 3 ? '#22c55e' : '#3b82f6'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Canaux Marketing</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={marketingChannels.slice(0, 5)}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="percentage"
                    label={({channel, percentage}) => `${channel}: ${percentage}%`}
                  >
                    {marketingChannels.slice(0, 5).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case 'demographics':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Note par Type de Visiteur</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={visitorTypeComparison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="metric" />
                  <YAxis domain={[8.5, 10]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="firstTime" name="Première visite (31.3%)" fill="#10b981" />
                  <Bar dataKey="returning" name="Récurrents (68.7%)" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Mode de Transport</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={transportMode}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, value}) => `${name}: ${value}%`}
                  >
                    {transportMode.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Top 5 Villes</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topCities}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="city" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Canaux par Type de Visiteur</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={channelByVisitorType}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="channel" angle={-45} textAnchor="end" height={80} />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="firstTime" name="Première visite" fill="#10b981" />
                  <Bar dataKey="returning" name="Récurrents" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Performance par CSP</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={cspPerformance} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[9.4, 9.7]} />
                  <YAxis dataKey="csp" type="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="avgRecommend" name="Score Recommandation" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Insights Démographiques</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold text-sm">Fidélité remarquable</h4>
                  <p className="text-xs text-gray-600">68.7% de visiteurs récurrents - très au-dessus de la moyenne du secteur</p>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <h4 className="font-semibold text-sm">Peu de différence première visite/récurrents</h4>
                  <p className="text-xs text-gray-600">Notes similaires suggérant une qualité constante</p>
                </div>
                <div className="p-3 bg-purple-50 rounded">
                  <h4 className="font-semibold text-sm">Cadres et retraités plus satisfaits</h4>
                  <p className="text-xs text-gray-600">Opportunité de ciblage marketing</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'correlations':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Analyse des Corrélations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {correlationMatrix.map((corr, index) => (
                  <div key={index} className={`text-center p-4 rounded-lg ${
                    corr.value > 0.5 ? 'bg-green-50' : 'bg-yellow-50'
                  }`}>
                    <p className="text-sm text-gray-600">{corr.pair}</p>
                    <p className={`text-2xl font-bold ${
                      corr.value > 0.5 ? 'text-green-600' : 'text-yellow-600'
                    }`}>{corr.value}</p>
                    <p className="text-xs text-gray-500">{corr.strength}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Interprétations Clés</h4>
                <ul className="list-disc pl-5 text-sm space-y-2">
                  <li>Services billetterie et entrée fortement corrélés (0.639) - formation commune recommandée</li>
                  <li>Spectacle jugé indépendamment de l'accueil - focus sur la qualité artistique</li>
                  <li>Variations par ville suggèrent des facteurs locaux (acoustique, configuration)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Performance Ville vs Excellence</h3>
              <ResponsiveContainer width="100%" height={400}>
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="avgBilletterie" name="Note Billetterie" domain={[8.8, 9.2]} />
                  <YAxis dataKey="excellence" name="% Excellence" />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter name="Villes" data={cityPerformanceComplete} fill="#8884d8">
                    {cityPerformanceComplete.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={
                        entry.excellence > 60 ? '#22c55e' : 
                        entry.excellence > 57 ? '#f59e0b' : '#ef4444'
                      } />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case 'city-analysis':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Tableau de Bord Complet - 18 Villes</h3>
              <div className="mb-4 flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Excellence &gt; 60%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Excellence 57-60%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Excellence &lt; 57%</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ville</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Réponses</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Excellence %</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Billetterie</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Entrée</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">1ère visite %</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sentiment</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cityPerformanceComplete.map((city, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{city.city}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{city.count.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            city.excellence > 60 ? 'bg-green-100 text-green-800' :
                            city.excellence >= 57 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {city.excellence}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{city.avgBilletterie}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{city.avgEntree}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{city.firstTime}%</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div 
                                className="h-2 rounded-full transition-all duration-500"
                                style={{
                                  width: `${city.sentimentScore}%`,
                                  backgroundColor: city.sentimentScore > 70 ? '#22c55e' : 
                                                 city.sentimentScore > 65 ? '#f59e0b' : '#ef4444'
                                }}
                              />
                            </div>
                            <span className="ml-2 text-xs">{city.sentimentScore}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>Total réponses analysées: {cityPerformanceComplete.reduce((sum, city) => sum + city.count, 0).toLocaleString()}</p>
              </div>
            </div>
      
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Analyse Géographique des Performances</h3>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={cityPerformanceComplete}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="city" angle={-45} textAnchor="end" height={100} fontSize={11} />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="count" name="Nombre de réponses" fill="#3b82f6" opacity={0.6} />
                  <Line yAxisId="right" type="monotone" dataKey="excellence" name="Taux d'excellence (%)" stroke="#22c55e" strokeWidth={2} dot={{ r: 4 }} />
                  <Line yAxisId="right" type="monotone" dataKey="sentimentScore" name="Score sentiment (%)" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 3 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
      
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Recommandations par Catégorie de Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-800">🏆 Champions (Excellence &gt; 60%)</h4>
                  <p className="text-sm text-gray-600 mb-2">9 villes - 3,664 réponses (40.6%)</p>
                  <p className="text-xs font-medium mb-1">Saint-Quentin, Arras, Reims, La Rochelle, Paris, Mulhouse, Lille, Boulogne, Bordeaux</p>
                  <ul className="text-xs text-gray-500 list-disc pl-4 mt-2">
                    <li>Documenter et partager les bonnes pratiques</li>
                    <li>Maintenir le niveau d'excellence</li>
                    <li>Utiliser comme référence pour les autres villes</li>
                  </ul>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-800">📈 Potentiel (Excellence 57-60%)</h4>
                  <p className="text-sm text-gray-600 mb-2">7 villes - 3,658 réponses (40.5%)</p>
                  <p className="text-xs font-medium mb-1">Dunkerque, Nancy, Strasbourg, Villeneuve, Rouen, Annecy, Colmar</p>
                  <ul className="text-xs text-gray-500 list-disc pl-4 mt-2">
                    <li>Formation ciblée des équipes locales</li>
                    <li>Audit des conditions spécifiques (son, visibilité)</li>
                    <li>Plan d'amélioration sur 3 mois</li>
                  </ul>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-800">🎯 À Améliorer (Excellence &lt; 57%)</h4>
                  <p className="text-sm text-gray-600 mb-2">2 villes - 773 réponses (8.6%)</p>
                  <p className="text-xs font-medium mb-1">Aix-les-Bains, Amiens</p>
                  <ul className="text-xs text-gray-500 list-disc pl-4 mt-2">
                    <li>Intervention prioritaire requise</li>
                    <li>Audit complet (technique, équipes, infrastructure)</li>
                    <li>Suivi hebdomadaire des améliorations</li>
                  </ul>
                </div>
              </div>
            </div>
      
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Actions Spécifiques par Ville</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">Villes Leaders à Étudier</h4>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Saint-Quentin (67.1%)</span>
                      <p className="text-xs text-gray-600">Meilleure performance globale - organiser visite d'étude</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Arras (64.5%)</span>
                      <p className="text-xs text-gray-600">Excellence avec volume moyen - modèle reproductible</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Reims (63.7%)</span>
                      <p className="text-xs text-gray-600">Haute satisfaction malgré petit volume</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Villes Prioritaires</h4>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Amiens (54.4%)</span>
                      <p className="text-xs text-gray-600">Plus faible performance - audit urgent requis</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Aix-les-Bains (55.9%)</span>
                      <p className="text-xs text-gray-600">Volume important mais satisfaction faible</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Nancy & Bordeaux</span>
                      <p className="text-xs text-gray-600">Gros volumes avec potentiel d'amélioration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'analyse-qualitative':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Analyse Thématique des Commentaires</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={commentCategoriesSummary}>
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

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Commentaires Positifs</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {categorizedComments.positive.map((comment, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="text-xs text-green-700 font-semibold">{comment.category}</p>
                    <p className="text-sm italic">"{comment.text}"</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Commentaires Négatifs</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {categorizedComments.negative.map((comment, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-4 py-2">
                    <p className="text-xs text-red-700 font-semibold">{comment.category}</p>
                    <p className="text-sm italic">"{comment.text}"</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Commentaires Neutres</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {categorizedComments.neutral.map((comment, index) => (
                  <div key={index} className="border-l-4 border-gray-500 pl-4 py-2">
                    <p className="text-xs text-gray-700 font-semibold">{comment.category}</p>
                    <p className="text-sm italic">"{comment.text}"</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Points d'Attention Prioritaires</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-800">Son/Musique - 326 plaintes (30% négatif)</h4>
                  <p className="text-sm text-gray-600">Volume excessif mentionné dans 1,100 commentaires</p>
                  <ul className="list-disc pl-5 text-xs text-gray-500 mt-2">
                    <li>Installation de sonomètres recommandée</li>
                    <li>Formation des techniciens son</li>
                    <li>Zones famille avec volume réduit</li>
                  </ul>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-orange-800">Durée - 117 critiques (32% négatif)</h4>
                  <p className="text-sm text-gray-600">3h jugées trop longues pour les enfants</p>
                  <ul className="list-disc pl-5 text-xs text-gray-500 mt-2">
                    <li>Séances famille de 2h</li>
                    <li>Communication claire sur la durée</li>
                  </ul>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-800">Places/Visibilité - 156 plaintes (28% négatif)</h4>
                  <p className="text-sm text-gray-600">Problèmes de visibilité latérale</p>
                  <ul className="list-disc pl-5 text-xs text-gray-500 mt-2">
                    <li>Signaler les places à visibilité réduite</li>
                    <li>Tarification différenciée</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'insights':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Recommandations Prioritaires</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6 py-4">
                  <h4 className="font-semibold text-lg mb-2">1. Gestion du Volume Sonore</h4>
                  <p className="text-gray-700 mb-2">326 plaintes - 30% des commentaires négatifs</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Installer des sonomètres dans chaque ville</li>
                    <li>Formation des techniciens son sur les normes</li>
                    <li>Zones "famille" avec volume réduit</li>
                    <li>Distribution gratuite de bouchons d'oreilles enfants</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-4">
                  <h4 className="font-semibold text-lg mb-2">2. Optimisation de la Durée</h4>
                  <p className="text-gray-700 mb-2">117 critiques - Problème récurrent familles</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Créer des séances "famille" de 2h le weekend</li>
                    <li>Pause plus courte pour réduire la durée totale</li>
                    <li>Communication claire sur la durée (3h) lors de la réservation</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6 py-4">
                  <h4 className="font-semibold text-lg mb-2">3. Amélioration Visibilité</h4>
                  <p className="text-gray-700 mb-2">156 plaintes sur les places latérales</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Plan de salle avec zones de visibilité réduite</li>
                    <li>Tarification différenciée selon la qualité des places</li>
                    <li>Écrans latéraux pour les zones problématiques</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Opportunités Stratégiques</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Marketing Digital</h4>
                  <p className="text-sm">38.3% via réseaux sociaux - continuer l'investissement</p>
                  <p className="text-xs text-gray-600 mt-1">Particulièrement efficace pour les premières visites (42.1%)</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Programme Fidélité</h4>
                  <p className="text-sm">68.7% de récurrents - potentiel CRM énorme</p>
                  <p className="text-xs text-gray-600 mt-1">E-mailing sous-utilisé (8.7% → 19.2%)</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Excellence Locale</h4>
                  <p className="text-sm">Écart de 13% entre villes</p>
                  <p className="text-xs text-gray-600 mt-1">Partager les bonnes pratiques de Saint-Quentin</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">Expérience Premium</h4>
                  <p className="text-sm">Cadres et retraités plus satisfaits</p>
                  <p className="text-xs text-gray-600 mt-1">Développer des offres VIP ciblées</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Plan d'Action</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                  <div className="flex-1">
                    <h5 className="font-semibold">Immédiat (0-3 mois)</h5>
                    <p className="text-sm text-gray-600">Gestion du son, communication durée, formation équipes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                  <div className="flex-1">
                    <h5 className="font-semibold">Court terme (3-6 mois)</h5>
                    <p className="text-sm text-gray-600">Séances famille, programme fidélité, optimisation places</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                  <div className="flex-1">
                    <h5 className="font-semibold">Moyen terme (6-12 mois)</h5>
                    <p className="text-sm text-gray-600">Infrastructure, CRM avancé, offres premium</p>
                  </div>
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
      <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white p-8 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Cirque Arlette Gruss - Analyse des Sentiments</h1>
          <p className="text-lg opacity-90">Spectacle "40 ans" - Novembre 2024</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
              <span className="text-sm opacity-80">Réponses:</span>
              <span className="ml-2 font-semibold">9,033</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
              <span className="text-sm opacity-80">Villes:</span>
              <span className="ml-2 font-semibold">18</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
              <span className="text-sm opacity-80">NPS:</span>
              <span className="ml-2 font-semibold">87%</span>
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
                { key: 'city-analysis', label: 'Analyse Villes' },
                { key: 'analyse-qualitative', label: 'Analyse Qualitative' },
                { key: 'insights', label: 'Recommandations' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.key
                      ? 'border-red-500 text-red-600'
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
            Analyse complète de 9,033 réponses incluant les corrélations entre questions, 
            l'analyse géographique, et la catégorisation détaillée de 5,936 commentaires textuels.
            Les canaux marketing (Q10-19) ont été analysés et croisés avec les données démographiques.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircusSentimentDashboard;