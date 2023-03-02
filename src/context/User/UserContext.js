/*
    Este es nuestro context (o contexto) en este caso de usuarios. En react cuando hacemos uso de esta función 
    lo que hacemos es convertir un componente en un stado (state)
*/
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;