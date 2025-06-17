import { useNavigate } from "react-router";

function DashboardList({dashboards}) {
  const navigate = useNavigate();
  
  return (
    <label className="flex flex-col gap-2 max-w-80">
      <span>Une petite analyse peut-être ?</span>
      <select onChange={e => navigate(`/dashboard/${e.target.value}`)} className="h-8 rounded-full">
        {Object.keys(dashboards).map((dashboard, idx)=> (
          <option value={dashboard.replace('_', '-')} key={idx}>{dashboard.replace('_', '-')}</option>
        ))
        }
      </select>
    </label>
  );
}

export default DashboardList;