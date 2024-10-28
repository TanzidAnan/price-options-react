/* eslint-disable react/prop-types */
import Frature from "../Frature/Frature";


const PriceOption = ({option}) => {
    const {name,price,features} =option;
    console.log(option)
    return (
        <div className="bg-violet-300 text-center py-7 rounded-lg shadow-lg">
            <div>
                <h2 className="text-white">
                    <span className="text-4xl font-extrabold">{price}</span>
                    <span className="text-2xl font-semibold">/mon</span>
                </h2>
                <p className="text-2xl font-bold mt-2 text-white">{name}</p>
                {
                    features.map((feature ,idx) =><Frature key={idx} feature={feature}></Frature>)
                }
            </div>
        </div>
    );
};

export default PriceOption;