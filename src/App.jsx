import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/Admin/Companies";
import CompanyCreate from "./components/Admin/CompanyCreate";
import CompanySetup from "./components/Admin/CompanySetup";
import AdminJobs from "./components/Admin/AdminJobs";
import PostJob from "./components/Admin/PostJob";
import Applicants from "./components/Admin/Applicants";
import ProtectedRoute from "./components/Admin/ProtectedRoute";
import ForgetPassword from "./components/ui/ForgetPassword";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  ///Admin Start here

  {
    path:"admin/companies",
    element:<ProtectedRoute><Companies/></ProtectedRoute>
  },

  {
    path:"admin/companies/create",
    element:<ProtectedRoute><CompanyCreate/></ProtectedRoute>
  },
  {
    path:"admin/companies/:id",
    element:<ProtectedRoute><CompanySetup/></ProtectedRoute>
  }
  ,
 {
  path:"admin/jobs",
  element:<ProtectedRoute><AdminJobs/></ProtectedRoute>
 },

 {
   path: "/admin/jobs/create",
   element:<ProtectedRoute> <PostJob/></ProtectedRoute>
 },
 {
  path: "/admin/jobs/:id/applicants",
  element: <ProtectedRoute><Applicants/></ProtectedRoute>
},


]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
