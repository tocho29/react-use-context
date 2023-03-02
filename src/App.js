import React      from "react";
import UsersList  from "./components/UsersList";
import Profile    from "./components/Profile";
import UserState  from "./context/User/UserState";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // Creamos nuestro estado de usuarios, en este caso como se encuentra en el componente App
    // este state va a estar disponible en cualquier parte de la apliación
    <UserState>
      <div className="container p-4">
        <div className="row">
          
          <div className="col-md-7">
            {/* lista de usuarios */}
            <UsersList />
          </div>
          
          <div className="col-md-5">
            {/* información del usuario */}
            <Profile />
          </div>
          
        </div>
      </div>
    </UserState>
  );
}

export default App;
