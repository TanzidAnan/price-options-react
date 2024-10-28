/* eslint-disable react/prop-types */

const Link = ({ route }) => {
    return (
        <div className="mr-4 hover:bg-red-400 font-bold text-2xl">
            <li className="px-4"><a href={`${route.path}`}
            >{route.name}</a></li>
        </div>
    );
};

export default Link;