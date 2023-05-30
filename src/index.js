import { createRoot }  from "react-dom/client";
import App from "./App";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <div>
       
        <App/>
    </div>
)