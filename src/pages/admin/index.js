import AdminLayout from "@/components/AdminLayout";


export default function AdminHome() {
  return (
    <AdminLayout>
      <div>
        <h3>Welcome Admin</h3>

        <ul>
          <li><a href="/admin/creators">Manage Creators</a></li>
          <li><a href="/admin/videos">Manage Videos</a></li>
          <li><a href="/admin/reels">Manage Reels</a></li>
        </ul>
      </div>
    </AdminLayout>
  );
}
