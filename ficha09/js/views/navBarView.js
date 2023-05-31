import * as User from "../models/modelUser.js"

export function viewNavBar(){
    User.init();

    let result = `
    <a class="navbar-brand ml-2" href="../index.html">
        <img src="../assets/imgs/Mnuse-logo-memory-cards-04.png" style="width: 150px; height:30px"/>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">`;

    if (User.isLogged() ){

        result += `<a id="btnAddBand" class="nav-link" href="./html/addBand.html">Add band</a>
                        <div id="authButtons" class="ms-auto m-1">
                            Olá <a href="#">${User.getUserLogged().username}</a>
                            <button id="btnLogout" class="btn btn-outline-success m-2 my-sm-0">
                                Logout
                            </button>
                        </div>`;
    } else {
        result += `<div id="btnsNav" class="ms-auto m-1">                    
                    <button id="loginBtn" class="btn btn-outline-success m-1" data-bs-toggle="modal" data-bs-target="#mdlLogin">
                        Login
                    </button>
                    <button class="btn btn-outline-success m-1" data-bs-toggle="modal" data-bs-target="#mdlRegister">
                        Register
                    </button>                
                </div>`;
                console.log("testando")
    };

    document.querySelector("nav").innerHTML = result;
};


viewNavBar()

document.getElementById("loginBtn").addEventListener("click", User.login())