import { useState } from "react";
import Link from "../Link/Link";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";


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
        <nav className="p-6 bg-slate-500">
            <div className="md:hidden bg-zinc-500 text-3xl" onClick={() => setOpen(!open)}>
                {
                    open===true?<IoClose />:<TiThMenu className=""></TiThMenu>
                }
            
            </div>
            <ul className={`md:flex duration-1000 justify-end bg-slate-500
                ${open? 'top-14':'-top-40'}
                px-6 py-3 absolute md:static`}>
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