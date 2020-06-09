let email = document.getElementById("email")
function enviar(){ 
  email = document.getElementById("email").value

  if(email.indexOf('@') >= 1 && email.indexOf('.') >= 1 && email.indexOf(' ') <= 0){alert(`O email ${email} foi enviado :)`)
    let p = document.querySelector('p#login')
    p.innerHTML= 'Bem vindx, ' + email
  }else{
    alert(`Email inválido!`)
  }

  let footer = document.querySelector('footer')

  footer.style.padding = "20px 0";
}