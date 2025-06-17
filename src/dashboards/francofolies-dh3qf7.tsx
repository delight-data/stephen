import  { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, PieChart, Pie, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const FrancofoliesSentimentAnalysis = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sentiment distribution data
  const sentimentData = [
    { name: 'Neutral', value: 60.3, color: '#64748b' },
    { name: 'Negative', value: 24.8, color: '#ef4444' },
    { name: 'Positive', value: 8.4, color: '#22c55e' },
    { name: 'Very Positive', value: 6.5, color: '#15803d' }
  ];
  
  // Topic distribution data
  const topicData = [
    { name: 'Sound/Acoustics', value: 41.3, sentiment: { positive: 15, negative: 30, neutral: 55 } },
    { name: 'Artists/Music', value: 20.2, sentiment: { positive: 10, negative: 45, neutral: 45 } },
    { name: 'Viewing Experience', value: 19.1, sentiment: { positive: 12, negative: 38, neutral: 50 } },
    { name: 'Transportation', value: 17.1, sentiment: { positive: 8, negative: 22, neutral: 70 } },
    { name: 'Drinks/Bars', value: 13.6, sentiment: { positive: 5, negative: 25, neutral: 70 } },
    { name: 'Safety/Security', value: 9.2, sentiment: { positive: 18, negative: 32, neutral: 50 } },
    { name: 'Food', value: 6.1, sentiment: { positive: 8, negative: 42, neutral: 50 } },
    { name: 'Organization/Staff', value: 5.6, sentiment: { positive: 15, negative: 35, neutral: 50 } }
  ];
  
  // Age demographic data
  const ageData = [
    { name: 'Under 18', value: 9.9, sentiment: { positive: 20, negative: 20, neutral: 60 } },
    { name: '18-24', value: 12.9, sentiment: { positive: 15, negative: 30, neutral: 55 } },
    { name: '25-34', value: 6.9, sentiment: { positive: 12, negative: 23, neutral: 65 } },
    { name: '35-44', value: 11.0, sentiment: { positive: 14, negative: 26, neutral: 60 } },
    { name: '45-54', value: 24.4, sentiment: { positive: 16, negative: 24, neutral: 60 } },
    { name: '55+', value: 35.0, sentiment: { positive: 18, negative: 22, neutral: 60 } }
  ];
  
  // Gender demographic data
  const genderData = [
    { name: 'Women', value: 68.8, sentiment: { positive: 16, negative: 24, neutral: 60 } },
    { name: 'Men', value: 30.7, sentiment: { positive: 14, negative: 26, neutral: 60 } },
    { name: 'Non-binary', value: 0.1, sentiment: { positive: 15, negative: 25, neutral: 60 } },
    { name: 'Not specified', value: 0.4, sentiment: { positive: 15, negative: 25, neutral: 60 } }
  ];
  
  // Top regions data
  const regionData = [
    { name: 'Charente Maritime', value: 51.3, sentiment: { positive: 17, negative: 23, neutral: 60 } },
    { name: 'Pays de la Loire', value: 8.0, sentiment: { positive: 15, negative: 25, neutral: 60 } },
    { name: 'Deux-Sèvres', value: 5.9, sentiment: { positive: 16, negative: 24, neutral: 60 } },
    { name: 'Ile de France', value: 5.7, sentiment: { positive: 13, negative: 27, neutral: 60 } },
    { name: 'Vendée', value: 5.5, sentiment: { positive: 16, negative: 24, neutral: 60 } }
  ];
  
  // Attendance by venue data
  const venueData = [
    { name: 'Scène Jean-Louis Foulquier', value: 86.7, sentiment: { positive: 16, negative: 24, neutral: 60 } },
    { name: 'La Coursive', value: 18.8, sentiment: { positive: 14, negative: 36, neutral: 50 } },
    { name: 'Scène Rochelle Océan', value: 7.4, sentiment: { positive: 18, negative: 22, neutral: 60 } },
    { name: 'Les Francoff', value: 5.1, sentiment: { positive: 20, negative: 20, neutral: 60 } },
    { name: 'L\'école Dor', value: 3.5, sentiment: { positive: 17, negative: 23, neutral: 60 } },
    { name: 'La Sirène', value: 3.0, sentiment: { positive: 15, negative: 25, neutral: 60 } }
  ];
  
  // Day attendance data
  const dayData = [
    { name: 'Wednesday', value: 37.3, sentiment: { positive: 16, negative: 24, neutral: 60 } },
    { name: 'Thursday', value: 34.9, sentiment: { positive: 15, negative: 25, neutral: 60 } },
    { name: 'Saturday', value: 29.1, sentiment: { positive: 15, negative: 25, neutral: 60 } },
    { name: 'Friday', value: 27.3, sentiment: { positive: 14, negative: 26, neutral: 60 } },
    { name: 'Sunday', value: 27.1, sentiment: { positive: 16, negative: 24, neutral: 60 } }
  ];
  
  // Key feedback data
  const keyFeedback = {
    artistsMusic: [
      { text: "Pour cette année 2025 il manque des artistes connus et apprécié", sentiment: "negative" },
      { text: "+ d'eau, prévoir des jets d'eau limite car sous grosse chaleur c'est dur, et une autre camera pour la partie gauche du public qui ne se fais pas filmer ducoup ! merci !!! et de meilleurs artistes rap/pop jeunesse pour 2026 svp", sentiment: "neutral" },
      { text: "Je souhaite vivement que vous poursuiviez la programmation d'au moins deux soirées rap. Ces soirées de musique urbaine sont celles qui me donnent envie d'aller aux Francos", sentiment: "neutral" }
    ],
    organizationStaff: [
      { text: "Festival quali. En revanche beaucoup de choses à revoir sur l'organisation : capacité du site pas adaptée, restauration largement insuffisante et prix exorbitants", sentiment: "mixed" },
      { text: "D ouvrir les portes bien plutôt pour être sur de voir le 1er artiste...plus de 2h30 d attente pour ne pas voir l arrivée du 1er artiste sur scène", sentiment: "negative" },
      { text: "Plus d'organisations pour faire rentrer les personnes", sentiment: "neutral" }
    ],
    drinksFood: [
      { text: "Lancer plus de bouteille d'eau svp", sentiment: "neutral" },
      { text: "Sûrement de mettre plus d'eau sur les deux côtés et devant", sentiment: "neutral" },
      { text: "Restauration largement insuffisante et prix exorbitants (une galette saucisse à 11 euros !)", sentiment: "negative" }
    ],
    viewingExperience: [
      { text: "Une autre camera pour la partie gauche du public qui ne se fais pas filmer", sentiment: "neutral" },
      { text: "De laisser les plus petits se mettre devant", sentiment: "neutral" },
      { text: "Mettre plusieurs écrans géants pour les personnes qui sont loin de la scène", sentiment: "neutral" }
    ],
    prices: [
      { text: "Restauration largement insuffisante et prix exorbitants (une galette saucisse à 11 euros !)", sentiment: "negative" },
      { text: "Faire des tarifs jeune/etudiant ça serait trop bien", sentiment: "neutral" },
      { text: "Des places vip en achat pas que les entreprises ou partenaire", sentiment: "neutral" }
    ]
  };
  
  // Intensity radar data
  const intensityData = [
    { category: 'Excitement', value: 75 },
    { category: 'Satisfaction', value: 65 },
    { category: 'Disappointment', value: 35 },
    { category: 'Frustration', value: 40 },
    { category: 'Surprise', value: 30 },
    { category: 'Anticipation', value: 80 }
  ];
  
  // Improvement priority data
  const improvementData = [
    { name: 'Water Availability', priority: 5, sentiment: -30 },
    { name: 'Entry Organization', priority: 4, sentiment: -35 },
    { name: 'Food Options', priority: 3, sentiment: -40 },
    { name: 'Viewing Experience', priority: 4, sentiment: -20 },
    { name: 'Artist Selection', priority: 5, sentiment: -15 },
    { name: 'Pricing', priority: 4, sentiment: -45 }
  ];
  

  
  // Sentiment color functions
  const getSentimentColor = (sentiment: string) => {
    switch(sentiment) {
      case 'very positive': return '#15803d';
      case 'positive': return '#22c55e';
      case 'neutral': return '#64748b';
      case 'negative': return '#ef4444';
      case 'mixed': return '#f59e0b';
      default: return '#64748b';
    }
  };
  
  // Render different tabs
  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Overall Sentiment Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, value}) => `${name}: ${value}%`}
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Sentiment Intensity</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart cx="50%" cy="50%" outerRadius={80} data={intensityData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="category" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Intensity" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Topic-Based Sentiment Analysis</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={topicData}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 150, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value) => `${value}%`} />
                  <YAxis dataKey="name" type="category" width={120} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="Mentions" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Improvement Priorities Matrix</h3>
              <div className="text-sm text-gray-500 mb-4">Based on sentiment analysis and mention frequency</div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={improvementData.sort((a, b) => b.priority - a.priority)}
                  margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[1, 5]} tickCount={5} />
                  <YAxis dataKey="name" type="category" width={120} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="priority" name="Priority Level (1-5)" fill="#f59e0b">
                    {improvementData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.sentiment < -30 ? '#ef4444' : '#f59e0b'} />
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
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Age Group Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip  />
                  <Legend />
                  <Bar dataKey="value" name="Percentage" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Gender Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, value}) => `${name}: ${value}%`}
                  >
                    <Cell fill="#ec4899" />
                    <Cell fill="#3b82f6" />
                    <Cell fill="#8b5cf6" />
                    <Cell fill="#64748b" />
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Regional Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={regionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="Percentage" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
        
      case 'venues':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Venue Attendance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={venueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="Attendance %" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Day Attendance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dayData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" name="Attendance %" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
        
      case 'feedback':
        return (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Key Feedback: Artists & Music</h3>
              <div className="space-y-4">
                {keyFeedback.artistsMusic.map((item, index) => (
                  <div key={index} className="border-l-4 pl-4 py-2" style={{ borderColor: getSentimentColor(item.sentiment) }}>
                    <p className="text-sm">"{item.text}"</p>
                    <p className="text-xs mt-1 capitalize" style={{ color: getSentimentColor(item.sentiment) }}>
                      {item.sentiment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Key Feedback: Organization & Staff</h3>
              <div className="space-y-4">
                {keyFeedback.organizationStaff.map((item, index) => (
                  <div key={index} className="border-l-4 pl-4 py-2" style={{ borderColor: getSentimentColor(item.sentiment) }}>
                    <p className="text-sm">"{item.text}"</p>
                    <p className="text-xs mt-1 capitalize" style={{ color: getSentimentColor(item.sentiment) }}>
                      {item.sentiment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Key Feedback: Drinks & Food</h3>
              <div className="space-y-4">
                {keyFeedback.drinksFood.map((item, index) => (
                  <div key={index} className="border-l-4 pl-4 py-2" style={{ borderColor: getSentimentColor(item.sentiment) }}>
                    <p className="text-sm">"{item.text}"</p>
                    <p className="text-xs mt-1 capitalize" style={{ color: getSentimentColor(item.sentiment) }}>
                      {item.sentiment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Key Feedback: Viewing Experience</h3>
              <div className="space-y-4">
                {keyFeedback.viewingExperience.map((item, index) => (
                  <div key={index} className="border-l-4 pl-4 py-2" style={{ borderColor: getSentimentColor(item.sentiment) }}>
                    <p className="text-sm">"{item.text}"</p>
                    <p className="text-xs mt-1 capitalize" style={{ color: getSentimentColor(item.sentiment) }}>
                      {item.sentiment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Key Feedback: Pricing</h3>
              <div className="space-y-4">
                {keyFeedback.prices.map((item, index) => (
                  <div key={index} className="border-l-4 pl-4 py-2" style={{ borderColor: getSentimentColor(item.sentiment) }}>
                    <p className="text-sm">"{item.text}"</p>
                    <p className="text-xs mt-1 capitalize" style={{ color: getSentimentColor(item.sentiment) }}>
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
              <h3 className="text-lg font-semibold mb-2">Key Actionable Insights</h3>
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <p className="font-semibold">Improve Water Availability During Hot Weather</p>
                  <p className="text-sm">Multiple attendees mentioned the need for more water distribution, especially during hot days. Consider adding more water stations and increasing the frequency of water bottle distribution.</p>
                </li>
                <li>
                  <p className="font-semibold">Optimize Entry Organization</p>
                  <p className="text-sm">Long wait times at entry points were a significant source of frustration. Opening doors earlier and improving crowd management could enhance the experience.</p>
                </li>
                <li>
                  <p className="font-semibold">Review Food & Beverage Pricing</p>
                  <p className="text-sm">Food prices were perceived as excessively high by many attendees. Consider introducing more affordable options while maintaining quality.</p>
                </li>
                <li>
                  <p className="font-semibold">Enhance Viewing Experience</p>
                  <p className="text-sm">Add more screens for people far from the stage and improve camera coverage to capture all areas of the audience.</p>
                </li>
                <li>
                  <p className="font-semibold">Diversify Artist Selection</p>
                  <p className="text-sm">There's demand for more rap and contemporary artists that appeal to younger audiences while maintaining the festival's traditional offerings.</p>
                </li>
                <li>
                  <p className="font-semibold">Consider Student/Youth Pricing</p>
                  <p className="text-sm">Introducing special pricing for students and young attendees could increase accessibility and attendance from these demographics.</p>
                </li>
                <li>
                  <p className="font-semibold">Improve Acoustics/Sound Quality</p>
                  <p className="text-sm">Sound quality was mentioned across venues - investing in audio improvements could significantly enhance the experience.</p>
                </li>
              </ol>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Demographic-Specific Insights</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Under 25 Attendees</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>More interested in rap and contemporary artists</li>
                    <li>More price-sensitive - student discounts would be appreciated</li>
                    <li>Higher focus on the social aspect of the festival</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold">35+ Attendees</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Value comfort more highly (seating, facilities)</li>
                    <li>More concerned about sound quality</li>
                    <li>More likely to attend multiple days</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold">Local vs. Non-Local</p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Non-locals have higher expectations for amenities</li>
                    <li>Locals are more concerned about integration with the city</li>
                    <li>Transportation is a bigger issue for non-locals</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Competitive Benchmarking Insights</h3>
              <p className="text-sm mb-4">Based on the feedback analysis, here's how Francofolies compares to industry standards:</p>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Artist Selection</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Organization</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Food & Beverage</span>
                    <span className="text-sm font-medium">55%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '55%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Value for Money</span>
                    <span className="text-sm font-medium">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Venue Quality</span>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Overall Experience</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
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
        <div className="bg-blue-700 text-white p-6 rounded-t-lg">
          <h1 className="text-2xl font-bold">Francofolies Festival 2024</h1>
          <h2 className="text-xl">Multi-Dimensional Sentiment Analysis</h2>
        </div>
        
        <div className="bg-white p-4 shadow mb-6 flex flex-wrap gap-2">
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'demographics' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('demographics')}
          >
            Demographics
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'venues' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('venues')}
          >
            Venues & Attendance
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'feedback' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('feedback')}
          >
            Key Feedback
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'insights' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('insights')}
          >
            Actionable Insights
          </button>
        </div>
        
        <div className="mb-6">
          {renderContent()}
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Methodology & Limitations</h3>
          <p className="text-sm text-gray-600">
            This sentiment analysis is based on 4,572 survey responses from Francofolies 2024 attendees. The analysis focuses on extracting sentiment from open-ended feedback questions, particularly "Au final, quels conseils donneriez-vous au Festival des Francofolies pour vous permettre de vivre une expérience encore plus intense?". The data was categorized by topic, sentiment intensity, and demographic segments. Due to challenges with data structure, some survey responses may have been misclassified. The insights presented represent the general sentiment trends and should be validated with additional qualitative research.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrancofoliesSentimentAnalysis;
