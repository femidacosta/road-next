import "./header.css";
import Image from "next/image";
import Nav from "@/app/components/nav/nav";

export default function Header() {
  return (
    <div className="header_container">
      <div className="header">
        <h1 className="h1">ROAD</h1>
        <Nav />
      </div>
    </div>
  );
}
