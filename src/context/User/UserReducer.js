/*
  Este es nuestro reducer de usuarios.
  Aquí lo que hacemos es especificar que se va hacer con el state. Es decir, se le dice que información 
  va a almacenar, eliminar, modificar y donde dependiendo de las claves que se encuentren en los types
*/
import { GET_USERS, GET_PROFILE } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  
  const { payload, type } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    
    case GET_PROFILE:
      return {
        ...state,
        selectedUser: payload,
      };
    
    default:
      return state;
  }
};