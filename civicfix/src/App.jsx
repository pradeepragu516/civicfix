import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/userpanel/Home";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Dashboard from "./components/userpanel/Dashboard";
import DashboardHome from "./components/userpanel/DashboardHome";
import Report from "./components/userpanel/Report";
import MyReports from "./components/userpanel/MyReports";
import UpvotedIssues from "./components/userpanel/UpvotedIssues";
import VolunteerTasks from "./components/userpanel/VolunteerTasks";
import CommunityDiscussion from "./components/userpanel/CommunityDiscussion";
import Notifications from "./components/userpanel/Notifications";
import Settings from "./components/userpanel/Settings";
import AdminLogin from "./components/authentication/AdminLogin";
import AdminDashboard from "./components/adminpanel/AdminDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="report" element={<Report />} />
          <Route path="myreports" element={<MyReports />} />
          <Route path="upvoted" element={<UpvotedIssues />} />
          <Route path="volunteer" element={<VolunteerTasks />} />
          <Route path="discussion" element={<CommunityDiscussion />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/AdminDashboard/*" element={<AdminDashboard />}>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
