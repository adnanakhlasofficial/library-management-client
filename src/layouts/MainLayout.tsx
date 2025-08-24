import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-white dark:bg-black"><Navbar /></header>
      <main><Outlet /></main>
    </>
  )
}
