import { Outlet } from "react-router";
import Header from "../pages/components/Header";
import Footer from "../pages/components/Footer";

export default function Home() {
    return (
        <>
            <div className="max-w-3xl mx-auto py-8">
                <Header />

                <Outlet />

                <Footer />
            </div>
        </>
    )
}