import TopBar from "./topBar";
import Navbar from "./navBar";
import Footer from "./footer";

type DashboardLayoutProps = {
    children: React.ReactNode,
}

export default function Layout({children} : DashboardLayoutProps){
    return(
        <div className="wrapper">
            <TopBar />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}