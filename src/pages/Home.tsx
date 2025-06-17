import Navbar from "../ui/Navbar";
import DashboardList from "./components/DashboardList";
import * as dashboards from '../dashboards'

function Subtitle() {
return (
  <span>
    <hr className="w-full border-slate-600 py-2"/>
    <h2 className="text-2xl text-center " >On vous sert quelque chose ? </h2>
  </span>
)
}

function Home({anonymous}) {
  return (
    <div className="w-full h-full text-slate-50 flex">
      {/* <Navbar /> */}
      <main className="flex flex-col gap-4 p-4 w-full items-center">
        <div className="flex flex-col items-center gap-4 w-2/3 mt-32 mb-10 rounded-2xl p-10 bg-slate-900/50 shadow-sm shadow-slate-50/25 backdrop-blur-sm">
          <h1 className="text-[80px] text-center ">Bienvenue chez Stephen! </h1>
          
          {anonymous ? '' : <Subtitle />}
        </div>
        
        {anonymous ? '' : <div className="px-2 w-1/2 mx-auto"><DashboardList  dashboards={dashboards} /></div>}
      </main>
    </div>
  );
}

export default Home;