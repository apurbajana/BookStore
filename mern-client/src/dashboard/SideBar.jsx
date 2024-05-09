import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import userImg from "../assets/dp.jpg";
export default function SideBar() {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
       <Sidebar.Logo
        href="#"
        img={userImg}
        imgAlt="Flowbite logo"
      >
        <p>
          Flowbite
        </p>
        </Sidebar.Logo>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item
          href="/admin/dashboard"
          icon={HiChartPie}
        >
          <p>
            Dashboard
          </p>
        </Sidebar.Item>
        <Sidebar.Item
          href="/admin/dashboard/upload"
          icon={HiViewBoards}
        >
          <p>
            Upload Book
          </p>
        </Sidebar.Item>
        <Sidebar.Item
          href="/admin/dashboard/manage"
          icon={HiInbox}
        >
          <p>
            ManageBooks
          </p>
        </Sidebar.Item>
        <Sidebar.Item
          href="/admin/dashboard/edit/:id"
          icon={HiUser}
        >
          <p>
            Edit Books
          </p>
        </Sidebar.Item>
        <Sidebar.Item
          href="/admin/dashboard/edit/:id"
          icon={HiShoppingBag}
        >
          <p>
            Products
          </p>
        </Sidebar.Item>
        <Sidebar.Item
          href="/login"
          icon={HiArrowSmRight}
        >
          <p>
            Sign In
          </p>
        </Sidebar.Item>
        <Sidebar.Item
          href="logout"
          icon={HiTable}
        >
          <p>
            Logoout
          </p>
        </Sidebar.Item>
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        <Sidebar.Item
          href="#"
          icon={HiChartPie}
        >
          <p>
            Upgrade to Pro
          </p>
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={HiViewBoards}
        >
          <p>
            Documentation
          </p>
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={HiSupport}
        >
          <p>
            Help
          </p>
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
  )
}
