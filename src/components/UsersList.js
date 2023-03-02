import React, { useContext, useEffect }   from "react";
import UserContext                        from "../context/User/UserContext";

const UsersList = () => {
  
  //obtengo mi state de usuarios llamando al useContext de react
  const userContext = useContext(UserContext);

  // cuando el componente de React se renderiza llamo a la función getUser de mi state y obtengo el listado de usuarios
  useEffect(() => {
    userContext.getUsers();
  }, []);

  // mediante un renderizado condicional muestro el listado de usuarios (o no)
  return (
    <div className="list-group h-100">
      {userContext.users.length
        ? userContext.users.map((user) => (
            <a
              key={user.id}
              href="#!"
              onClick={() => userContext.getProfile(user.id)}
              className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
            >
              <img src={user.avatar} alt="" className="img-fluid mr-4 rounded-circle" width="70" />
              <p>{user.first_name + " " + user.last_name}</p>
            </a>
          ))
        : null}
    </div>
  );
};

export default UsersList;
