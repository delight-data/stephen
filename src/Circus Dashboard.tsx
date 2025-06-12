import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, PieChart, Pie, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line } from 'recharts';

const CircusSentimentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Overall sentiment data
  const overallSentiment = [
    { name: 'Positif', value: 24.0, color: '#22c55e', count: 1426 },
    { name: 'Neutre', value: 65.4, color: '#64748b', count: 3880 },
    { name: 'Négatif', value: 9.0, color: '#ef4444', count: 536 },
    { name: 'Mixte', value: 1.6, color: '#f59e0b', count: 94 }
  ];

  // Performance ratings
  const performanceRatings = [
    { category: 'Accueil Entrée', rating: 9.23, responses: 9033 },
    { category: 'Accueil Billetterie', rating: 8.99, responses: 9033 },
    { category: 'Recommandation', rating: 9.56, responses: 8706 },
    { category: 'Comparaison autres cirques', rating: 4.73, responses: 9033 }
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

  // Visitor demographics
  const visitorType = [
    { name: 'Visiteurs récurrents', value: 68.7, count: 6205, color: '#3b82f6' },
    { name: 'Première visite', value: 31.3, count: 2828, color: '#10b981' }
  ];

  // CSP distribution
  const cspDistribution = [
    { name: 'Employés', value: 32.9, count: 2968 },
    { name: 'Cadres', value: 25.3, count: 2285 },
    { name: 'Retraités', value: 17.3, count: 1565 },
    { name: 'Artisans/Chefs', value: 9.6, count: 868 },
    { name: 'Prof. intermédiaires', value: 6.0, count: 542 },
    { name: 'Ouvriers', value: 3.9, count: 349 },
    { name: 'Étudiants', value: 2.3, count: 206 },
    { name: 'Autres', value: 2.7, count: 250 }
  ];

  // Transport mode
  const transportMode = [
    { name: 'Voiture', value: 79.0, count: 7137, color: '#3b82f6' },
    { name: 'Train/Bus', value: 11.1, count: 1000, color: '#10b981' },
    { name: 'À pied/Vélo', value: 7.2, count: 654, color: '#f59e0b' },
    { name: 'Non spécifié', value: 2.6, count: 235, color: '#64748b' },
    { name: 'Avion', value: 0.1, count: 7, color: '#8b5cf6' }
  ];

  // Feedback themes
  const feedbackThemes = [
    { theme: 'Spectacle/Numéros', positive: 68, negative: 12, neutral: 20, mentions: 1199 },
    { theme: 'Son/Musique', positive: 15, negative: 45, neutral: 40, mentions: 795 },
    { theme: 'Places/Visibilité', positive: 25, negative: 35, neutral: 40, mentions: 436 },
    { theme: 'Animaux', positive: 40, negative: 30, neutral: 30, mentions: 333 },
    { theme: 'Durée', positive: 20, negative: 40, neutral: 40, mentions: 216 },
    { theme: 'Installations', positive: 35, negative: 25, neutral: 40, mentions: 130 },
    { theme: 'Prix', positive: 15, negative: 50, neutral: 35, mentions: 66 }
  ];

  // NPS Calculation
  const npsData = {
    promoters: 87,
    passives: 7,
    detractors: 6,
    score: 87
  };

  // City distribution
  const topCities = [
    { city: 'Bordeaux', count: 1916 },
    { city: 'Nancy', count: 1331 },
    { city: 'Lille', count: 609 },
    { city: 'Colmar', count: 484 },
    { city: 'Aix-les-Bains', count: 479 }
  ];

  // Sample feedback
  const sampleFeedback = {
    positive: [
      "Spectacle exceptionnel, les artistes sont incroyables! Bravo pour cette magnifique soirée.",
      "Superbe spectacle, tout était parfait. Les numéros étaient époustouflants!",
      "Merveilleux moment en famille. Les enfants étaient émerveillés. À refaire!",
      "Excellent accueil, organisation parfaite et spectacle de très haute qualité.",
      "Un grand bravo à toute l'équipe! C'était magique du début à la fin."
    ],
    negative: [
      "Le son était beaucoup trop fort, surtout pour les enfants.",
      "Déçu de ne pas avoir vu les motos suite à un problème technique.",
      "Places inconfortables avec peu de visibilité depuis le côté.",
      "Spectacle trop long pour les jeunes enfants, 3h c'est excessif.",
      "Prix des consommations exorbitants, 11€ pour un sandwich!"
    ],
    neutral: [
      "Spectacle correct dans l'ensemble, quelques longueurs.",
      "Bien mais il manquait plus de numéros avec des animaux.",
      "Organisation correcte, peut mieux faire sur l'accueil.",
      "Quelques numéros excellents, d'autres moyens.",
      "Expérience agréable mais sans plus."
    ]
  };

  // Emotion intensity data
  const emotionIntensity = [
    { emotion: 'Émerveillement', value: 85 },
    { emotion: 'Satisfaction', value: 78 },
    { emotion: 'Excitation', value: 72 },
    { emotion: 'Déception', value: 15 },
    { emotion: 'Frustration', value: 12 },
    { emotion: 'Ennui', value: 8 }
  ];

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-300 rounded shadow-lg">
          <p className="font-semibold">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
              {entry.unit || ''}
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
                  <div className="text-3xl font-bold text-green-600">{npsData.score}%</div>
                  <div className="text-sm text-gray-600">Score NPS</div>
                  <div className="text-xs text-gray-500 mt-1">Exceptionnel</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">9.56/10</div>
                  <div className="text-sm text-gray-600">Recommandation</div>
                  <div className="text-xs text-gray-500 mt-1">Moyenne</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600">91.1%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                  <div className="text-xs text-gray-500 mt-1">Excellent + Très bon</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-amber-600">9,033</div>
                  <div className="text-sm text-gray-600">Réponses</div>
                  <div className="text-xs text-gray-500 mt-1">Total analysé</div>
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
                    labelLine={false}
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
              <div className="mt-4 text-sm text-gray-600">
                <p>Basé sur 5,936 commentaires textuels analysés</p>
              </div>
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
              <h3 className="text-lg font-semibold mb-4">Notes Moyennes par Catégorie</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceRatings} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 10]} />
                  <YAxis dataKey="category" type="category" width={150} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="rating" fill="#3b82f6">
                    {performanceRatings.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.rating > 8 ? '#22c55e' : entry.rating > 6 ? '#3b82f6' : '#f59e0b'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case 'demographics':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Type de Visiteurs</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={visitorType}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, value}) => `${name}: ${value}%`}
                  >
                    {visitorType.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Catégories Socio-Professionnelles</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={cspDistribution.slice(0, 5)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" fill="#8b5cf6" />
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
                    labelLine={false}
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
          </div>
        );

      case 'acts':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Numéros les Plus Appréciés</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={topFavoriteActs} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value) => `${value}%`} />
                  <YAxis dataKey="act" type="category" width={100} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="percentage" fill="#22c55e">
                    {topFavoriteActs.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index < 3 ? '#22c55e' : index < 5 ? '#3b82f6' : '#64748b'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>Basé sur 8,505 réponses à la question sur le numéro préféré</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Catégories de Numéros</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">Acrobatie</div>
                  <div className="text-lg">35%</div>
                  <div className="text-xs text-gray-500">Trapèze, Équilibre</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">Performance</div>
                  <div className="text-lg">28%</div>
                  <div className="text-xs text-gray-500">Diabolo, Lasso</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">Animaux</div>
                  <div className="text-lg">22%</div>
                  <div className="text-xs text-gray-500">Chevaux, Otaries</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-amber-600">Autres</div>
                  <div className="text-lg">15%</div>
                  <div className="text-xs text-gray-500">Clowns, Motos</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'themes':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Analyse Thématique des Commentaires</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={feedbackThemes}>
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
              <h3 className="text-lg font-semibold mb-4">Points d'Attention Prioritaires</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <h4 className="font-semibold text-red-800">Son/Musique (45% négatif)</h4>
                  <p className="text-sm text-gray-600">Volume trop élevé mentionné dans 795 commentaires. Impact particulier sur les familles avec enfants.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4 py-2">
                  <h4 className="font-semibold text-orange-800">Durée (40% négatif)</h4>
                  <p className="text-sm text-gray-600">Spectacle jugé trop long (3h) par certains, surtout pour les jeunes enfants.</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                  <h4 className="font-semibold text-yellow-800">Places/Visibilité (35% négatif)</h4>
                  <p className="text-sm text-gray-600">Problèmes de visibilité depuis certaines places latérales mentionnés.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'feedback':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Exemples de Commentaires Positifs</h3>
              <div className="space-y-4">
                {sampleFeedback.positive.map((comment, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="text-sm italic">"{comment}"</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Exemples de Commentaires Négatifs</h3>
              <div className="space-y-4">
                {sampleFeedback.negative.map((comment, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-4 py-2">
                    <p className="text-sm italic">"{comment}"</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Exemples de Commentaires Neutres</h3>
              <div className="space-y-4">
                {sampleFeedback.neutral.map((comment, index) => (
                  <div key={index} className="border-l-4 border-gray-500 pl-4 py-2">
                    <p className="text-sm italic">"{comment}"</p>
                  </div>
                ))}
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
                  <p className="text-gray-700 mb-2">Le volume sonore est la principale source de mécontentement (45% de sentiments négatifs sur ce thème).</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Installer des sonomètres pour surveiller les niveaux</li>
                    <li>Proposer des casques anti-bruit pour les enfants</li>
                    <li>Ajuster le volume selon les numéros et l'audience</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-4">
                  <h4 className="font-semibold text-lg mb-2">2. Optimisation de la Durée</h4>
                  <p className="text-gray-700 mb-2">Envisager une version courte pour les familles avec jeunes enfants.</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Proposer des séances "famille" de 2h</li>
                    <li>Indiquer clairement la durée lors de la réservation</li>
                    <li>Optimiser les transitions entre numéros</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6 py-4">
                  <h4 className="font-semibold text-lg mb-2">3. Amélioration de la Visibilité</h4>
                  <p className="text-gray-700 mb-2">Certaines places latérales offrent une visibilité limitée.</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Signaler clairement les places à visibilité réduite</li>
                    <li>Proposer un tarif réduit pour ces places</li>
                    <li>Installer des écrans pour les zones problématiques</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6 py-4">
                  <h4 className="font-semibold text-lg mb-2">4. Capitaliser sur les Points Forts</h4>
                  <p className="text-gray-700 mb-2">Les numéros de trapèze et diabolo sont plébiscités.</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Mettre en avant ces numéros dans la communication</li>
                    <li>Développer des variantes pour l'année prochaine</li>
                    <li>Former plus d'artistes sur ces disciplines populaires</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Points Forts à Maintenir</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Excellence de l'Accueil</h4>
                  <p className="text-sm">Notes moyennes exceptionnelles: 9.23/10 (entrée) et 8.99/10 (billetterie)</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Qualité du Spectacle</h4>
                  <p className="text-sm">91.1% d'évaluations "Excellent" ou "Très bon"</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Fidélisation Forte</h4>
                  <p className="text-sm">68.7% de visiteurs récurrents - excellente fidélité</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">Recommandation Élevée</h4>
                  <p className="text-sm">NPS de 87% - score exceptionnel dans l'industrie</p>
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
              <span className="text-sm opacity-80">Réponses analysées:</span>
              <span className="ml-2 font-semibold">9,033</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
              <span className="text-sm opacity-80">Commentaires texte:</span>
              <span className="ml-2 font-semibold">5,936</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
              <span className="text-sm opacity-80">Score NPS:</span>
              <span className="ml-2 font-semibold">87%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {[
                { key: 'overview', label: 'Vue d\'ensemble' },
                { key: 'demographics', label: 'Démographie' },
                { key: 'acts', label: 'Numéros' },
                { key: 'themes', label: 'Thèmes' },
                { key: 'feedback', label: 'Commentaires' },
                { key: 'insights', label: 'Recommandations' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Collecte de données</h4>
              <p>Enquête post-spectacle envoyée à tous les spectateurs, novembre 2024. Questions mixtes (échelles numériques et texte libre).</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Analyse des sentiments</h4>
              <p>Traitement automatique des 5,936 commentaires texte pour identifier sentiments et thèmes principaux.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Fiabilité</h4>
              <p>Taux de réponse élevé (9,033 réponses). Échantillon représentatif sur toutes les villes de la tournée.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircusSentimentDashboard;