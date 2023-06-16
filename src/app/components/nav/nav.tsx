import Link from "next/link";
import "./nav.css";

export default function Nav() {
  return (
    <nav className="nav_container">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
