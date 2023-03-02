import React, { useContext }  from "react";
import UserContext            from "../context/User/UserContext";

const Profile = () => {
  
  //obtengo mi state de usuarios llamando al useContext de react
  // y mediante desestructuración obtengo la información del usuario
  const { selectedUser } = useContext(UserContext);

  // mediante un renderizado condicional muestro la información del usuario seleccionado
  return (
    <>
      {selectedUser ? (
        <div className="card card-body text-center">
          <img
            src={selectedUser.avatar}
            alt="user selected"
            className="card-img-top img-fluid rounded-circle m-auto"
            style={{ width: 180 }}
          />
          <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
          <h3>email: {selectedUser.email}</h3>
        </div>
      ) : (
        <div>No hay usuario seleccionado</div>
      )}
    </>
  );
};

export default Profile;
