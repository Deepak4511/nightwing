import Image from "next/image";
import { useRouter } from "next/router";

export default function Topbar() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/"); // redirect to login
  };

  return (
    <div className="topbar d-flex align-items-center justify-content-between px-4 py-2 shadow-sm">
      {/* Logo */}
      <div className="d-flex align-items-center">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
        <h4 className="ms-2 mb-0 fw-bold">Admin Panel</h4>
      </div>

      {/* Search Bar */}
      <div className="search-bar flex-grow-1 px-5">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search..."
        />
      </div>

      {/* User Menu */}
      <div className="dropdown">
        <div
          className="d-flex align-items-center dropdown-toggle user-area"
          data-bs-toggle="dropdown"
          style={{ cursor: "pointer" }}
        >
          <Image
            src="/images/user.jpg"
            alt="user"
            width={40}
            height={40}
            className="rounded-circle"
          />
          <span className="ms-2 fw-bold">Deepak</span>
        </div>

        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item">Settings</a>
          </li>
          <li>
            <a className="dropdown-item text-danger" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
