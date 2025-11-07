import React from "react";
import { Heart, MessageCircle, User } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BiLogIn } from "react-icons/bi";

function NavItem({ to, icon, label, active, activeColor, inactiveColor }) {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center transition-colors relative`}
      style={{ color: active ? activeColor : inactiveColor }}
      aria-current={active ? "page" : undefined}
    >
      <div className="relative flex items-center justify-center">
        {icon}
        {active && (
          <span
            className="absolute -top-2 -right-0.5 w-2 h-2 rounded-full bg-rose-600"
            aria-hidden="true"
          />
        )}
      </div>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
}

export default function NavbarBottom() {
  const COLORS = {
    primary: "#e85b61",
    text: "#ffffff",
    secondaryNav: "#0a0a0a",
  };

  const location = useLocation(); // Obtém a rota atual
  const path = (location.pathname || "").toLowerCase();

  return (
    <nav
      className="fixed lg:hidden bottom-0 left-0 right-0 flex justify-around items-center py-3 shadow-lg border-t border-gray-300 z-50 rounded-t-xl"
      style={{ backgroundColor: COLORS.secondaryNav }}
    >
      <NavItem
        to="/login"
        icon={<BiLogIn size={22} />}
        label="Login"
        active={path === "/login"}
        activeColor={COLORS.primary}
        inactiveColor={COLORS.text}
      />
      <NavItem
        to="/acompanhantes"
        icon={<Heart size={22} />}
        label="Acompanhantes"
        active={path === "/acompanhantes"}
        activeColor={COLORS.primary}
        inactiveColor={COLORS.text}
      />
      <NavItem
        to="/perfil"
        icon={<IoPersonCircleOutline size={22} />}
        label="Perfil"
        active={path === "/perfil"}
        activeColor={COLORS.primary}
        inactiveColor={COLORS.text}
      />
      <NavItem
        to="/sac"
        icon={<MessageCircle size={22} />}
        label="SAC"
        active={path === "/sac"}
        activeColor={COLORS.primary}
        inactiveColor={COLORS.text}
      />
    </nav>
  );
}
