import { Link } from "react-router-dom";

export const CleanPage = () => (
    <div style={spanWhiteStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti est odio illo, culpa aspernatur, ullam molestias error rerum minus perspiciatis deserunt officia harum natus. Magni cumque illo molestias similique tenetur!
        Corrupti nostrum quis illum. Nemo sit delectus, quas mollitia atque in accusantium! Soluta harum autem minus laborum ullam! Explicabo rerum voluptates aliquam consequuntur autem praesentium animi minus quis modi vero.
        Earum odit illo autem? Ad sunt tenetur odit et, qui fugiat illo expedita minus odio esse voluptates libero error, optio recusandae architecto hic. Eligendi deserunt nesciunt, suscipit delectus ratione eaque!
    <Link to={"/home"} >Home</Link>
    </div>

)
const spanWhiteStyle = {
    color: "#FFF",
};
