import "./global.css"
import layout from "./layout.css";
import app from "./app.js";

function Menu(){
    return (
        <div className="Menu">
            <layout/>

            <Menu/>
        </div>
    );
}


export default Menu;