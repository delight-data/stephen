import Navbar from "../ui/Navbar";
import DashboardList from "./components/DashboardList";
import * as dashboards from '../dashboards'
function Home({anonymous}) {
  return (
    <div className="w-full h-full bg-slate-800 text-slate-50 flex">
      <Navbar />
      <main className="flex flex-col gap-4 p-4 w-full">
        <div className="space-y-2 border-b border-slate-600">
          <h1 className="text-4xl">Bienvenue chez Stephen! </h1>
          {anonymous ? '' : <h2 className="text-2xl" >On vous sert quelque chose ? </h2>}
        </div>
        
        
        {anonymous ? '' : <div className="px-2"><DashboardList  dashboards={dashboards} /></div>}
      </main>
    </div>
   
  );
}

export default Home;