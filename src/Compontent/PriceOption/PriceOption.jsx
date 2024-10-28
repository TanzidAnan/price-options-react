/* eslint-disable react/prop-types */

import Frature from "../Frature/Frature";



const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-zinc-800 text-white flex flex-col rounded-xl p-4 text-center">

            <h2 className="text-center">
                <span className="text-5xl font-extrabold ">{price}</span>
                <span className="text-2xl ">/mon</span>
            </h2>
            <h1 className="text-3xl mt-4">{name}</h1>
            <div className="flex-grow">
                {
                    features.map((feature,idx) => <Frature key={idx} feature={feature}></Frature>)
                }
            </div>
            <button className="bg-red-100 text-black font-extrabold block px-4 py-3 hover:bg-orange-500 rounded-xl">Click Add More</button>
        </div>
    );
};

export default PriceOption;