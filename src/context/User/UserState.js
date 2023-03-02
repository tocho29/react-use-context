/*
  Este fichero es lo que sería nuestro "estado global" de usuarios, aquí vamos a tener todas las funciones
  que necesitamos para trabajar con este estado en concreto.

  En este ejemplo tenemos una función para obtener un listado de usuarios y otra función que nos muestra la información
  del usuario seleccionado.

  Podemos tener mas funciones, cada una con una lógica distinta según nuestras necesidades. Además podemos tener múltiples states
  repartidos por toda la apliación cada uno con una funcionalidad específica.
*/
import React, { useReducer }        from "react";
import axios                        from "axios";

//! mirar estas importaciones en el orden en el que aparecen
import { GET_USERS, GET_PROFILE }   from "../types";
import UserReducer                  from "./UserReducer";
import UserContext                  from "./UserContext";

const UserState = (props) => {
  
  // Estado inicial del UserState o si lo prefieres la estructura que por defecto van a tener los datos.
  const initialState = {
    users: [], // almacenamos el listado de usuarios
    selectedUser: null, // almacenamos el id del usuario seleccionado
  };

  /*
    useReducer
    Una alternativa a useState. A diferencia del otro hook este hook recibe 2 parámetros:
      - la función que quieres ejecutar con los datos con los que quieres trabajar
      - el estado donde se va a encontrar esa información que posteriormente utilizarán el resto de componentes de react

    Esas funciones se ejecutan gracias al dispatch, y lo que devuelve o mejor dicho lo que obtenemos
    es un state de react accesible desde cualquier parte de la aplicación y al que podemos acceder cuando queramos.

    IMPORTANTE: en este caso el state UserState es accesible desde cualquier parte de la aplicación devido a que lo estamos usando
    en la parte mas arriba de nuestro arbol de componentes en react. Pero si creas un state dentro de un componente hijo solo puede 
    ser accesible por los hijos, nietos, bisniestos, etc... de ese componente
  */
  const [state, dispatch] = useReducer(UserReducer, initialState);

  /**
   * Obtiene una lista de usuarios para poder llenar el state de usuarios
   */
  const getUsers = async () => {
    try {
      const res = await axios.get("https://reqres.in/api/users");
      const data = res.data.data;

      // con el dispatch lo que estoy haciendo es almacenar la información de la llamada fetch en el reducer
      // para posteriormente poder acceder a ella desde cualquier componente padre, hijo, nieto, etc...
      dispatch({ type: GET_USERS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Obtiene la información del usuario seleccionado y lo almacena en el state de usuarios
   * @param {number} id del usuario seleccionado 
   */
  const getProfile = async (id) => {
    try {
      const res = await axios.get("https://reqres.in/api/users/" + id);
      const { data }= res;

      // con el dispatch lo que estoy haciendo es almacenar la información de la llamada fetch en el reducer
      // para posteriormente poder acceder a ella desde cualquier componente padre, hijo, nieto, etc...
      dispatch({ type: GET_PROFILE, payload: data.data });
    } catch (error) {}
  };

  /*
    para tener el código un poco mas limpio y organizado preparo antes del return un objeto
    donde voy a tener la información que necesito (lista de usuarios e info del usuario seleccionado)
    y las funciones con las que voy a tener que trabajar
  */
  let values = {
    users:          state.users,
    selectedUser:   state.selectedUser,
    getUsers,
    getProfile
  };

  return (
    // retornamos nuestro contexto con la información y las funciones que necesitamos
    <UserContext.Provider value={values} >
      {/* estos son los componentes hijos que se van a encontrar dentro de este provider */}
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
