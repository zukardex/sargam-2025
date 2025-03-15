import { Home, Calendar, Settings, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

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
        <Button variant="ghost" className="w-full justify-start">
          <Home className="mr-2 h-4 w-4" />
          {!isCollapsed && "Home"}
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Calendar className="mr-2 h-4 w-4" />
          {!isCollapsed && "Events"}
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Users className="mr-2 h-4 w-4" />
          {!isCollapsed && "Teams"}
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          {!isCollapsed && "Settings"}
        </Button>
      </nav>
    </div>
  )
}
