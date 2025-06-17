import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import * as dashboards from './dashboards'
import Home from './pages/Home'
import Page404 from './pages/Page404'
type DashboardKeys = keyof typeof dashboards;

// Fonction pour charger dynamiquement un dashboard
const DashboardLoader = () => {
  const { dashboardId } = useParams();
  const key = dashboardId?.replace('-', '_')
  const current = dashboards[key as DashboardKeys]

  if(!key || !current)  return (<Page404/>)

    const SelectedDashboard = dashboards[key as DashboardKeys];
    return (<div className="min-h-screen bg-gray-100"><SelectedDashboard /></div>);

};


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home anonymous={true}/>} />
        <Route path="stephen-15kk88" element={<Home anonymous={false}/>} />
        <Route path="dashboard/:dashboardId" element={<DashboardLoader />} />
        { /* Catch all route */ }
        <Route path="*" element={<Page404 />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

