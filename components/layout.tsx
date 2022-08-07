import TopBar from "./topBar";
import Navbar from "./navBar";
import Footer from "./footer";

type DashboardLayoutProps = {
    children: React.ReactNode,
}

export default function Layout({children} : DashboardLayoutProps){
    return(
        <>
            <TopBar />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}