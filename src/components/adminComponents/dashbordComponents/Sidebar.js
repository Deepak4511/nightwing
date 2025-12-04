import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar p-3">
      <h5 className="text-white mb-4">Menu</h5>

      <ul className="list-unstyled">
        <li>
          <Link href="/dashboard" className="sidebar-link">
            Dashboard
          </Link>
        </li>

        <li>
          <Link href="/dashboard/create-creator" className="sidebar-link">
            Create Creator
          </Link>
        </li>

        <li>
          <Link href="/dashboard/creators" className="sidebar-link">
            All Creators
          </Link>
        </li>

        <li>
          <Link href="/dashboard/videos" className="sidebar-link">
            Creator Videos & Reels
          </Link>
        </li>

        <li>
          <Link href="/dashboard/images" className="sidebar-link">
            Creator Images
          </Link>
        </li>

        <li className="mt-3 pt-3 border-top">
          <Link href="/" className="sidebar-link text-danger">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
