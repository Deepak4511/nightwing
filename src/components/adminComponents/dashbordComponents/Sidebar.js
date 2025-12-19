import { Film, Images, LayoutDashboard, LogOut, UserPlus, Users, Video } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Sidebar({ sidebarOpen }) {
  const pathname = usePathname();

  const menuItems = [
    { label: "Dashboard", path: "/", icon: <LayoutDashboard className="me-2"/> },
    { label: "Create Creator", path: "/add-creator", icon: <UserPlus className="me-2"/>},
    { label: "All Creators", path: "/all-creator", icon: <Users className="me-2"/> },
    { label: "Videos ", path: "/videos", icon: <Video className="me-2"/>},
    { label: "Photos", path: "/photos", icon: <Images className="me-2"/>},
     { label: "& Reels", path: "/reels", icon: <Film className="me-2"/>},
  ];

  return (
    <aside
      className={`sidebar ${sidebarOpen ? "sidebar-open" : "sidebar-collapsed"}`}
    >
      {/* Logo */}
      <div className="sidebar-logo d-flex align-items-center gap-2 p-4">
        <div className="logo-box d-flex align-items-center justify-content-center">
          <span className="text-white fw-bold small">V</span>
        </div>

        {sidebarOpen && (
          <span className="fw-bold text-light fs-5">Admin</span>
        )}
      </div>

      {/* Menu */}
      <nav className="flex-grow-1 px-3">
        {menuItems.map((item, i) => {
          const active = location.pathname === item.path;

          return (
            <Link
              key={i}
              href={item.path}
              className={`sidebar-link ${active ? "active" : ""}`}
            >
              <span>{item.icon}</span>{sidebarOpen ? item.label : item.label[0]}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="sidebar-footer p-3">
        <Link href="/" className="logout-btn">
          <LogOut className="me-2"/>{sidebarOpen && "Logout"}
        </Link>
      </div>
    </aside>
  );
}
