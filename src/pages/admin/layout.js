import Sidebar from "@/components/adminComponents/dashbordComponents/Sidebar";
import Topbar from "@/components/adminComponents/dashbordComponents/Topbar";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

export default function AdminLayout({ children }) {
  // const token = Cookies.get("token");
  // if (!token) redirect("./auth/login");

  return (
     <div className="dashboard-container d-flex">
      <Sidebar />

      <div className="main-content flex-grow-1">
        <Topbar />
        <div className="content-wrapper p-4">{children}</div>
      </div>
    </div>
  );
}
