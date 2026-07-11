import Navbar from "@/components/shared/Navbar";
import { montserrat } from "../layout";

const AuthLayout = ({ children }) => {
    return (
        <div className={`${montserrat.className} mx-auto max-w-7xl`}>
            <Navbar></Navbar>
            {children}
        </div>
    );

};

export default AuthLayout;