/* eslint-disable react/prop-types */
import { FaUserGraduate } from "react-icons/fa6";


const Frature = ({ feature }) => {
    console.log(feature)
    return (
        <div className="ml-12 mt-3">
            <ul className="text-start gap-4 flex items-center">
                <FaUserGraduate />
                <li>{feature}</li>
            </ul>
        </div>
    );
};

export default Frature;