import {
  Calendar,
  Users,
  Table2Icon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import sargam_logo from "../assets/sargam_logo.png";

export function Sidebar({ isCollapsed, setIsCollapsed }) {
  const location = useLocation();

  const menuItems = [
    { icon: Calendar, label: "Events", path: "/events" },
    { icon: Users, label: "Results", path: "/results" },
    { icon: Table2Icon, label: "Points Table", path: "/points-table" },
    { icon: Table2Icon, label: "Sargam Prathibha", path: "/sargam-prathibha" },
  ];

  return (
    <div
      className={` h-screen border-r bg-background p-4 transition-all duration-300 fixed ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-4 h-8 w-8 rounded-full"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </Button>

      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Link to="/" className={`block ${isCollapsed ? "w-full" : "w-full"}`}>
          <img
            src={sargam_logo}
            alt="Sargam Logo"
            className="w-full h-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] transition-all duration-300"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.path}
            variant={location.pathname === item.path ? "secondary" : "ghost"}
            className="w-full justify-start"
            asChild
          >
            <Link to={item.path}>
              <item.icon className="mr-2 h-4 w-4" />
              {!isCollapsed && item.label}
            </Link>
          </Button>
        ))}
      </nav>
    </div>
  );
}
