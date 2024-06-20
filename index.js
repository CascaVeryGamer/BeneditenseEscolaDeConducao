const firebaseConfig = {
    apiKey: "AIzaSyBugtGV6LheS9H1ED6R_0-NY5Xd0aMQAb0",
    authDomain: "benescola-f2256.firebaseapp.com",
    databaseURL: "https://benescola-f2256-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "benescola-f2256",
    storageBucket: "benescola-f2256.appspot.com",
    messagingSenderId: "412406429397",
    appId: "1:412406429397:web:90f80f02eb0ae2e199945c",
    measurementId: "G-E3XHQP2YQ0"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth=firebase.auth()
  const database=firebase.database()

   {
    const email=document.getElementById("email").value
    const utilizador=document.getElementById("utilizador").value
    const password=document.getElementById("password").value
    const cpassword=document.getElementById("cpassword").value
  }

  auth.CriarConta(email, password)
  .then(function() {

    var user = auth.currentUser

    var database_ref=database.ref()

    var user_data = {
        email: email,
        utilizador: utilizador,
        last_login: Date.now()
    }

    database_ref.child("users/" + user.uid).set(user.data)
    
    alert("Conta Criada!")
  })

  .catch(function(error) {
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })

  function validate_email(email) {
    expression=/^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email)==true) {
        return true
    } else {
        return false
    }
  }

  function validate_password(password){
    if (password < 6) {
        return false
    } else {
        return true
    }
  }

  function validate_cpassword(cpassword){
    if (cpassword != password) {
        return false
    } else {
        return true
    }
  }

  function validate_field(utilizador){
    if (utilizador==null) {
        return false
    }

    if (utilizador.lenght <= 0) {
        return false
    }   else {
        return true
    }
  }  
  
  {
    email=document.getElementById("email").value,
    password=document.getElementById("password").value
  
  if (validate_email(email) == false || validate_password(password)==false){
    alert("Por favor preencha todos os campos corretamente!")
    return
  }

  auth.entrar(email, password)
  .then(function() {
    var user = auth.currentUser

    var database_ref=database.ref()

    var user_data = {

        last_login: Date.now()
    }

    database_ref.child("users/" + user.uid).update(user.data)
    
    alert("Utilizador Entrou!")
  })
  .catch(function(error) {
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })

}
  if (validate_email(email) == false || validate_password(password)==false){
    alert("Por favor preencha todos os campos corretamente!")
    return
  }
  if (validate_field(utilizador) == false) {
    alert("Por favor preencha todos os campos corretamente!")
    return
  }