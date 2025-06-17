import  { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, PieChart, Pie, LineChart, Line } from 'recharts';

const TheaterSentimentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Overall sentiment data
  const overallSentiment = [
    { name: 'Très Positif (5)', value: 86.0, color: '#22c55e' },
    { name: 'Positif (4)', value: 10.2, color: '#65a30d' },
    { name: 'Neutre (3)', value: 2.2, color: '#f59e0b' },
    { name: 'Négatif (2)', value: 0.9, color: '#ef4444' },
    { name: 'Très Négatif (1)', value: 0.6, color: '#b91c1c' }
  ];

  // Component ratings
  const componentRatings = [
    { name: 'Les comédiens', value: 89.0 },
    { name: 'La mise en scène', value: 87.5 },
    { name: 'L\'histoire', value: 79.3 },
    { name: 'Le texte, les dialogues', value: 76.6 },
    { name: 'Le décor', value: 56.3 }
  ];

  // Feedback topic distribution
  const feedbackTopics = [
    { name: 'Confort des sièges', value: 25.1, sentiment: { positive: 5, negative: 78, neutral: 17 } },
    { name: 'Acoustique/Son', value: 15.0, sentiment: { positive: 10, negative: 70, neutral: 20 } },
    { name: 'Visibilité', value: 14.6, sentiment: { positive: 5, negative: 75, neutral: 20 } },
    { name: 'Prix', value: 10.1, sentiment: { positive: 5, negative: 65, neutral: 30 } },
    { name: 'Contenu de la pièce', value: 9.8, sentiment: { positive: 45, negative: 25, neutral: 30 } },
    { name: 'Bar/Boissons', value: 7.9, sentiment: { positive: 10, negative: 60, neutral: 30 } },
    { name: 'Mise en scène/Décor', value: 6.2, sentiment: { positive: 40, negative: 20, neutral: 40 } },
    { name: 'Toilettes', value: 4.7, sentiment: { positive: 5, negative: 75, neutral: 20 } }
  ];

  // Visitor ratings comparison
  const visitorRatings = [
    { name: 'Note de la pièce', new: 4.82, returning: 4.77 },
    { name: 'Note de l\'expérience', new: 4.30, returning: 4.34 },
    { name: 'Note du personnel', new: 4.57, returning: 4.59 }
  ];

  // Marketing channel effectiveness
  const marketingData = [
    { name: 'Bouche à oreille', usage: 42.2, rating: 4.80 },
    { name: 'Média télévisé', usage: 14.4, rating: 4.83 },
    { name: 'Affichage publicitaire', usage: 12.3, rating: 4.76 },
    { name: 'Sites de billetterie', usage: 10.1, rating: 4.79 },
    { name: 'Réseaux sociaux', usage: 9.8, rating: 4.85 },
    { name: 'Média radio', usage: 8.8, rating: 4.79 },
    { name: 'Média papier', usage: 8.0, rating: 4.72 },
    { name: 'Publicité digitale', usage: 3.0, rating: 4.87 },
    { name: 'Newsletter', usage: 2.1, rating: 4.81 }
  ];

  // Transportation mode impact on experience
  const transportData = [
    { name: 'À vélo', rating: 4.39 },
    { name: 'À pieds', rating: 4.35 },
    { name: 'Transport en commun', rating: 4.31 },
    { name: 'Voiture', rating: 4.29 },
    { name: 'Taxi ou VTC', rating: 4.17 }
  ];

  // Key findings and correlations
  const correlationsData = [
    { name: 'Service personnel → Expérience', value: 0.85, description: 'Forte corrélation entre le service du personnel et l\'expérience globale' },
    { name: 'Expérience → Note de la pièce', value: 0.75, description: 'Forte relation entre l\'expérience du lieu et l\'appréciation de la pièce' },
    { name: 'Première visite vs Habitués', value: 0.05, description: 'Différence minimale entre les notes des nouveaux visiteurs et des habitués' },
    { name: 'Mode de transport → Expérience', value: 0.22, description: 'Impact léger du mode de transport sur l\'expérience globale' }
  ];

  // Sample key feedback
  const keyFeedback = {
    seating: [
      { text: "Je sais que c'est dur mais si c'est possible ajuster les niveau des sièges pour que tout le monde puisse voire le spectacle de façon correct.", sentiment: "neutral" },
      { text: "Il est important d'avertir que certaines places ont très peu de place pour les jambes !!!!", sentiment: "negative" },
      { text: "Nous étions au 1er balcon sans aucun espace pour les jambes. Plus jamais! Pour un prix assez conséquent qui plus est.", sentiment: "negative" }
    ],
    acoustics: [
      { text: "Interdire le replacement quand le spectacle commence n'est pas une bonne idée, surtout pour les places qui se trouvent au centre.", sentiment: "negative" },
      { text: "Pas toujours facile d'entendre les comédiens dans les premiers rangs de l'orchestre.", sentiment: "negative" },
      { text: "Avoir un système d'amplification pour certains acteurs qui parlent doucement.", sentiment: "neutral" }
    ],
    amenities: [
      { text: "Peut-être un endroit sympa pour attendre", sentiment: "neutral" },
      { text: "Le contrôle des billets à l'entrée est à fluidifier ; pensez à nettoyer les toilettes ; vidange du théâtre très lente : quid en cas d'incendie", sentiment: "negative" },
      { text: "Oui, pouvoir payer le livre Passeport (disponible en fin de spectacle) en carte bancaire (plutôt qu'uniquement en espèces)", sentiment: "neutral" }
    ],
    content: [
      { text: "La pièce n'approfondit pas le sujet. C'est un peu \"les migrants pour les nuls\"", sentiment: "negative" },
      { text: "Pièce puissante et d'utilité publique !", sentiment: "positive" },
      { text: "Excellent, tout était très bien, acteurs impeccables, jeu irréprochable, texte touchant", sentiment: "positive" }
    ]
  };

  // Play vs venue experience correlation data
  const experienceCorrelation = [
    { venue: 1, play: 3.88 },
    { venue: 2, play: 4.30 },
    { venue: 3, play: 4.54 },
    { venue: 4, play: 4.78 },
    { venue: 5, play: 4.92 }
  ];

  // Staff impact on experience
  const staffImpact = [
    { staff: 1, experience: 2.50 },
    { staff: 2, experience: 2.83 },
    { staff: 3, experience: 3.39 },
    { staff: 4, experience: 3.86 },
    { staff: 5, experience: 4.58 }
  ];

  // Recommendation likelihood based on satisfaction
  const recommendationData = [
    { rating: 5, recommends: 99.2 },
    { rating: 4, recommends: 78.5 },
    { rating: 3, recommends: 35.2 },
    { rating: 2, recommends: 9.3 },
    { rating: 1, recommends: 3.4 }
  ];

  // Actionable insights
  const actionableInsights = [
    { 
      category: "Confort du lieu",
      priority: "Élevée",
      insight: "Confort des sièges, particulièrement l'espace pour les jambes au balcon",
      sentiment: -78,
      recommendations: [
        "Ajouter des notifications claires concernant les limitations d'espace lors de la vente des billets pour le balcon",
        "Envisager des rénovations pour améliorer l'espace pour les jambes dans les zones les plus critiquées",
        "Proposer des réductions pour les sièges à visibilité restreinte ou à espace limité"
      ]
    },
    { 
      category: "Acoustique",
      priority: "Élevée",
      insight: "Problèmes sonores dans certaines zones de places",
      sentiment: -70,
      recommendations: [
        "Revoir le système audio et l'acoustique dans les zones problématiques",
        "Envisager une amplification discrète des microphones pour les comédiens plus discrets",
        "Former les acteurs à projeter leur voix plus efficacement vers toutes les zones"
      ]
    },
    { 
      category: "Accueil",
      priority: "Moyenne",
      insight: "Congestion à l'entrée et entretien des toilettes",
      sentiment: -60,
      recommendations: [
        "Améliorer les procédures d'entrée, en particulier le scan des billets",
        "Augmenter la fréquence de nettoyage des toilettes pendant les représentations",
        "Créer de meilleures zones d'attente pour le public avant l'ouverture des portes"
      ]
    },
    { 
      category: "Prix/Paiement",
      priority: "Moyenne",
      insight: "Options de paiement pour les produits dérivés et transparence des prix des billets",
      sentiment: -50,
      recommendations: [
        "Ajouter des options de paiement par carte pour les produits dérivés et l'achat de programmes",
        "Améliorer la transparence des prix concernant les limitations des sièges",
        "Envisager des programmes de réduction pour étudiants/jeunes"
      ]
    }
  ];

  // Render tab content
  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Sentiment global sur la pièce</h3>
              <div className="text-sm text-gray-500 mb-2">Distribution des notes pour "Avez-vous aimé la pièce ?"</div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={overallSentiment}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
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
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Éléments les plus appréciés</h3>
              <div className="text-sm text-gray-500 mb-2">Pourcentage du public ayant souligné ces éléments</div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={componentRatings.sort((a, b) => b.value - a.value)}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value) => `${value}%`} />
                  <YAxis dataKey="name" type="category" width={150} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="value" fill="#3b82f6">
                    {componentRatings.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={index === 0 ? '#22c55e' : index === 1 ? '#16a34a' : index === 2 ? '#4ade80' : index === 3 ? '#22d3ee' : '#60a5fa'} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Indicateurs de performance clés</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-4xl font-bold text-blue-600">97,3%</div>
                  <div className="text-sm text-gray-600">Recommanderaient</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-4xl font-bold text-green-600">4,8/5</div>
                  <div className="text-sm text-gray-600">Note de la pièce</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-4xl font-bold text-purple-600">4,3/5</div>
                  <div className="text-sm text-gray-600">Expérience du lieu</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <div className="text-4xl font-bold text-amber-600">4,6/5</div>
                  <div className="text-sm text-gray-600">Service du personnel</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Principales catégories de retours</h3>
              <div className="text-sm text-gray-500 mb-2">Distribution des suggestions et commentaires par thème</div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={feedbackTopics.sort((a, b) => b.value - a.value)}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value) => `${value}%`} />
                  <YAxis dataKey="name" type="category" width={120} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="value" fill="#f59e0b">
                    {feedbackTopics.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.sentiment.negative > 60 ? '#ef4444' : entry.sentiment.negative > 40 ? '#f59e0b' : '#22c55e'} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
        
      case 'audience':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Nouveaux vs. Spectateurs habitués</h3>
              <div className="text-sm text-gray-500 mb-2">56,4% première visite, 43,6% visiteurs habitués</div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={visitorRatings}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[3.5, 5]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="new" name="Première visite" fill="#3b82f6" />
                  <Bar dataKey="returning" name="Visiteurs habitués" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>Les spectateurs venant pour la première fois ont noté la pièce légèrement plus haut (4,82 contre 4,77), tandis que les visiteurs habitués ont évalué l'expérience du lieu légèrement mieux (4,34 contre 4,30).</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Efficacité des canaux marketing</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={marketingData.sort((a, b) => b.usage - a.usage).slice(0, 6)}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" tickFormatter={(value) => `${value}%`} />
                  <YAxis yAxisId="right" orientation="right" domain={[4.6, 5.0]} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="usage" name="Utilisation %" fill="#3b82f6" />
                  <Line yAxisId="right" type="monotone" dataKey="rating" name="Note moyenne" stroke="#ef4444" strokeWidth={2} />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>Le bouche à oreille domine l'acquisition de public (42,2%), tandis que les réseaux sociaux génèrent les notes de satisfaction les plus élevées (4,85/5).</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Impact du mode de transport sur l'expérience</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart
                  data={transportData.sort((a, b) => b.rating - a.rating)}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[4, 4.5]} />
                  <Tooltip />
                  <Bar dataKey="rating" name="Note moyenne d'expérience" fill="#3b82f6">
                    {transportData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#22c55e' : index === 1 ? '#16a34a' : '#3b82f6'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <ul className="list-disc pl-5">
                  <li>Les cyclistes ont rapporté la satisfaction la plus élevée (4,39/5)</li>
                  <li>Le transport en commun était le mode de transport le plus courant (68,6%)</li>
                  <li>Les utilisateurs de taxi/VTC ont rapporté la satisfaction la plus basse (4,17/5)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Analyse de l'intérêt pour les abonnements</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Pas intéressé', value: 59.1, color: '#94a3b8' },
                      { name: 'Intéressé', value: 6.6, color: '#3b82f6' },
                      { name: 'Autre/Pas clair', value: 24.5, color: '#e2e8f0' },
                      { name: 'Pas de réponse', value: 9.8, color: '#f1f5f9' }
                    ]}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={80}
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
                <p>Parmi les personnes intéressées par les abonnements, les tarifs les plus fréquemment mentionnés étaient :</p>
                <ul className="list-disc pl-5">
                  <li>100€ (8 mentions)</li>
                  <li>200€ (6 mentions)</li>
                  <li>150€ (5 mentions)</li>
                  <li>50€ (4 mentions)</li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'correlations':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Note de la pièce vs. Expérience du lieu</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={experienceCorrelation}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="venue" label={{ value: 'Note expérience du lieu', position: 'insideBottomRight', offset: -10 }} />
                  <YAxis domain={[3.5, 5]} label={{ value: 'Note de la pièce', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="play" name="Note de la pièce" stroke="#3b82f6" strokeWidth={2} dot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>Forte corrélation positive entre l'expérience du lieu et la note de la pièce. Une augmentation d'un point dans la note du lieu correspond à environ 0,25 point d'augmentation dans la note de la pièce.</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Impact du service du personnel sur l'expérience</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={staffImpact}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="staff" label={{ value: 'Note du service personnel', position: 'insideBottomRight', offset: -10 }} />
                  <YAxis domain={[2, 5]} label={{ value: 'Expérience du lieu', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="experience" name="Expérience du lieu" stroke="#22c55e" strokeWidth={2} dot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>Très forte corrélation entre la qualité du service du personnel et l'expérience globale du lieu. Les interactions avec le personnel peuvent être le facteur le plus influent dans la perception du lieu par le public.</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Probabilité de recommandation vs. Note</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={recommendationData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="rating" label={{ value: 'Note de la pièce', position: 'insideBottomRight', offset: -10 }} />
                  <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} label={{ value: 'Recommanderaient', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Line type="monotone" dataKey="recommends" name="Recommanderaient" stroke="#f59e0b" strokeWidth={2} dot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>Presque toutes les notes 5 étoiles (99,2%) se traduisent par des recommandations, tandis que la probabilité chute considérablement en dessous de 4 étoiles. Les notes 3 étoiles n'ont qu'un taux de recommandation de 35,2%.</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Corrélations de performance clés</h3>
              <div className="space-y-4">
                {correlationsData.map((item, index) => (
                  <div key={index} className="border-l-4 pl-4 py-2" style={{ borderColor: item.value > 0.7 ? '#22c55e' : item.value > 0.4 ? '#f59e0b' : '#94a3b8' }}>
                    <div className="flex justify-between">
                      <p className="font-medium">{item.name}</p>
                      <p className="font-medium">{item.value.toFixed(2)}</p>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'feedback':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Retours sur les sièges & la visibilité</h3>
              <div className="space-y-4 mt-4">
                {keyFeedback.seating.map((item, index) => (
                  <div key={index} className="border-l-4 pl-4 py-2" style={{ 
                    borderColor: item.sentiment === 'positive' ? '#22c55e' : 
                                item.sentiment === 'negative' ? '#ef4444' : 
                                item.sentiment === 'mixed' ? '#f59e0b' : '#94a3b8'
                  }}>
                    <p className="text-sm">"{item.text}"</p>
                    <p className="text-xs mt-1 capitalize" style={{ 
                      color: item.sentiment === 'positive' ? '#22c55e' : 
                             item.sentiment === 'negative' ? '#ef4444' : 
                             item.sentiment === 'mixed' ? '#f59e0b' : '#94a3b8'
                    }}>
                      {item.sentiment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Retours sur l'acoustique & le son</h3>
              <div className="space-y-4 mt-4">
                {keyFeedback.acoustics.map((item, index) => (
                  <div key={index} className="border-l-4 pl-4 py-2" style={{ 
                    borderColor: item.sentiment === 'positive' ? '#22c55e' : 
                                item.sentiment === 'negative' ? '#ef4444' : 
                                item.sentiment === 'mixed' ? '#f59e0b' : '#94a3b8'
                  }}>
                    <p className="text-sm">"{item.text}"</p>
                    <p className="text-xs mt-1 capitalize" style={{ 
                      color: item.sentiment === 'positive' ? '#22c55e' : 
                             item.sentiment === 'negative' ? '#ef4444' : 
                             item.sentiment === 'mixed' ? '#f59e0b' : '#94a3b8'
                    }}>
                      {item.sentiment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Retours sur les équipements du lieu</h3>
              <div className="space-y-4 mt-4">
                {keyFeedback.amenities.map((item, index) => (
                  <div key={index} className="border-l-4 pl-4 py-2" style={{ 
                    borderColor: item.sentiment === 'positive' ? '#22c55e' : 
                                item.sentiment === 'negative' ? '#ef4444' : 
                                item.sentiment === 'mixed' ? '#f59e0b' : '#94a3b8'
                  }}>
                    <p className="text-sm">"{item.text}"</p>
                    <p className="text-xs mt-1 capitalize" style={{ 
                      color: item.sentiment === 'positive' ? '#22c55e' : 
                             item.sentiment === 'negative' ? '#ef4444' : 
                             item.sentiment === 'mixed' ? '#f59e0b' : '#94a3b8'
                    }}>
                      {item.sentiment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Retours sur le contenu & la performance</h3>
              <div className="space-y-4 mt-4">
                {keyFeedback.content.map((item, index) => (
                  <div key={index} className="border-l-4 pl-4 py-2" style={{ 
                    borderColor: item.sentiment === 'positive' ? '#22c55e' : 
                                item.sentiment === 'negative' ? '#ef4444' : 
                                item.sentiment === 'mixed' ? '#f59e0b' : '#94a3b8'
                  }}>
                    <p className="text-sm">"{item.text}"</p>
                    <p className="text-xs mt-1 capitalize" style={{ 
                      color: item.sentiment === 'positive' ? '#22c55e' : 
                             item.sentiment === 'negative' ? '#ef4444' : 
                             item.sentiment === 'mixed' ? '#f59e0b' : '#94a3b8'
                    }}>
                      {item.sentiment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'insights':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Zones d'amélioration prioritaires</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priorité</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Observation clé</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sentiment</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {actionableInsights.map((insight, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{insight.category}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            insight.priority === 'High' ? 'bg-red-100 text-red-800' :
                            insight.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {insight.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">{insight.insight}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-red-600 h-2.5 rounded-full" style={{ width: `${Math.abs(insight.sentiment)}%` }}></div>
                          </div>
                          <span className="text-xs">{insight.sentiment}% négatif</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Actions recommandées</h3>
              
              <div className="space-y-6 mt-4">
                {actionableInsights.map((insight, index) => (
                  <div key={index}>
                    <h4 className="font-medium mb-2">{insight.category}</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {insight.recommendations.map((rec, recIndex) => (
                        <li key={recIndex} className="text-sm">{rec}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Insights marketing clés</h3>
              
              <div className="space-y-4 mt-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-medium">Domination du bouche à oreille</h4>
                  <p className="text-sm text-gray-600">42,2% des spectateurs sont venus par bouche à oreille, ce qui indique une forte promotion organique. Encouragez le partage en mettant en place un programme de réduction "Amenez un ami".</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <h4 className="font-medium">Efficacité des réseaux sociaux</h4>
                  <p className="text-sm text-gray-600">Les réseaux sociaux (9,8% du public) ont généré les notes de satisfaction les plus élevées (4,85/5). Envisagez d'augmenter l'investissement dans le marketing sur les réseaux sociaux avec des campagnes ciblées.</p>
                </div>
                
                <div className="border-l-4 border-amber-500 pl-4 py-2">
                  <h4 className="font-medium">Opportunité de croissance pour la newsletter</h4>
                  <p className="text-sm text-gray-600">Seulement 2,1% des spectateurs sont venus via la newsletter, mais ils ont montré une satisfaction élevée (4,81/5). Mettez en œuvre des stratégies pour développer votre base d'abonnés à la newsletter.</p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-4 py-2">
                  <h4 className="font-medium">Conversion des nouveaux visiteurs</h4>
                  <p className="text-sm text-gray-600">56,4% étaient des visiteurs pour la première fois avec une satisfaction élevée (4,82/5). Créez des offres spéciales de retour pour les convertir en spectateurs réguliers.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Recommandations de stratégie d'abonnement</h3>
              
              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="font-medium">Stratégie de tarification</h4>
                  <p className="text-sm text-gray-600">Selon les retours du public, envisagez un modèle d'abonnement à trois niveaux :</p>
                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
                    <li><span className="font-medium">Basique : 50-100€</span> - Représentations limitées, places standard</li>
                    <li><span className="font-medium">Premium : 150€</span> - Plus de représentations, meilleures options de places</li>
                    <li><span className="font-medium">Elite : 200€</span> - Toutes les représentations, places premium, événements spéciaux</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium">Stratégie de ciblage</h4>
                  <p className="text-sm text-gray-600">Concentrez le marketing d'abonnement sur :</p>
                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
                    <li>Les visiteurs habitués (43,6% du public) qui montrent déjà leur fidélité</li>
                    <li>Les nouveaux visiteurs très satisfaits (notes 5 étoiles)</li>
                    <li>Les résidents locaux qui utilisent les transports en commun ou viennent à pied</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium">Propositions de valeur supplémentaires</h4>
                  <p className="text-sm text-gray-600">Pour augmenter l'attrait de l'abonnement, envisagez d'ajouter :</p>
                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
                    <li>Places garanties avec un espace suffisant pour les jambes</li>
                    <li>Événements exclusifs avant le spectacle avec les metteurs en scène ou les acteurs</li>
                    <li>Programme gratuit ou bons pour des boissons</li>
                    <li>Réservation prioritaire pour les nouveaux spectacles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-purple-700 text-white p-6 rounded-t-lg">
          <h1 className="text-2xl font-bold">Théâtre de la Renaissance</h1>
          <h2 className="text-xl">Analyse des Sentiments : "Passeport"</h2>
          <p className="text-sm mt-2">Analyse basée sur 4 705 réponses au questionnaire des spectateurs</p>
        </div>
        
        <div className="bg-white p-4 shadow mb-6 flex flex-wrap gap-2 overflow-x-auto">
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'overview' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('overview')}
          >
            Vue d'ensemble
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'audience' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('audience')}
          >
            Analyse du public
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'correlations' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('correlations')}
          >
            Corrélations clés
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'feedback' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('feedback')}
          >
            Retours du public
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'insights' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('insights')}
          >
            Recommandations
          </button>
        </div>
        
        <div className="mb-6">
          {renderContent()}
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Méthodologie d'analyse</h3>
          <p className="text-sm text-gray-600">
            Cette analyse de sentiment est basée sur 4 705 questionnaires post-représentation collectés auprès des spectateurs de "Passeport" au Théâtre de la Renaissance. L'analyse inclut des évaluations quantitatives (échelle de 1 à 5) sur plusieurs aspects de l'expérience ainsi que des commentaires qualitatifs classés par thème et sentiment. Des corrélations clés ont été identifiées entre différents aspects de l'expérience du public pour prioriser les domaines d'amélioration et les opportunités. Les sentiments ont été classés comme positifs, négatifs, neutres ou mixtes sur la base d'une analyse linguistique des réponses aux questions ouvertes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheaterSentimentDashboard;