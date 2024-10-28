/* eslint-disable react/prop-types */

const Player = ({ data }) => {
    const { name, img, role, bidding_price } = data
    console.log(data)
    return (
        <div className="">
            <div className="card bg-base-100 w-96 shadow-xl p-5 gap-6">
                <figure className="w-[300px] h-[200px] mx-auto">
                    <img
                    className="w-full"
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{role}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-gray-300 text-lg">$ {bidding_price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;