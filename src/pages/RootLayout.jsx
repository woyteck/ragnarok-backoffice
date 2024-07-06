import { Outlet } from "react-router-dom";
import MainMenu from "../components/MainMenu";

export default function RootLayout() {
    return <>
        <MainMenu />
        <main>
            <Outlet />
        </main>
    </>
}
