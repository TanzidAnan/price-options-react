import { useState } from "react";
import Link from "../Link/Link";
import { TiThMenu } from "react-icons/ti";


const NebBer = () => {
    const [open,setOpen] =useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" }
    ];

    return (
        <nav>
            <div onClick={() => setOpen(!open)}>
                {
                    open===true?'Tanzi':'anan'
                }
            <TiThMenu className="md:hidden"></TiThMenu>
            </div>
            <ul className="md:flex justify-end bg-slate-500 px-6 py-3">
                {
                    routes.map(route => <Link key={route.id}
                    route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NebBer;