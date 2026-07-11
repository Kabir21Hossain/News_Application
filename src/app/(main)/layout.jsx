import Navbar from "@/components/shared/Navbar";
import Header from "@/components/shared/Header";
import { BreakingNews } from "@/components/shared/BreakingNews";

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            {children}
        </div>
    )
}

export default MainLayout;