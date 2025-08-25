import Navbar from "@/components/layout/Navbar";
import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <header className="bg-background border-b sticky top-0 z-10"><Navbar /></header>
      <main>
        <Outlet />
      </main>
      <Toaster />
    </>
  )
}
