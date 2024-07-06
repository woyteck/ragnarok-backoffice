import { NavLink } from "react-router-dom";

export default function MainMenu() {
    const classes="text-emerald-200 hover:text-emerald-800 gap-4"

    return (
        <nav className="flex flex-row gap-2">
            <NavLink to="/" className={({ isActive }) => `${classes}${isActive ? ' text-lime-200' : undefined}`}>Home</NavLink>
            <NavLink to="/memories" className={({ isActive }) => `${classes}${isActive ? ' text-lime-200' : undefined}`}>Memories</NavLink>
        </nav>
    );
}
