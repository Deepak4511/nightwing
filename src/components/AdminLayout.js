import { useEffect } from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/adminComponents/dashbordComponents/Sidebar";
import Topbar from "@/components/adminComponents/dashbordComponents/Topbar";

export default function AdminLayout({ children }) {
  const router = useRouter();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     router.push("./auth/login");
  //   }
  // }, []);

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
