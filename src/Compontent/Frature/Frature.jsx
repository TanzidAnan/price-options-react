/* eslint-disable react/prop-types */

const Frature = ({feature}) => {
    console.log(feature)
    return (
        <div className="ml-12 mt-3">
            <ul className="text-start gap-2">
                <li>{feature}</li>
            </ul>
        </div>
    );
};

export default Frature;