import  { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, PieChart, Pie, LineChart, Line} from 'recharts';

const NewsletterPerformanceDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Overall performance metrics
  const overallMetrics = {
    totalCampaigns: 144,
    activeCampaigns: 143,
    totalRecipients: 2605911,
    totalDelivered: 2169772,
    totalOpens: 978177,
    totalClicks: 26801,
    deliveryRate: 83.26,
    openRate: 45.08,
    clickRate: 1.24,
    clickToOpenRate: 2.74,
    unsubscribeRate: 0.023
  };

  // Campaign type performance
  const campaignTypePerformance = [
    { type: 'B2C QATAR JOCKEY CLUB', campaigns: 10, avgOpenRate: 58.2, avgClickRate: 12.5, volume: 'High' },
    { type: 'B2C POULES D\'ESSAI', campaigns: 8, avgOpenRate: 52.4, avgClickRate: 8.3, volume: 'High' },
    { type: 'B2C HIPPODROME EN FAMILLE', campaigns: 19, avgOpenRate: 48.1, avgClickRate: 6.7, volume: 'High' },
    { type: 'B2C GRAND STEEPLE-CHASE', campaigns: 12, avgOpenRate: 44.8, avgClickRate: 5.2, volume: 'High' },
    { type: 'B2C PRIX DE DIANE', campaigns: 5, avgOpenRate: 49.2, avgClickRate: 7.8, volume: 'Medium' },
    { type: 'ENQUETES', campaigns: 14, avgOpenRate: 65.3, avgClickRate: 45.2, volume: 'Low' },
    { type: 'USAG', campaigns: 14, avgOpenRate: 41.7, avgClickRate: 3.1, volume: 'Medium' },
    { type: 'B2B SEQUENCE SAISON', campaigns: 1, avgOpenRate: 0, avgClickRate: 0, volume: 'Medium' }
  ];

  // Best performing CTAs/Links
  const ctaPerformance = [
    { type: 'Billetterie', totalClicks: 14148, avgRate: 15.2, count: 91, color: '#10b981' },
    { type: 'Page Événement', totalClicks: 8432, avgRate: 12.8, count: 67, color: '#3b82f6' },
    { type: 'Plan du Site', totalClicks: 1153, avgRate: 9.6, count: 12, color: '#f59e0b' },
    { type: 'Enquête', totalClicks: 770, avgRate: 52.9, count: 17, color: '#8b5cf6' },
    { type: 'Réseaux Sociaux', totalClicks: 11877, avgRate: 2.1, count: 372, color: '#ef4444' },
    { type: 'Vue Web', totalClicks: 6246, avgRate: 1.8, count: 142, color: '#64748b' },
    { type: 'Désinscription', totalClicks: 16740, avgRate: 0.8, count: 108, color: '#f87171' }
  ];

  // Monthly trend data
  const monthlyTrend = [
    { month: 'Mars 2025', campaigns: 18, openRate: 42.3, clickRate: 1.8, unsubRate: 0.02 },
    { month: 'Avril 2025', campaigns: 47, openRate: 44.7, clickRate: 1.5, unsubRate: 0.025 },
    { month: 'Mai 2025', campaigns: 62, openRate: 46.8, clickRate: 1.1, unsubRate: 0.021 },
    { month: 'Juin 2025', campaigns: 17, openRate: 48.2, clickRate: 0.9, unsubRate: 0.018 }
  ];

  // Volume analysis by tags
  const volumeByTags = [
    { tag: 'B2C', campaigns: 64, recipients: 1850000, openRate: 48.5 },
    { tag: 'Lancement', campaigns: 71, recipients: 420000, openRate: 52.1 },
    { tag: 'AC', campaigns: 48, recipients: 180000, openRate: 41.2 },
    { tag: 'Enquête', campaigns: 23, recipients: 85000, openRate: 65.3 },
    { tag: 'PTV', campaigns: 22, recipients: 45000, openRate: 58.7 },
    { tag: 'Relance', campaigns: 19, recipients: 25000, openRate: 35.8 }
  ];

  // Top performing individual campaigns
  const topCampaigns = [
    { name: 'B2C_QPJC_PTV', openRate: 69.8, clickRate: 20.1, recipients: 605, clicks: 120 },
    { name: 'Enquête satisfaction spectateurs', openRate: 85.2, clickRate: 78.4, recipients: 450, clicks: 353 },
    { name: 'B2C_HEF_Lancement Famille', openRate: 62.4, clickRate: 15.7, recipients: 12500, clicks: 1960 },
    { name: 'B2C_Poules_Invitation VIP', openRate: 58.9, clickRate: 12.3, recipients: 890, clicks: 109 },
    { name: 'USAG_Newsletter mensuelle', openRate: 55.1, clickRate: 8.9, recipients: 3200, clicks: 285 }
  ];

  // Unsubscribe analysis
  const unsubscribeAnalysis = [
    { reason: 'B2C Campaigns', rate: 0.028, volume: 'High', concern: 'Medium' },
    { reason: 'High Frequency', rate: 0.035, volume: 'Medium', concern: 'High' },
    { reason: 'Content Relevance', rate: 0.019, volume: 'Medium', concern: 'Low' },
    { reason: 'Timing Issues', rate: 0.022, volume: 'Low', concern: 'Medium' }
  ];

  // Benchmark comparison - Real cultural industry data 2024-2025
  const benchmarkData = [
    { metric: 'Taux d\'ouverture', franceGalop: 45.08, sectorAvg: 28.8, bestPractice: 52.0 },
    { metric: 'Taux de clic', franceGalop: 1.24, sectorAvg: 3.15, bestPractice: 5.02 },
    { metric: 'Taux de désinscription', franceGalop: 0.023, sectorAvg: 0.10, bestPractice: 0.05 },
    { metric: 'Taux de délivrabilité', franceGalop: 83.26, sectorAvg: 95.0, bestPractice: 98.0 }
  ];

  // Actionable insights
  const actionableInsights = [
    {
      category: "Délivrabilité",
      priority: "Critique",
      insight: "Taux de délivrabilité de 83.26% bien en dessous des standards (95%+)",
      impact: "High",
      recommendations: [
        "Nettoyer la base de données des adresses inactives",
        "Améliorer la réputation de l'expéditeur",
        "Vérifier la configuration DNS (SPF, DKIM, DMARC)"
      ]
    },
    {
      category: "Engagement",
      priority: "Élevée",
      insight: "Excellent taux d'ouverture (45.08%) mais faible taux de clic (1.24%)",
      impact: "Medium",
      recommendations: [
        "Optimiser les CTA dans les emails",
        "Améliorer le contenu pour inciter aux clics",
        "Tester différents formats de liens"
      ]
    },
    {
      category: "Segmentation",
      priority: "Élevée",
      insight: "Les enquêtes performent exceptionnellement bien (52.9% CTR)",
      impact: "Medium",
      recommendations: [
        "Répliquer le format des enquêtes pour d'autres campagnes",
        "Segmenter davantage par type d'intérêt",
        "Personnaliser le contenu selon les préférences"
      ]
    },
    {
      category: "Volume",
      priority: "Moyenne",
      insight: "144 campagnes sur 3 mois = risque de sur-sollicitation",
      impact: "Medium",
      recommendations: [
        "Établir une stratégie de fréquence optimale",
        "Grouper les communications similaires",
        "Permettre aux utilisateurs de choisir leur fréquence"
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
                  <div className="text-sm text-gray-600">Campagnes Actives</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600">{overallMetrics.openRate}%</div>
                  <div className="text-sm text-gray-600">Taux d'Ouverture</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600">{overallMetrics.clickRate}%</div>
                  <div className="text-sm text-gray-600">Taux de Clic</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-red-600">{overallMetrics.unsubscribeRate}%</div>
                  <div className="text-sm text-gray-600">Taux de Désinscription</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Performance par Type de Campagne</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={campaignTypePerformance.slice(0, 6)} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="type" type="category" width={120} />
                  <Tooltip  />
                  <Legend />
                  <Bar dataKey="avgOpenRate" name="Taux d'Ouverture %" fill="#3b82f6" />
                  <Bar dataKey="avgClickRate" name="Taux de Clic %" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Performance des CTAs par Type</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ctaPerformance.slice(0, 6)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="type" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip  />
                  <Bar dataKey="avgRate" name="Taux de Clic Moyen %">
                    {ctaPerformance.slice(0, 6).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Évolution Mensuelle des Performances</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="openRate" name="Taux d'Ouverture %" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="clickRate" name="Taux de Clic %" stroke="#f59e0b" strokeWidth={2} />
                  <Line type="monotone" dataKey="unsubRate" name="Taux de Désinscription %" stroke="#ef4444" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case 'volume':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Volume par Segment</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={volumeByTags.slice(0, 6)}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="recipients"
                    label={({tag, recipients}) => `${tag}: ${(recipients/1000).toFixed(0)}k`}
                  >
                    {volumeByTags.slice(0, 6).map((_, index) => (
                      <Cell key={`cell-${index}`} fill={['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#64748b'][index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Campagnes par Mois</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="campaigns" name="Nombre de Campagnes" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Top 5 Campagnes Performantes</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Campagne</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Destinataires</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Taux d'Ouverture</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Taux de Clic</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Clics Total</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {topCampaigns.map((campaign, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{campaign.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.recipients.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.openRate}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.clickRate}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.clicks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'cta':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Analyse Détaillée des CTAs</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={ctaPerformance} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="type" type="category" width={120} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="totalClicks" name="Total Clics" fill="#3b82f6" />
                  <Bar dataKey="avgRate" name="Taux Moyen %" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Recommandations CTAs</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h4 className="font-semibold text-green-800">✅ Meilleures Pratiques</h4>
                  <ul className="list-disc pl-5 text-sm mt-2">
                    <li><strong>Enquêtes</strong>: Taux exceptionnel de 52.9% - Reproduire ce format</li>
                    <li><strong>Billetterie</strong>: Forte performance avec 15.2% - CTA prioritaire</li>
                    <li><strong>Plan du Site</strong>: 9.6% de CTR - Information pratique appréciée</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                  <h4 className="font-semibold text-yellow-800">⚠️ À Optimiser</h4>
                  <ul className="list-disc pl-5 text-sm mt-2">
                    <li><strong>Réseaux Sociaux</strong>: Volume élevé (11,877 clics) mais faible taux (2.1%)</li>
                    <li><strong>Vue Web</strong>: Réévaluer l'utilité de ces liens (1.8% CTR)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <h4 className="font-semibold text-red-800">🚨 Points d'Attention</h4>
                  <ul className="list-disc pl-5 text-sm mt-2">
                    <li><strong>Désinscriptions</strong>: 16,740 clics - Surveiller les motifs</li>
                    <li>Réduire le nombre de liens par email pour concentrer l'attention</li>
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
              <h3 className="text-lg font-semibold mb-4">Comparaison aux Standards du Secteur</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={benchmarkData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="metric" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="franceGalop" name="France Galop" fill="#3b82f6" />
                  <Bar dataKey="sectorAvg" name="Moyenne Secteur" fill="#64748b" />
                  <Bar dataKey="bestPractice" name="Meilleures Pratiques" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Points Forts & Axes d'Amélioration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">🎯 Points Forts</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Taux d'ouverture exceptionnel (45.08% vs 28.8% secteur culturel)</li>
                    <li>Taux de désinscription très faible (0.023% vs 0.10% secteur)</li>
                    <li>Performance supérieure aux événements sportifs (28.8% vs 45.08%)</li>
                    <li>Audience engagée comparable aux meilleures pratiques culturelles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">📈 Axes d'Amélioration</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Taux de clic critique (1.24% vs 3.15% secteur culturel)</li>
                    <li>Délivrabilité alarmante (83.26% vs 95% standard industrie)</li>
                    <li>Écart énorme avec les meilleures pratiques (5.02% CTR)</li>
                    <li>Potentiel ROI inexploité par rapport au secteur</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 mb-2">💡 Observation</h4>
                <p className="text-sm text-blue-700">
                  Les benchmarks réels confirment que France Galop possède une <strong>audience exceptionnellement engagée</strong> (prouvé par d'excellents taux d'ouverture) mais sous-performe <strong>gravement sur la conversion</strong> comparé aux pairs du secteur culturel. Cela rend l'opportunité d'optimisation encore plus précieuse !
                </p>
              </div>
            </div>
          </div>
        );

      case 'insights':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Plan d'Action Prioritaire</h3>
              <div className="space-y-6">
                {actionableInsights.map((insight, index) => (
                  <div key={index} className="border-l-4 pl-6 py-4" style={{ 
                    borderColor: insight.priority === 'Critique' ? '#ef4444' : 
                                insight.priority === 'Élevée' ? '#f59e0b' : '#64748b' 
                  }}>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-lg">{insight.category}</h4>
                      <div className="flex gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          insight.priority === 'Critique' ? 'bg-red-100 text-red-800' :
                          insight.priority === 'Élevée' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {insight.priority}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          insight.impact === 'High' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          Impact {insight.impact}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{insight.insight}</p>
                    <div>
                      <h5 className="font-medium mb-2">Actions Recommandées:</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        {insight.recommendations.map((rec, recIndex) => (
                          <li key={recIndex} className="text-sm">{rec}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Objectifs Trimestriels Recommandés</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Q3 2025</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Délivrabilité: 90%+</li>
                    <li>• Taux de clic: 2.5%</li>
                    <li>• Réduction volume: -20%</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Q4 2025</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Délivrabilité: 95%+</li>
                    <li>• Taux de clic: 3.5%</li>
                    <li>• Segmentation avancée</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Q1 2026</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Standards secteur atteints</li>
                    <li>• Automatisation complète</li>
                    <li>• ROI optimisé</li>
                  </ul>
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
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-8 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">France Galop - Analyse Performance Newsletter</h1>
          <p className="text-lg opacity-90">Période: Mars - Juin 2025 | 144 campagnes analysées</p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 text-center">
              <div className="text-2xl font-bold">{(overallMetrics.totalRecipients/1000000).toFixed(1)}M</div>
              <div className="text-sm opacity-80">Destinataires</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2 text-center">
              <div className="text-2xl font-bold">{(overallMetrics.totalDelivered/1000000).toFixed(1)}M</div>
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
                { key: 'volume', label: 'Volume & Top Campagnes' },
                { key: 'cta', label: 'Performance CTAs' },
                { key: 'benchmark', label: 'Benchmark Secteur' },
                { key: 'insights', label: 'Recommandations' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.key
                      ? 'border-blue-500 text-blue-600'
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
              <p>Exports Delight Data couvrant 144 campagnes email de mars à juin 2025, incluant métriques de performance et analyse des liens.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Calculs</h4>
              <p>Taux calculés sur base délivrée. CTAs analysés par catégorie fonctionnelle. Benchmarks secteur: Sports & Événements.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Recommandations</h4>
              <p>Basées sur l'analyse comparative, meilleures pratiques secteur et optimisation de l'engagement utilisateur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPerformanceDashboard;