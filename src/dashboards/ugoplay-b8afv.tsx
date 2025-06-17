import  { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, PieChart, Pie, LineChart, Line, ComposedChart, ScatterChart, Scatter } from 'recharts';

const NewsletterPerformanceDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Overall performance metrics
  const overallMetrics = {
    totalCampaigns: 127,
    activeCampaigns: 127,
    totalRecipients: 803209,
    totalDelivered: 679985,
    totalOpens: 276625,
    totalClicks: 16997,
    deliveryRate: 84.66,
    openRate: 40.68,
    clickRate: 2.50,
    clickToOpenRate: 6.15,
    unsubscribeRate: 0.021
  };

  // Campaign type performance by event category
  const campaignTypePerformance = [
    { type: 'Dance & Ballet', campaigns: 19, avgOpenRate: 52.65, avgClickRate: 7.23, volume: 'Medium' },
    { type: 'Classique & Symphonique', campaigns: 46, avgOpenRate: 42.35, avgClickRate: 1.84, volume: 'High' },
    { type: 'Ciné-concerts Familiaux', campaigns: 30, avgOpenRate: 44.20, avgClickRate: 3.38, volume: 'High' },
    { type: 'Musicals & Théâtre', campaigns: 15, avgOpenRate: 31.68, avgClickRate: 2.26, volume: 'Medium' },
    { type: 'Événements Spéciaux', campaigns: 14, avgOpenRate: 45.72, avgClickRate: 3.34, volume: 'Low' },
    { type: 'Relances', campaigns: 6, avgOpenRate: 35.29, avgClickRate: 2.34, volume: 'Low' }
  ];

  // Best performing CTAs/Links
  const ctaPerformance = [
    { type: 'Billetterie Principale', totalClicks: 24511, avgRate: 61.3, count: 127, color: '#10b981' },
    { type: 'Infos Pratiques', totalClicks: 7632, avgRate: 19.1, count: 89, color: '#3b82f6' },
    { type: 'Offres Groupes', totalClicks: 3377, avgRate: 8.4, count: 45, color: '#f59e0b' },
    { type: 'Présentation Artistes', totalClicks: 1640, avgRate: 4.1, count: 67, color: '#8b5cf6' },
    { type: 'Réseaux Sociaux', totalClicks: 965, avgRate: 2.4, count: 78, color: '#ef4444' },
    { type: 'Newsletter', totalClicks: 703, avgRate: 1.8, count: 127, color: '#64748b' }
  ];

  // Monthly trend data
  const monthlyTrend = [
    { month: 'Décembre 2024', campaigns: 17, openRate: 47.93, clickRate: 3.23, unsubRate: 0.019 },
    { month: 'Janvier 2025', campaigns: 18, openRate: 48.43, clickRate: 4.15, unsubRate: 0.018 },
    { month: 'Février 2025', campaigns: 4, openRate: 51.89, clickRate: 1.91, unsubRate: 0.020 },
    { month: 'Mars 2025', campaigns: 12, openRate: 42.81, clickRate: 4.21, unsubRate: 0.022 },
    { month: 'Avril 2025', campaigns: 23, openRate: 34.68, clickRate: 1.98, unsubRate: 0.024 },
    { month: 'Mai 2025', campaigns: 50, openRate: 40.02, clickRate: 1.95, unsubRate: 0.021 },
    { month: 'Juin 2025', campaigns: 3, openRate: 46.89, clickRate: 3.11, unsubRate: 0.020 }
  ];

  // Top performing individual campaigns
  const topCampaigns = [
    { name: 'Les Misérables - Lancement VIP', openRate: 83.7, clickRate: 64.2, recipients: 375, clicks: 241, event: 'Musical' },
    { name: 'Pirates des Caraïbes - Avant-première', openRate: 82.6, clickRate: 57.9, recipients: 323, clicks: 187, event: 'Ciné-concert' },
    { name: 'Harry Potter 5 - Early Bird', openRate: 77.9, clickRate: 51.8, recipients: 274, clicks: 142, event: 'Ciné-concert' },
    { name: 'Martha Graham - Soirée Gala', openRate: 59.4, clickRate: 28.3, recipients: 143, clicks: 40, event: 'Dance' },
    { name: 'Dance Theatre of Harlem', openRate: 65.8, clickRate: 10.2, recipients: 2543, clicks: 259, event: 'Dance' }
  ];

  // Event performance analysis
  const eventPerformance = [
    { event: 'Dance & Ballet', avgOpenRate: 52.65, avgClickRate: 7.23, campaigns: 19 },
    { event: 'Harry Potter & Ghibli', avgOpenRate: 44.20, avgClickRate: 3.38, campaigns: 63 },
    { event: 'Classique & Symphonique', avgOpenRate: 42.35, avgClickRate: 1.84, campaigns: 46 },
    { event: 'Musicals', avgOpenRate: 31.68, avgClickRate: 2.26, campaigns: 15 },
    { event: 'Événements Corporate', avgOpenRate: 47.19, avgClickRate: 8.75, campaigns: 4 }
  ];

  // Timing analysis
  const timingAnalysis = [
    { timing: 'Lancement (J-30)', avgOpenRate: 46.88, avgClickRate: 4.40 },
    { timing: 'Rappel (J-15)', avgOpenRate: 48.69, avgClickRate: 4.31 },
    { timing: 'Dernière Minute (J-7)', avgOpenRate: 37.79, avgClickRate: 1.75 },
    { timing: 'Relance (J-2)', avgOpenRate: 35.29, avgClickRate: 2.34 }
  ];

  // Benchmark comparison - Live Music/Entertainment venues 2025
  const benchmarkData = [
    { metric: 'Taux d\'ouverture', ugoPlay: 40.68, sectorAvg: 38.34, bestPractice: 52.0 },
    { metric: 'Taux de clic', ugoPlay: 2.50, sectorAvg: 3.5, bestPractice: 11.0 },
    { metric: 'Taux de désinscription', ugoPlay: 0.021, sectorAvg: 0.10, bestPractice: 0.00 },
    { metric: 'Taux de délivrabilité', ugoPlay: 84.66, sectorAvg: 95.0, bestPractice: 98.0 }
  ];

  // Click distribution by position
  const clickDistribution = [
    { position: 'Lien 1', clicks: 24511, percentage: 61.3 },
    { position: 'Lien 2', clicks: 7632, percentage: 19.1 },
    { position: 'Lien 3', clicks: 3377, percentage: 8.4 },
    { position: 'Liens 4+', clicks: 4640, percentage: 11.2 }
  ];

  // Actionable insights
  const actionableInsights = [
    {
      category: "Optimisation Dance & Ballet",
      priority: "Critique",
      insight: "7.23% de taux de clic - votre filon d'or caché!",
      impact: "High",
      recommendations: [
        "Développer une newsletter dédiée Dance",
        "Créer des séries exclusives autour des artistes",
        "Proposer des masterclass en ligne",
        "Cibler les écoles de danse et conservatoires"
      ]
    },
    {
      category: "Délivrabilité",
      priority: "Élevée",
      insight: "84.66% de délivrabilité vs 95% standard industrie",
      impact: "High",
      recommendations: [
        "Nettoyer la base de données (emails inactifs)",
        "Implémenter double opt-in pour nouveaux abonnés",
        "Vérifier configuration SPF/DKIM/DMARC",
        "Segmenter les inactifs depuis 6 mois"
      ]
    },
    {
      category: "Timing des envois",
      priority: "Élevée",
      insight: "Les envois J-15 performent 29% mieux que J-7",
      impact: "Medium",
      recommendations: [
        "Privilégier les envois 2 semaines avant l'événement",
        "Éviter les campagnes dernière minute",
        "Créer une séquence automatisée J-30, J-15, J-7",
        "Tester des envois J+1 pour cross-sell"
      ]
    },
    {
      category: "Potentiel de conversion",
      priority: "Moyenne",
      insight: "Potentiel de +57,801 clics avec optimisation",
      impact: "High",
      recommendations: [
        "Réduire à 3 liens maximum par email",
        "CTAs plus visibles (boutons vs texte)",
        "Personnaliser selon le type d'événement préféré",
        "A/B tester les objets d'emails"
      ]
    }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Indicateurs Clés de Performance</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600">{overallMetrics.activeCampaigns}</div>
                  <div className="text-sm text-gray-600">Campagnes</div>
                  <div className="text-xs text-gray-500 mt-1">Déc 24 - Juin 25</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600">{overallMetrics.openRate}%</div>
                  <div className="text-sm text-gray-600">Taux d'Ouverture</div>
                  <div className="text-xs text-green-600 mt-1">↑ +6% vs secteur</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600">{overallMetrics.clickRate}%</div>
                  <div className="text-sm text-gray-600">Taux de Clic</div>
                  <div className="text-xs text-red-600 mt-1">↓ -29% vs secteur</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-amber-600">{overallMetrics.deliveryRate}%</div>
                  <div className="text-sm text-gray-600">Délivrabilité</div>
                  <div className="text-xs text-red-600 mt-1">⚠️ À améliorer</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Performance par Type d'Événement</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={campaignTypePerformance} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="type" type="category" width={140} />
                  <Tooltip  />
                  <Legend />
                  <Bar dataKey="avgOpenRate" name="Taux d'Ouverture %" fill="#3b82f6" />
                  <Bar dataKey="avgClickRate" name="Taux de Clic %" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Distribution des Clics par Position</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={clickDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="percentage"
                    label={({position, percentage}) => `${position}: ${percentage}%`}
                  >
                    {clickDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={['#10b981', '#3b82f6', '#f59e0b', '#64748b'][index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>💡 61.3% des clics sur le premier lien = Optimiser le CTA principal</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Évolution Mensuelle des Performances</h3>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={monthlyTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip  />
                  <Legend />
                  <Bar yAxisId="right" dataKey="campaigns" name="Nb Campagnes" fill="#e5e7eb" />
                  <Line yAxisId="left" type="monotone" dataKey="openRate" name="Taux d'Ouverture %" stroke="#3b82f6" strokeWidth={2} />
                  <Line yAxisId="left" type="monotone" dataKey="clickRate" name="Taux de Clic %" stroke="#f59e0b" strokeWidth={2} />
                </ComposedChart>
              </ResponsiveContainer>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  📊 <strong>Tendance:</strong> Pic de volume en mai (50 campagnes) avec baisse de performance. 
                  Recommandation: Espacer les envois pour éviter la fatigue des abonnés.
                </p>
              </div>
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Performance par Genre Musical</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={eventPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="event" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip  />
                  <Legend />
                  <Bar dataKey="avgOpenRate" name="Taux d'Ouverture %" fill="#3b82f6" />
                  <Bar dataKey="avgClickRate" name="Taux de Clic %" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>💡 <strong>Star performer:</strong> Dance & Ballet avec 7.23% de CTR (3x la moyenne!)</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Analyse du Timing Optimal</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={timingAnalysis}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="timing" />
                  <YAxis />
                  <Tooltip  />
                  <Legend />
                  <Line type="monotone" dataKey="avgOpenRate" name="Taux d'Ouverture %" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="avgClickRate" name="Taux de Clic %" stroke="#f59e0b" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  ✅ <strong>Sweet spot:</strong> J-15 génère les meilleures performances. 
                  Les envois dernière minute sous-performent de 23%.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Top Campagnes Événementielles</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Campagne</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Destinataires</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Taux d'Ouverture</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Taux de Clic</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performance</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {topCampaigns.map((campaign, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{campaign.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            campaign.event === 'Dance' ? 'bg-purple-100 text-purple-800' :
                            campaign.event === 'Musical' ? 'bg-green-100 text-green-800' :
                            campaign.event === 'Ciné-concert' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {campaign.event}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.recipients.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <span className="mr-2">{campaign.openRate}%</span>
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{width: `${Math.min(campaign.openRate, 100)}%`}}></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <span className="mr-2">{campaign.clickRate}%</span>
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div className="bg-yellow-600 h-2 rounded-full" style={{width: `${Math.min(campaign.clickRate, 100)}%`}}></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {campaign.clickRate > 20 ? '🌟 Exceptionnel' : 
                           campaign.openRate > 70 ? '✅ Excellent' : 
                           '📈 Très bon'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Insights Clés - Événements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">🩰 Dance = Engagement Maximum</h4>
                  <p className="text-sm text-gray-600">7.23% CTR - 3x votre moyenne!</p>
                  <p className="text-xs text-gray-500 mt-1">Audience ultra-ciblée et passionnée</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">🎬 Ciné-concerts = Volume</h4>
                  <p className="text-sm text-gray-600">76 campagnes - Votre cœur de cible</p>
                  <p className="text-xs text-gray-500 mt-1">Opportunité d'optimisation massive</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">📅 Timing J-15 = Sweet Spot</h4>
                  <p className="text-sm text-gray-600">48.69% ouverture vs 37.79% J-7</p>
                  <p className="text-xs text-gray-500 mt-1">Anticipation sans urgence excessive</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🎭 Musicals = Potentiel caché</h4>
                  <p className="text-sm text-gray-600">Les Misérables: 83.7% ouverture!</p>
                  <p className="text-xs text-gray-500 mt-1">Contenu exclusif = engagement</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'cta':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Performance des CTAs par Type</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={ctaPerformance} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="type" type="category" width={140} />
                  <Tooltip  />
                  <Legend />
                  <Bar dataKey="totalClicks" name="Total Clics" fill="#3b82f6" />
                  <Bar dataKey="avgRate" name="Part des clics %" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  💡 <strong>Concentration extrême:</strong> 61.3% des clics sur la billetterie seule. 
                  Opportunité: Diversifier pour augmenter l'engagement global et la découverte.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Analyse de la Loi de Fitts</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="font-medium">Lien 1 (Billetterie)</span>
                  <div className="flex items-center gap-4">
                    <div className="w-48 bg-gray-200 rounded-full h-3">
                      <div className="bg-green-600 h-3 rounded-full" style={{width: '61.3%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">61.3%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="font-medium">Lien 2 (Infos)</span>
                  <div className="flex items-center gap-4">
                    <div className="w-48 bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full" style={{width: '19.1%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">19.1%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="font-medium">Lien 3 (Groupes)</span>
                  <div className="flex items-center gap-4">
                    <div className="w-48 bg-gray-200 rounded-full h-3">
                      <div className="bg-yellow-600 h-3 rounded-full" style={{width: '8.4%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">8.4%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="font-medium">Liens 4-10</span>
                  <div className="flex items-center gap-4">
                    <div className="w-48 bg-gray-200 rounded-full h-3">
                      <div className="bg-gray-600 h-3 rounded-full" style={{width: '11.2%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">11.2%</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>📊 <strong>Recommandation:</strong> Limiter à 3 liens maximum. 
                Les liens 4+ ne génèrent que 11.2% des clics mais diluent l'attention.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Recommandations CTAs</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h4 className="font-semibold text-green-800">✅ Ce qui fonctionne</h4>
                  <ul className="list-disc pl-5 text-sm mt-2">
                    <li><strong>Focus billetterie clair:</strong> 61.3% des clics - objectif principal atteint</li>
                    <li><strong>CTAs Dance performants:</strong> 13.74% click-to-open vs 6.15% moyenne</li>
                    <li><strong>Segmentation par événement:</strong> Messages ciblés = meilleure conversion</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                  <h4 className="font-semibold text-yellow-800">⚠️ À optimiser</h4>
                  <ul className="list-disc pl-5 text-sm mt-2">
                    <li><strong>Trop de liens:</strong> Jusqu'à 10 liens dilue l'attention</li>
                    <li><strong>CTAs secondaires négligés:</strong> Infos pratiques sous-utilisées</li>
                    <li><strong>Manque de personnalisation:</strong> CTAs identiques pour tous les événements</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-semibold text-blue-800">🚀 Actions prioritaires</h4>
                  <ul className="list-disc pl-5 text-sm mt-2">
                    <li>Tester des boutons vs liens texte (potentiel +2-3x clics)</li>
                    <li>Créer des CTAs spécifiques par genre (ex: "Réserver ma masterclass" pour Dance)</li>
                    <li>Implémenter des CTAs dynamiques selon l'historique d'achat</li>
                    <li>A/B tester la couleur et taille des boutons principaux</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'benchmark':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Comparaison aux Standards du Secteur Live Entertainment</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={benchmarkData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="metric" />
                  <YAxis />
                  <Tooltip  />
                  <Legend />
                  <Bar dataKey="ugoPlay" name="Ugo and Play" fill="#3b82f6" />
                  <Bar dataKey="sectorAvg" name="Moyenne Secteur" fill="#64748b" />
                  <Bar dataKey="bestPractice" name="Meilleures Pratiques" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p className="mb-2">📊 Sources: Benchmarks basés sur les données 2024-2025 du secteur live entertainment</p>
                <p>* Secteur: Producteurs de spectacles et salles de concert (source: Industry Reports 2025)</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Analyse Comparative Détaillée</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">🎯 Forces d'Ugo and Play</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li><strong>Audience engagée</strong> (40.68% vs 38.34% secteur)</li>
                    <li><strong>Taux de désabonnement minimal</strong> (0.021% vs 0.10%)</li>
                    <li><strong>Excellence sur la Dance</strong> (7.23% CTR!)</li>
                    <li><strong>Base de données fidèle</strong> (6.15% click-to-open)</li>
                    <li><strong>Contenu varié et attractif</strong> (127 campagnes/6 mois)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">📈 Opportunités d'amélioration</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li><strong>Délivrabilité critique</strong> (84.66% vs 95% standard)</li>
                    <li><strong>Gap de conversion</strong> (2.50% vs 11% best practice)</li>
                    <li><strong>Potentiel CTR inexploité</strong> (-77% vs leaders)</li>
                    <li><strong>Optimisation des CTAs nécessaire</strong></li>
                    <li><strong>Segmentation à développer</strong></li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 mb-2">💡 Insight Principal</h4>
                <p className="text-sm text-blue-700">
                  Ugo and Play possède une <strong>audience fidèle et réceptive</strong> (+6% vs secteur en ouverture) 
                  mais <strong>sous-convertit massivement</strong>. Le potentiel: passer de 17,000 à 74,800 clics 
                  représente environ <strong>+350% de ventes de billets possibles</strong>.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Positionnement vs Concurrence</h3>
              <ResponsiveContainer width="100%" height={300}>
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="openRate" name="Taux d'Ouverture %" domain={[30, 55]} />
                  <YAxis dataKey="clickRate" name="Taux de Clic %" domain={[0, 12]} />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter name="Producteurs" data={[
                    { name: 'Ugo and Play', openRate: 40.68, clickRate: 2.50, size: 100 },
                    { name: 'Moyenne Live Music', openRate: 38.34, clickRate: 3.5, size: 60 },
                    { name: 'Leaders Dance/Ballet', openRate: 52.0, clickRate: 7.5, size: 80 },
                    { name: 'Best Practice Global', openRate: 52.0, clickRate: 11.0, size: 90 },
                    { name: 'Théâtres Nationaux', openRate: 45.0, clickRate: 4.2, size: 70 }
                  ]} fill="#8884d8">
                    {[
                      { fill: '#3b82f6' },
                      { fill: '#64748b' },
                      { fill: '#8b5cf6' },
                      { fill: '#22c55e' },
                      { fill: '#f59e0b' }
                    ].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>Position d'Ugo and Play: <strong>Bon engagement initial</strong> mais <strong>énorme potentiel de conversion inexploité</strong></p>
              </div>
            </div>
          </div>
        );

      case 'insights':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">🎯 Vos plus grandes opportunités</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50">
                  <h4 className="font-semibold text-lg mb-2">Dance & Ballet: Votre pépite cachée!</h4>
                  <p className="text-gray-700 mb-3">7.23% de taux de clic - 3x votre moyenne générale</p>
                  <div className="p-3 bg-white rounded">
                    <p className="font-medium mb-2">💰 Ce que cela signifie pour vous:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Actuellement: 19 campagnes Dance = 1,373 clics</li>
                      <li>• Potentiel avec focus Dance: 50 campagnes = 3,600+ clics</li>
                      <li>• <span className="font-bold text-purple-700">+2,200 billets additionnels possibles!</span></li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-amber-500 pl-6 py-4 bg-amber-50">
                  <h4 className="font-semibold text-lg mb-2">Délivrabilité: 120,000 emails perdus!</h4>
                  <p className="text-gray-700 mb-3">84.66% de délivrabilité vs 95% standard = emails non reçus</p>
                  <div className="p-3 bg-white rounded">
                    <p className="font-medium mb-2">📊 Impact direct:</p>
                    <ul className="text-sm space-y-1">
                      <li>• 123,224 emails non délivrés sur 6 mois</li>
                      <li>• Au taux actuel = 50,000 ouvertures perdues</li>
                      <li>• <span className="font-bold text-amber-700">= 3,000 clics (billets) perdus!</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">🌟 Vos success stories à répliquer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 bg-gradient-to-br from-green-50 to-white">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-green-800">🎭 Les Misérables VIP</h4>
                    <span className="text-2xl font-bold text-green-600">64.2%</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Taux de clic record - 25x votre moyenne!</p>
                  <div className="bg-white p-2 rounded">
                    <p className="text-xs font-medium">Secret: Exclusivité VIP + urgence limitée</p>
                  </div>
                </div>

                <div className="border rounded-lg p-4 bg-gradient-to-br from-blue-50 to-white">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-blue-800">🏴‍☠️ Pirates Avant-première</h4>
                    <span className="text-2xl font-bold text-blue-600">57.9%</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Ciné-concert familial ultra-performant</p>
                  <div className="bg-white p-2 rounded">
                    <p className="text-xs font-medium">Secret: Timing avant-première + famille</p>
                  </div>
                </div>

                <div className="border rounded-lg p-4 bg-gradient-to-br from-purple-50 to-white">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-purple-800">🩰 Martha Graham</h4>
                    <span className="text-2xl font-bold text-purple-600">28.3%</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Performance Dance exceptionnelle</p>
                  <div className="bg-white p-2 rounded">
                    <p className="text-xs font-medium">Secret: Audience niche ultra-engagée</p>
                  </div>
                </div>

                <div className="border rounded-lg p-4 bg-gradient-to-br from-amber-50 to-white">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-amber-800">⏰ Timing J-15</h4>
                    <span className="text-2xl font-bold text-amber-600">+29%</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Performance vs envois dernière minute</p>
                  <div className="bg-white p-2 rounded">
                    <p className="text-xs font-medium">Secret: Anticipation sans pression</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">🚀 3 actions simples pour tripler vos résultats</h3>
              <div className="space-y-4">
                <div className="border-2 border-purple-500 rounded-lg p-5 bg-purple-50">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">1️⃣</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">Créez une newsletter Dance dédiée</h4>
                      <p className="text-sm text-gray-700 mb-3">7.23% de CTR = 3x votre moyenne. C'est votre audience en or!</p>
                      <div className="bg-white p-3 rounded">
                        <p className="font-medium text-sm mb-2">💰 Impact pour vous:</p>
                        <p className="text-sm">10,000 abonnés Dance × 7.23% CTR = <span className="font-bold">723 billets/campagne</span></p>
                        <p className="text-xs text-gray-600 mt-1">vs 250 actuellement</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-amber-500 rounded-lg p-5 bg-amber-50">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">2️⃣</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">Nettoyez votre base emails (urgence!)</h4>
                      <p className="text-sm text-gray-700 mb-3">123,000 emails perdus = 3,000 billets non vendus</p>
                      <div className="bg-white p-3 rounded">
                        <p className="font-medium text-sm mb-2">📈 Actions immédiates:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Supprimer les inactifs depuis 1 an</li>
                          <li>• Vérifier SPF/DKIM cette semaine</li>
                          <li>• Double opt-in obligatoire</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-green-500 rounded-lg p-5 bg-green-50">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">3️⃣</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">Adoptez le timing magique J-15</h4>
                      <p className="text-sm text-gray-700 mb-3">48.69% d'ouverture vs 37.79% à J-7</p>
                      <div className="bg-white p-3 rounded">
                        <p className="font-medium text-sm mb-2">🎯 Séquence gagnante:</p>
                        <ul className="text-sm space-y-1">
                          <li>• J-30: Annonce (early bird)</li>
                          <li>• J-15: Rappel principal</li>
                          <li>• J-7: Dernières places (si nécessaire)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">📊 Les tendances de votre secteur</h3>
              <div className="space-y-4">
                <div className="mb-4 p-3 bg-blue-50 rounded">
                  <p className="text-sm text-blue-800">
                    <strong>💡 Benchmark:</strong> Les producteurs de spectacles leaders atteignent 11% de taux de clic
                  </p>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium">Tendance: Newsletters thématiques</h4>
                    <p className="text-sm text-gray-600">Segmentation par genre musical/artistique</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-700">+65%</p>
                    <p className="text-xs text-gray-500">d'engagement</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium">Tendance: Contenu exclusif artistes</h4>
                    <p className="text-sm text-gray-600">Behind-the-scenes, interviews, répétitions</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-700">+120%</p>
                    <p className="text-xs text-gray-500">de partages</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium">Tendance: Early bird automatisé</h4>
                    <p className="text-sm text-gray-600">Récompenser les premiers acheteurs</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-700">+45%</p>
                    <p className="text-xs text-gray-500">de conversion J-30</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
                  <div>
                    <h4 className="font-medium text-blue-800">Votre position actuelle</h4>
                    <p className="text-sm text-blue-600 font-medium">Fort potentiel inexploité, surtout sur Dance</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-700">Top 30%</p>
                    <p className="text-xs text-blue-600">potentiel Top 5%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">🎯 Votre plan d'action personnalisé</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="bg-white text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span>
                    Cette Semaine
                  </h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>✓ Nettoyer emails inactifs</li>
                    <li>✓ Vérifier config SPF/DKIM</li>
                    <li>✓ Réduire à 3 liens par email</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="bg-white text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
                    Ce Mois-ci
                  </h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>✓ Lancer newsletter Dance test</li>
                    <li>✓ Implémenter séquence J-15</li>
                    <li>✓ A/B test boutons vs texte</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="bg-white text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
                    Ce Trimestre
                  </h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>✓ 3 newsletters thématiques</li>
                    <li>✓ Programme early bird auto</li>
                    <li>✓ Atteindre 5% de CTR global</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-medium">
                  🚀 Résultat attendu: <span className="font-bold">De 17,000 à 50,000+ clics = +33,000 billets/an</span>
                </p>
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
      <div className="bg-gradient-to-r from-purple-800 to-blue-600 text-white p-8 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Ugo and Play - Analyse Performance Newsletter</h1>
          <p className="text-lg opacity-90">Période: Décembre 2024 - Juin 2025 | 127 campagnes analysées</p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 text-center">
              <div className="text-2xl font-bold">{(overallMetrics.totalRecipients/1000).toFixed(0)}k</div>
              <div className="text-sm opacity-80">Destinataires</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 text-center">
              <div className="text-2xl font-bold">{(overallMetrics.totalDelivered/1000).toFixed(0)}k</div>
              <div className="text-sm opacity-80">Délivrés</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 text-center">
              <div className="text-2xl font-bold">{(overallMetrics.totalOpens/1000).toFixed(0)}k</div>
              <div className="text-sm opacity-80">Ouvertures</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 text-center">
              <div className="text-2xl font-bold">{(overallMetrics.totalClicks/1000).toFixed(0)}k</div>
              <div className="text-sm opacity-80">Clics</div>
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
                { key: 'events', label: 'Performance Événements' },
                { key: 'cta', label: 'Analyse CTAs' },
                { key: 'benchmark', label: 'Benchmark Secteur' },
                { key: 'insights', label: 'Recommandations' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
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
          <h3 className="text-lg font-semibold mb-3">Méthodologie & Sources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Données Sources</h4>
              <p>Export complet des 127 campagnes email Ugo and Play de décembre 2024 à juin 2025, incluant métriques de performance et analyse des liens.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Calculs & Benchmarks</h4>
              <p>Taux calculés sur base délivrée. Benchmarks secteur: Live Entertainment 2024-2025. Sources: Industry reports.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Recommandations</h4>
              <p>Basées sur l'analyse de vos meilleures performances et les standards du secteur. Focus sur actions concrètes et ROI mesurable.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPerformanceDashboard;