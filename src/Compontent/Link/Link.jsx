/* eslint-disable react/prop-types */

const Link = ({ route }) => {
    return (
        <div className="mr-4">
            <li><a href={`${route.path}`}
            >{route.name}</a></li>
        </div>
    );
};

export default Link;