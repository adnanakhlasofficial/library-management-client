import { Link } from "react-router";
import { ModeToggle } from "../ModeToggle";
import MobNav from "./MobNav";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-2 py-4 max-w-7xl mx-auto">
      <div>
        <Link to="/"><h1 className="font-bold text-2xl">BookStore</h1></Link>
      </div>
      <div className="hidden md:block">
        <ul className="*:hover:underline *:underline-offset-2 flex items-center gap-4 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">All Books</Link></li>
          <li><Link to="/create-book">Create Book</Link></li>
          <li><Link to="/borrow-summary">All Borrow Books</Link></li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <MobNav />
      </div>
    </nav>
  )
}
