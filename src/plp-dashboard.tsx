import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, PieChart, Pie, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line } from 'recharts';

const TheatreSentimentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Note distribution data
  const noteDistribution = [
    { name: '10', value: 46.7, color: '#15803d' },
    { name: '9', value: 25.1, color: '#22c55e' },
    { name: '8', value: 17.0, color: '#4ade80' },
    { name: '7', value: 6.3, color: '#86efac' },
    { name: '6', value: 1.8, color: '#a3e635' },
    { name: '5', value: 0.9, color: '#fde047' },
    { name: '4', value: 0.6, color: '#fdba74' },
    { name: '3', value: 0.6, color: '#fb923c' },
    { name: '2', value: 0.6, color: '#f97316' },
    { name: '1', value: 0.4, color: '#ea580c' }
  ];
  
  // Sentiment distribution data
  const reasonsSentiment = [
    { name: 'Positif', value: 54.8, color: '#22c55e' },
    { name: 'Neutre', value: 42.6, color: '#64748b' },
    { name: 'Négatif', value: 2.6, color: '#ef4444' }
  ];
  
  const messagesSentiment = [
    { name: 'Positif', value: 80.2, color: '#22c55e' },
    { name: 'Neutre', value: 18.8, color: '#64748b' },
    { name: 'Négatif', value: 1.1, color: '#ef4444' }
  ];
  
  // Communication channels data
  const channelsData = [
    { name: 'Télévision', value: 26.5, rating: 9.06 },
    { name: 'Presse', value: 23.3, rating: 8.91 },
    { name: 'Email Théâtre', value: 17.5, rating: 9.14 },
    { name: 'Affichage', value: 13.0, rating: 8.54 },
    { name: 'Billetterie', value: 10.6, rating: 9.07 },
    { name: 'Radio', value: 9.6, rating: 8.84 },
    { name: 'Facebook', value: 4.7, rating: 9.33 },
    { name: 'Instagram', value: 4.0, rating: 9.32 }
  ];
  
  // Themes mentioned in reasons
  const themesReasons = [
    { name: 'Jeu des acteurs', value: 57.0 },
    { name: 'Texte/Histoire', value: 40.7 },
    { name: 'Humour/Comédie', value: 29.0 },
    { name: 'Rythme', value: 20.4 },
    { name: 'Mise en scène', value: 14.8 },
    { name: 'Émotions', value: 0.1 }
  ];
  
  // Themes mentioned in messages to actors
  const themesMessages = [
    { name: 'Jeu des acteurs', value: 20.8 },
    { name: 'Rythme', value: 13.6 },
    { name: 'Humour/Comédie', value: 13.1 },
    { name: 'Texte/Histoire', value: 10.9 },
    { name: 'Mise en scène', value: 2.8 },
    { name: 'Émotions', value: 0.2 }
  ];
  
  // Sample key quotes from audience
  const keyQuotes = {
    positive: [
      { text: "J'ai adoré", sentiment: "positive" },
      { text: "C'est très drôle, bien écrit et bien joué.", sentiment: "positive" },
      { text: "Super pièce très bien joué cela fait du bien de rire merci", sentiment: "positive" },
      { text: "J'ai beaucoup aimé", sentiment: "positive" },
      { text: "Excellent moment. Je recommande! Merci", sentiment: "positive" }
    ],
    negative: [
      { text: "Je trouve que la mise en scène avec les changements de structure entre chaque scene apporte cependant de la lourdeur.", sentiment: "negative" },
      { text: "Un peu trop long", sentiment: "negative" },
      { text: "Certains passages sont un peu trop prévisibles", sentiment: "negative" }
    ],
    messages: [
      { text: "Bravo ! Vous nous avez bien fait rire !", sentiment: "positive" },
      { text: "Vous avez été extraordinaires 👍👏", sentiment: "positive" },
      { text: "Félicitations et merci pour cette belle expérience !", sentiment: "positive" },
      { text: "Vous avez été excellents.", sentiment: "positive" },
      { text: "Merci pour ce très bon moment de rire et de détente !", sentiment: "positive" }
    ]
  };
  
  // Key insights data
  const keyInsights = [
    { 
      title: "Réception très positive",
      description: "Le spectacle a reçu une note moyenne exceptionnelle de 8,94/10, avec 88,8% des spectateurs donnant une note de 8 ou plus.",
      icon: "🏆",
      color: "#22c55e"
    },
    { 
      title: "Force du jeu d'acteurs",
      description: "57% des commentaires mentionnent spécifiquement la qualité du jeu des acteurs, ce qui en fait l'élément le plus apprécié.",
      icon: "🎭",
      color: "#8b5cf6"
    },
    { 
      title: "Efficacité des réseaux sociaux",
      description: "Bien que représentant seulement 8,7% des sources, Facebook et Instagram génèrent les meilleures notes (9,33 et 9,32).",
      icon: "📱",
      color: "#3b82f6"
    },
    { 
      title: "Humour bien reçu",
      description: "29% des commentaires soulignent l'aspect comique de la pièce, ce qui confirme son efficacité comme comédie.",
      icon: "😄",
      color: "#f59e0b"
    }
  ];
  
  // Recommendations data
  const recommendations = [
    {
      category: "Marketing",
      priority: "Élevée",
      insight: "Potentiel sous-exploité des réseaux sociaux",
      recommendations: [
        "Augmenter l'investissement dans les campagnes Facebook et Instagram qui génèrent les notes les plus élevées malgré leur faible utilisation actuelle",
        "Utiliser des témoignages positifs des spectateurs dans les communications futures",
        "Créer des extraits courts mettant en valeur l'humour pour les réseaux sociaux"
      ]
    },
    {
      category: "Communication",
      priority: "Moyenne",
      insight: "Efficacité variable des canaux traditionnels",
      recommendations: [
        "Maintenir une présence forte à la télévision (26,5% des spectateurs)",
        "Optimiser les campagnes d'affichage qui génèrent les notes les plus basses (8,54/10) mais représentent 13% des sources d'information",
        "Mettre l'accent sur le jeu des acteurs et l'humour dans tous les supports de communication"
      ]
    },
    {
      category: "Production",
      priority: "Faible",
      insight: "Quelques réserves sur la mise en scène et le rythme",
      recommendations: [
        "Évaluer les transitions entre les scènes qui ont été mentionnées comme potentiellement lourdes",
        "Considérer de légères optimisations du rythme dans certains passages",
        "Conserver et mettre en valeur la force du texte et des acteurs"
      ]
    }
  ];
  
  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-300 rounded shadow-md">
          <p className="font-semibold">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color || entry.stroke }}>
              {entry.name}: {entry.value}
              {entry.name.includes('Note') ? '' : '%'}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };
  
  // Render tab content
  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Distribution des notes</h3>
              <div className="text-sm text-gray-500 mb-2">Note moyenne : 8,94/10</div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={noteDistribution.sort((a, b) => parseInt(b.name) - parseInt(a.name))}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" name="Pourcentage" fill="#4ade80">
                    {noteDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Analyse des sentiments</h3>
              <div className="text-sm text-gray-500 mb-2">Basée sur l'analyse textuelle des commentaires</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-center mb-2">Raisons des notes</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={reasonsSentiment}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name, value}) => `${name}: ${value}%`}
                      >
                        {reasonsSentiment.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-center mb-2">Messages aux comédiens</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={messagesSentiment}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name, value}) => `${name}: ${value}%`}
                      >
                        {messagesSentiment.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Insights clés</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {keyInsights.map((insight, index) => (
                  <div key={index} className="border rounded-lg p-4" style={{ borderColor: insight.color }}>
                    <div className="flex items-start mb-2">
                      <span className="text-2xl mr-2">{insight.icon}</span>
                      <h4 className="font-medium">{insight.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{insight.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Thèmes mentionnés</h3>
              <div className="text-sm text-gray-500 mb-2">Dans les raisons des notes</div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={themesReasons.sort((a, b) => b.value - a.value)}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value) => `${value}%`} />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="value" name="Mentions" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Canaux de communication</h3>
              <div className="text-sm text-gray-500 mb-2">Efficacité par source</div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={channelsData.sort((a, b) => b.value - a.value)}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" tickFormatter={(value) => `${value}%`} />
                  <YAxis yAxisId="right" orientation="right" domain={[8, 10]} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="value" name="Utilisation %" fill="#3b82f6" />
                  <Line yAxisId="right" type="monotone" dataKey="rating" name="Note moyenne" stroke="#ef4444" strokeWidth={2} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
        
      case 'channels':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Performance des canaux de communication</h3>
              <div className="text-sm text-gray-500 mb-4">Comparaison entre l'utilisation et l'efficacité</div>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={channelsData.sort((a, b) => b.value - a.value)}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" tickFormatter={(value) => `${value}%`} />
                  <YAxis yAxisId="right" orientation="right" domain={[8, 10]} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="value" name="Utilisation %" fill="#3b82f6" />
                  <Line yAxisId="right" type="monotone" dataKey="rating" name="Note moyenne" stroke="#ef4444" strokeWidth={2} />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>Les réseaux sociaux (Facebook et Instagram) génèrent les notes les plus élevées mais sont les moins utilisés. La télévision reste le canal le plus efficace en termes de portée, tandis que l'affichage montre la note moyenne la plus basse.</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Comparaison des canaux digitaux vs. traditionnels</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={[
                    { name: 'Traditionnels', value: 72.4, rating: 8.84 },
                    { name: 'Digitaux', value: 27.6, rating: 9.22 }
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" tickFormatter={(value) => `${value}%`} />
                  <YAxis yAxisId="right" orientation="right" domain={[8.5, 9.5]} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="value" name="Utilisation %" fill="#8b5cf6" />
                  <Line yAxisId="right" type="monotone" dataKey="rating" name="Note moyenne" stroke="#f59e0b" strokeWidth={2} />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <ul className="list-disc pl-5">
                  <li><span className="font-medium">Traditionnels</span>: TV, Radio, Presse, Affichage</li>
                  <li><span className="font-medium">Digitaux</span>: Email, Réseaux sociaux, Billetterie en ligne</li>
                </ul>
                <p className="mt-2">Bien que les canaux traditionnels dominent en termes d'utilisation, les canaux digitaux génèrent une satisfaction moyenne plus élevée.</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Opportunités d'optimisation</h3>
              <div className="space-y-4">
                <div className="border-l-4 pl-4 py-2 border-blue-500">
                  <h4 className="font-medium">Réseaux sociaux</h4>
                  <p className="text-sm text-gray-600">Potentiel significatif d'augmenter la portée via Facebook et Instagram qui génèrent déjà les meilleures notes (9.33).</p>
                </div>
                <div className="border-l-4 pl-4 py-2 border-yellow-500">
                  <h4 className="font-medium">Affichage</h4>
                  <p className="text-sm text-gray-600">Repenser les campagnes d'affichage qui montrent la satisfaction la plus basse (8.54) tout en représentant une part non négligeable des sources d'information du public (13%).</p>
                </div>
                <div className="border-l-4 pl-4 py-2 border-green-500">
                  <h4 className="font-medium">Communication du théâtre</h4>
                  <p className="text-sm text-gray-600">L'emailing montre de bonnes performances (9.14) et pourrait être étendu pour toucher une audience plus large.</p>
                </div>
                <div className="border-l-4 pl-4 py-2 border-purple-500">
                  <h4 className="font-medium">Billetterie en ligne</h4>
                  <p className="text-sm text-gray-600">Des partenariats renforcés avec les plateformes de billetterie pourraient augmenter la visibilité (actuellement 10.6% mais note de 9.07).</p>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'feedback':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Commentaires positifs (échantillon)</h3>
              <div className="space-y-3 mt-4">
                {keyQuotes.positive.map((quote, index) => (
                  <div key={index} className="border-l-4 pl-4 py-2 border-green-500">
                    <p className="text-sm italic">"{quote.text}"</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Commentaires critiques (échantillon)</h3>
              <div className="space-y-3 mt-4">
                {keyQuotes.negative.map((quote, index) => (
                  <div key={index} className="border-l-4 pl-4 py-2 border-red-500">
                    <p className="text-sm italic">"{quote.text}"</p>
                  </div>
                ))}
                <div className="p-4 bg-gray-50 rounded mt-6">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Note :</span> Les commentaires négatifs représentent seulement 2,6% des retours et concernent principalement le rythme et certains aspects de la mise en scène.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Messages aux comédiens (échantillon)</h3>
              <div className="space-y-3 mt-4">
                {keyQuotes.messages.map((quote, index) => (
                  <div key={index} className="border-l-4 pl-4 py-2 border-purple-500">
                    <p className="text-sm italic">"{quote.text}"</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Thèmes mentionnés dans les messages</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={themesMessages.sort((a, b) => b.value - a.value)}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value) => `${value}%`} />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="value" name="Mentions" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>Les messages aux comédiens se concentrent principalement sur la qualité de leur jeu (20,8%), le rythme de la pièce (13,6%) et l'aspect comique (13,1%). L'absence presque totale de mention des émotions (0,2%) confirme la nature principalement comique de la pièce.</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Comparaison des thèmes : Raisons vs. Messages</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={[...themesReasons.map(item => ({...item, type: 'Raisons'})), ...themesMessages.map(item => ({...item, type: 'Messages'}))]
                    .sort((a, b) => a.name.localeCompare(b.name))}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Bar dataKey="value" name="% Mentions" fill="#8b5cf6" stackId="stack">
                    {[...themesReasons, ...themesMessages].map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.type === 'Raisons' ? '#3b82f6' : '#8b5cf6'} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>Il existe un fort contraste entre les raisons données pour les notes (où le jeu des acteurs, le texte et l'humour dominent) et les messages directs aux comédiens, où l'appréciation est plus équilibrée entre différents aspects de la performance.</p>
              </div>
            </div>
          </div>
        );
        
      case 'recommendations':
        return (
          <div className="grid grid-cols-1 gap-6">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                    rec.priority === 'Élevée' ? 'bg-red-500' : 
                    rec.priority === 'Moyenne' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}></span>
                  <h3 className="text-lg font-semibold">{rec.category} - {rec.insight}</h3>
                  <span className="ml-auto text-sm text-gray-500">Priorité : {rec.priority}</span>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  {rec.recommendations.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Opportunités pour les futures productions</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-blue-600">Capitaliser sur les forces</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                    <li>Mettre en avant la qualité des acteurs et l'aspect comique dans la promotion des futures productions</li>
                    <li>Recueillir et utiliser les témoignages très positifs des spectateurs dans les campagnes marketing</li>
                    <li>Considérer des reprises ou des suites thématiques, vu le fort taux de satisfaction</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-purple-600">Optimiser l'expérience</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                    <li>Simplifier certains aspects de la mise en scène (transitions) pour maintenir le rythme</li>
                    <li>Organiser des rencontres avec les comédiens après certaines représentations, vu l'enthousiasme pour leur jeu</li>
                    <li>Envisager des captations vidéo pour élargir l'audience et créer du contenu pour les réseaux sociaux</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-2 text-green-600">Stratégie marketing à long terme</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  <li>Développer une présence digitale plus forte, notamment sur les réseaux sociaux qui montrent la meilleure efficacité</li>
                  <li>Mettre en place un programme de fidélisation pour encourager les spectateurs satisfaits à revenir</li>
                  <li>Optimiser le contenu des campagnes d'affichage (13% des sources d'information mais note moyenne de seulement 8,54/10) pour mieux refléter la qualité des acteurs et l'aspect comique</li>
                  <li>Créer un contenu exclusif (interviews, coulisses) pour alimenter les canaux digitaux qui montrent une forte corrélation avec la satisfaction</li>
                </ul>
              </div>
            </div>
          </div>
        );
        
      case 'comparisons':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Comparaison des notes par spectacle</h3>
              <div className="text-sm text-gray-500 mb-2">Analyse comparative des 3 productions de Pascal Legros</div>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={[
                    { name: 'La vérité', avgRating: 8.94, highRatings: 88.8 },
                    { name: 'La Famille', avgRating: 7.63, highRatings: 62.8 },
                    { name: 'Mon jour de chance', avgRating: 9.34, highRatings: 95.4 }
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" domain={[0, 10]} />
                  <YAxis yAxisId="right" orientation="right" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="avgRating" name="Note moyenne /10" fill="#f59e0b" />
                  <Bar yAxisId="right" dataKey="highRatings" name="% Notes ≥ 8" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>"Mon jour de chance" obtient la meilleure note moyenne (9,34/10) et le plus haut pourcentage de notes élevées (95,4%), suivi par "La vérité" (8,94/10, 88,8%). "La Famille" montre des résultats moins élevés mais toujours satisfaisants avec une moyenne de 7,63/10.</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Efficacité comparative des canaux de communication</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={[
                    { name: 'La vérité', traditional: 72.4, digital: 27.6 },
                    { name: 'La Famille', traditional: 64.6, digital: 41.3 },
                    { name: 'Mon jour de chance', traditional: 51.0, digital: 43.7 }
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
                  <Legend />
                  <Bar dataKey="traditional" name="Canaux traditionnels" stackId="a" fill="#64748b" />
                  <Bar dataKey="digital" name="Canaux digitaux" stackId="a" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>On observe une tendance à l'augmentation des canaux digitaux et une diminution des canaux traditionnels. "Mon jour de chance", qui a obtenu les meilleures notes, est aussi le spectacle avec la plus forte proportion de canaux digitaux (43,7%) et la plus faible de canaux traditionnels (51,0%).</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Top 3 canaux par spectacle</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium">La vérité</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Télévision: 26,5%</li>
                    <li>Presse: 23,3%</li>
                    <li>Communication du théâtre: 17,5%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium">La Famille</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Télévision: 24,9%</li>
                    <li>Presse: 21,9%</li>
                    <li>Communication du théâtre: 20,3%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Mon jour de chance</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Presse: 21,1%</li>
                    <li>Billetterie en ligne: 19,1%</li>
                    <li>Communication du théâtre: 18,0%</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Statistiques clés</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Spectacle</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Réponses</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Note</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes ≥ 8</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">La vérité</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 106</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8,94/10</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">88,8%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">La Famille</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 893</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7,63/10</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">62,8%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mon jour de chance</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 619</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9,34/10</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">95,4%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Évolution des canaux marketing (Par date de production)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={[
                    { id: 1, name: 'La Famille', tv: 24.9, presse: 21.9, digital: 9.9, email: 20.3, billetterie: 11.1 },
                    { id: 2, name: 'La vérité', tv: 26.5, presse: 23.3, digital: 8.7, email: 17.5, billetterie: 10.6 },
                    { id: 3, name: 'Mon jour de chance', tv: 9.2, presse: 21.1, digital: 6.5, email: 18.0, billetterie: 19.1 }
                  ]}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
                  <Legend />
                  <Line type="monotone" dataKey="tv" name="Télévision" stroke="#ef4444" strokeWidth={2} />
                  <Line type="monotone" dataKey="presse" name="Presse" stroke="#f59e0b" strokeWidth={2} />
                  <Line type="monotone" dataKey="digital" name="Réseaux sociaux" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="email" name="Email théâtre" stroke="#8b5cf6" strokeWidth={2} />
                  <Line type="monotone" dataKey="billetterie" name="Billetterie en ligne" stroke="#22c55e" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-gray-600">
                <p>On constate une baisse significative de l'efficacité de la télévision pour "Mon jour de chance" (9,2% contre 26,5% pour "La vérité"), compensée par une augmentation de la billetterie en ligne (19,1%). La presse reste stable sur les trois productions (21-23%).</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Insights comparatifs</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="border rounded-lg p-4 border-blue-200 bg-blue-50">
                  <h4 className="font-medium text-blue-800 mb-2">Différences d'accueil</h4>
                  <p className="text-sm text-gray-700">
                    Des écarts significatifs d'accueil entre les spectacles avec une différence de 1,71 points entre la note la plus haute ("Mon jour de chance" - 9,34) et la plus basse ("La Famille" - 7,63).
                  </p>
                </div>
                
                <div className="border rounded-lg p-4 border-purple-200 bg-purple-50">
                  <h4 className="font-medium text-purple-800 mb-2">Évolution des canaux</h4>
                  <p className="text-sm text-gray-700">
                    Tendance claire vers une plus grande efficacité des canaux digitaux, avec une augmentation de 16,1 points entre "La vérité" (27,6%) et "Mon jour de chance" (43,7%).
                  </p>
                </div>
                
                <div className="border rounded-lg p-4 border-green-200 bg-green-50">
                  <h4 className="font-medium text-green-800 mb-2">Billetterie en ligne</h4>
                  <p className="text-sm text-gray-700">
                    Forte progression de la billetterie en ligne pour "Mon jour de chance" (19,1%), devenant le 2ème canal contre la 5ème position pour "La vérité" (10,6%).
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-2">Recommandations basées sur l'analyse comparative</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  <li>Réduire les investissements en télévision pour les prochaines productions, en se basant sur le succès de "Mon jour de chance" malgré une présence TV beaucoup plus faible</li>
                  <li>Augmenter la présence sur les plateformes de billetterie en ligne qui montrent une forte progression d'efficacité</li>
                  <li>Maintenir les efforts en presse qui reste stable et efficace pour les trois productions</li>
                  <li>S'inspirer des éléments de succès de "Mon jour de chance" (contenu, mise en scène, promotion) qui a obtenu des résultats exceptionnels</li>
                  <li>Analyser en profondeur les facteurs ayant mené aux résultats plus modérés de "La Famille" pour éviter de reproduire certaines approches</li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      default:
        return <div>Sélectionnez un onglet pour afficher le contenu</div>;
    }
  };
  
  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-yellow-700 text-white p-6 rounded-t-lg">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">La vérité</h1>
              <h2 className="text-xl">Pascal Legros Productions</h2>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">8,94/10</div>
              <div className="text-sm">Note moyenne (1106 réponses)</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 shadow mb-6 flex flex-wrap gap-2 overflow-x-auto">
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'overview' ? 'bg-yellow-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('overview')}
          >
            Vue d'ensemble
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'channels' ? 'bg-yellow-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('channels')}
          >
            Canaux de communication
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'feedback' ? 'bg-yellow-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('feedback')}
          >
            Analyse des commentaires
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'recommendations' ? 'bg-yellow-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('recommendations')}
          >
            Recommandations
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'comparisons' ? 'bg-yellow-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('comparisons')}
          >
            Comparaisons
          </button>
        </div>
        
        <div className="mb-6">
          {renderContent()}
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Méthodologie</h3>
          <p className="text-sm text-gray-600">
            Cette analyse est basée sur 1106 réponses au questionnaire distribué aux spectateurs de "La vérité". L'analyse des sentiments a été réalisée par traitement automatique du langage naturel sur les commentaires textuels. Les thèmes ont été identifiés par l'extraction de mots-clés pertinents dans les domaines du théâtre et du spectacle vivant. Les recommandations sont formulées en tenant compte des corrélations entre les différentes métriques et de l'intensité des sentiments exprimés.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheatreSentimentDashboard;
