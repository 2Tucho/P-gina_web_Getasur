document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Aplazo el envío para poder hacer validaciones
  
    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
    const tlf = event.target.tlf.value;
    const email = event.target.email.value;
    const departamento = event.target.departamento.value; //El select
    const mensaje = event.target.mensaje.value; //El textarea
    const accept = event.target.accept.checked; //La política de privacidad
  
    let msj = "";
  
    // LÓGICA DE VALIDACIÓN

    // 3 < fname < 30 required
    if (fname.length < 3 || fname.length > 30) {
      //err
      console.log("Nombre fuera de tamaño: 3-30");
      msj += "Nombre fuera de tamaño: 3-30\n";
    }
  
    // 3 < lname < 30 required
    if (lname.length < 3 || lname.length > 30) {
      console.log("Apellido fuera de tamaño: 3-30");
      msj += "Apellido fuera de tamaño: 3-30\n";
    }
  
    //Necesito que acabe en .com o .es. If != .com o !=.es ---> Mensaje de error
    //Necesito que siga la construcción del @. If != @ ---> Mensaje de error
    if (
      (!email.endsWith(".com") && !email.endsWith(".es")) ||
      !email.includes("@")
    ) {
      console.log("Error validación: " + email);
      msj += "Error validación: " + email+"\n";
    }

    //Quiero que se elija cualquier opción que no sea eligeDepartamento
    
  
    //Política de Privacidad
    if (!accept || !spam) {
      console.log("Por favor, acepta la Política de Privacidad");
      msj += "Por favor, acepta la Política de Privacidad\n";
    }
    console.log(msj);
  
    // Comprobar si hay errores
    if (msj.length != 0) {
      alert(msj); //imprime mensaje final de error
      //document.body.innerHTML += msj;
      let p = document.createElement("pre");
      let mensaje = document.createTextNode(msj);
      p.style.color = "#DD1C1A";
      p.style.fontSize = "20px";
      p.appendChild(mensaje);
  
      document.getElementById("formulario").appendChild(p); // dibuja resultado
    }
    else{
      //Enviar formulario
      //document.querySelector("form").submit();
      alert("Formulario enviado con éxito");
      event.target.submit();
    }
  });