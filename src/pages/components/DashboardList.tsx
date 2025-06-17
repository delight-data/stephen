import { useNavigate } from "react-router";

function DashboardList({dashboards}) {
  const navigate = useNavigate();
  
  return (
    <label className="flex gap-4 justify-center items-center">
      <span>Une petite analyse peut-être ?</span>
      <select onChange={e => navigate(`/dashboard/${e.target.value}`)} className="h-8 rounded-full grow bg-slate-900/50 shadow-sm shadow-slate-50/25 backdrop-blur-sm px-2">
        <option value="">Sélectionner un dashboard</option>
        {
          Object.keys(dashboards).map((dashboard, idx) => 
            (<option value={dashboard.replace('_', '-')} key={idx}>{dashboard.replace('_', '-')}</option>)
          )
        }
      </select>
    </label>
  );
}

export default DashboardList;