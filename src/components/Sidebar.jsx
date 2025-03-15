import { Home, Calendar, Users, Table2Icon, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const location = useLocation()

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Calendar, label: "Events", path: "/events" },
    { icon: Users, label: "Results", path: "/results" },
    { icon: Table2Icon, label: "Points Table", path: "/points-table" },
    { icon: Table2Icon, label: "Sargam Prathibha", path: "/sargam-prathibha" },
  ]

  return (
    <div className={`relative h-screen border-r bg-background p-4 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-4 h-8 w-8 rounded-full"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </Button>
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
  )
}
