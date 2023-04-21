//losm hooks son funciones que se pueden ejecutar en cualquier parte o screen
import { useContext } from "react";
import { AuthContext } from "../context/AuthContex";

export default ()=> useContext(AuthContext);