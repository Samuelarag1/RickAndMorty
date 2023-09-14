const regexUser = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateUser = (user) =>{

    if(!user){
        console.log('El nombre de usuario no puede estar vacio');
    }
    if(!regexUser.test(user)){
        console.log('no pasa las pruebas');
    }
    if(user.length > 34){
        console.log('username no puede ser > 35');
    }
}

const regexPass = /^(?=.*\d).$/


const validatePass = (pass) =>{
    if(pass.length < 6 || pass.length > 10){
        console.log('ingrese una contraseña entre 6 y 10 caracteres.');
    }
    if(regexPass.test(pass)){
        console.log('falta un numero');
    }
}

const pass = 'qwess2r';

validatePass(pass);