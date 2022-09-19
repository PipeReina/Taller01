const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input,select');

let fechain= "02-12-2002";
const expresiones = {
	tipDocc: /^[a-zA-Z0-9À-ÿ\s\.]{1,40}$/,
	nombre: /^[a-zA-Z0-9À-ÿ\s]{1,40}$/, 
	doc: /^[0-9]{5,40}$/, 
	password: /^.{10,30}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@misena.edu.co$/,
	fechaNaci:/^199+[0-9\s\-]{1,40}$/,
	fechaNaci1:/^2001+[0-9\s\-]{1,40}$/,
	fechaNaci2:/^2002+[0-9\s\-]{1,40}$/,
}

const campos={
    nombre:false,
    doc:false,
    tipDoc:false,
    apellido:false,
    fechaNaci:false,
    email:false,
    passaword:false,
    passaword2:false,
	terminos:false
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "TipDoc":
            if(expresiones.tipDocc.test(e.target.value)){
                document.getElementById('grupo_TipDoc').classList.remove('formulario_grupo-incorrecto');
                document.getElementById('grupo_TipDoc').classList.add('formulario_grupo-correcto');
                document.querySelector('#grupo_TipDoc i').classList.add('fa-check-circle');
                document.querySelector('#grupo_TipDoc i').classList.remove('fa-times-circle');
                document.querySelector('#grupo_TipDoc .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['fechaPago'] = true;
            }else{
                document.getElementById('grupo_TipDoc').classList.add('formulario_grupo-incorrecto')
                document.getElementById('grupo_TipDoc').classList.remove('formulario_grupo-correcto')
                document.querySelector('#grupo_TipDoc i').classList.add('fa-times-circle');
                document.querySelector('#grupo_TipDoc i').classList.remove('fa-check-circle');
                document.querySelector('#grupo_TipDoc .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['fechaPago'] = false;
            }
        break;
        case "Doc":
            if(expresiones.doc.test(e.target.value)){
                document.getElementById('grupo_Doc').classList.remove('formulario_grupo-incorrecto');
                document.getElementById('grupo_Doc').classList.add('formulario_grupo-correcto');
                document.querySelector('#grupo_Doc i').classList.add('fa-check-circle');
                document.querySelector('#grupo_Doc i').classList.remove('fa-times-circle');
                document.querySelector('#grupo_Doc .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['fechaPago'] = true;
            }else{
                document.getElementById('grupo_Doc').classList.add('formulario_grupo-incorrecto')
                document.getElementById('grupo_Doc').classList.remove('formulario_grupo-correcto')
                document.querySelector('#grupo_Doc i').classList.add('fa-times-circle');
                document.querySelector('#grupo_Doc i').classList.remove('fa-check-circle');
                document.querySelector('#grupo_Doc .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['fechaPago'] = false;
            }
        break;
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo_nombre').classList.remove('formulario_grupo-incorrecto');
                document.getElementById('grupo_nombre').classList.add('formulario_grupo-correcto');
                document.querySelector('#grupo_nombre i').classList.add('fa-check-circle');
                document.querySelector('#grupo_nombre i').classList.remove('fa-times-circle');
                document.querySelector('#grupo_nombre .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['fechaPago'] = true;
            }else{
                document.getElementById('grupo_nombre').classList.add('formulario_grupo-incorrecto')
                document.getElementById('grupo_nombre').classList.remove('formulario_grupo-correcto')
                document.querySelector('#grupo_nombre i').classList.add('fa-times-circle');
                document.querySelector('#grupo_nombre i').classList.remove('fa-check-circle');
                document.querySelector('#grupo_nombre .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['fechaPago'] = false;
            }
        break;
        case "apellido":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo_Apellido').classList.remove('formulario_grupo-incorrecto');
                document.getElementById('grupo_Apellido').classList.add('formulario_grupo-correcto');
                document.querySelector('#grupo_Apellido i').classList.add('fa-check-circle');
                document.querySelector('#grupo_Apellido i').classList.remove('fa-times-circle');
                document.querySelector('#grupo_Apellido .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['fechaPago'] = true;
            }else{
                document.getElementById('grupo_Apellido').classList.add('formulario_grupo-incorrecto')
                document.getElementById('grupo_Apellido').classList.remove('formulario_grupo-correcto')
                document.querySelector('#grupo_Apellido i').classList.add('fa-times-circle');
                document.querySelector('#grupo_Apellido i').classList.remove('fa-check-circle');
                document.querySelector('#grupo_Apellido .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['fechaPago'] = false;
            }
        break;
        case "FechaNaci":
            if(expresiones.fechaNaci.test(e.target.value) || expresiones.fechaNaci1.test(e.target.value) || expresiones.fechaNaci2.test(e.target.value)){
                document.getElementById('grupo_FechaNaci').classList.remove('formulario_grupo-incorrecto');
                document.getElementById('grupo_FechaNaci').classList.add('formulario_grupo-correcto');
                document.querySelector('#grupo_FechaNaci i').classList.add('fa-check-circle');
                document.querySelector('#grupo_FechaNaci i').classList.remove('fa-times-circle');
                document.querySelector('#grupo_FechaNaci .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['fechaPago'] = true;
            }else{
                document.getElementById('grupo_FechaNaci').classList.add('formulario_grupo-incorrecto')
                document.getElementById('grupo_FechaNaci').classList.remove('formulario_grupo-correcto')
                document.querySelector('#grupo_FechaNaci i').classList.add('fa-times-circle');
                document.querySelector('#grupo_FechaNaci i').classList.remove('fa-check-circle');
                document.querySelector('#grupo_FechaNaci .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['fechaPago'] = false;
            }
        break;
        case "email":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('grupo_email').classList.remove('formulario_grupo-incorrecto');
                document.getElementById('grupo_email').classList.add('formulario_grupo-correcto');
                document.querySelector('#grupo_email i').classList.add('fa-check-circle');
                document.querySelector('#grupo_email i').classList.remove('fa-times-circle');
                document.querySelector('#grupo_email .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['fechaPago'] = true;
            }else{
                document.getElementById('grupo_email').classList.add('formulario_grupo-incorrecto')
                document.getElementById('grupo_email').classList.remove('formulario_grupo-correcto')
                document.querySelector('#grupo_email i').classList.add('fa-times-circle');
                document.querySelector('#grupo_email i').classList.remove('fa-check-circle');
                document.querySelector('#grupo_email .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['fechaPago'] = false;
            }
        break;
        case "passaword":
            if(expresiones.password.test(e.target.value)){
                document.getElementById('grupo_passaword').classList.remove('formulario_grupo-incorrecto');
                document.getElementById('grupo_passaword').classList.add('formulario_grupo-correcto');
                document.querySelector('#grupo_passaword i').classList.add('fa-check-circle');
                document.querySelector('#grupo_passaword i').classList.remove('fa-times-circle');
                document.querySelector('#grupo_passaword .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['fechaPago'] = true;
             }else{
                document.getElementById('grupo_passaword').classList.add('formulario_grupo-incorrecto')
                document.getElementById('grupo_passaword').classList.remove('formulario_grupo-correcto')
                document.querySelector('#grupo_passaword i').classList.add('fa-times-circle');
                document.querySelector('#grupo_passaword i').classList.remove('fa-check-circle');
                document.querySelector('#grupo_passaword .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['fechaPago'] = false;
				
            }validarPassword2();
        break;
        case "passaword2":
            
			if(expresiones.password.test(e.target.value)){
                document.getElementById('grupo_passaword2').classList.remove('formulario_grupo-incorrecto');
                document.getElementById('grupo_passaword2').classList.add('formulario_grupo-correcto');
                document.querySelector('#grupo_passaword2 i').classList.add('fa-check-circle');
                document.querySelector('#grupo_passaword2 i').classList.remove('fa-times-circle');
                document.querySelector('#grupo_passaword2 .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['fechaPago'] = true;
             }else{
                document.getElementById('grupo_passaword2').classList.add('formulario_grupo-incorrecto')
                document.getElementById('grupo_passaword2').classList.remove('formulario_grupo-correcto')
                document.querySelector('#grupo_passaword2 i').classList.add('fa-times-circle');
                document.querySelector('#grupo_passaword2 i').classList.remove('fa-check-circle');
                document.querySelector('#grupo_passaword2 .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['fechaPago'] = false;
				
            }validarPassword2();
        case "check":
            if(e.target.value!==false){
                document.getElementById('grupo_check').classList.remove('formulario_grupo-incorrecto');
                document.getElementById('grupo_check').classList.add('formulario_grupo-correcto');
                document.querySelector('#grupo_check i').classList.add('fa-check-circle');
                document.querySelector('#grupo_check i').classList.remove('fa-times-circle');
                document.querySelector('#grupo_check .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['fechaPago'] = true;
            }else if(e.target.value!==true){
                document.getElementById('grupo_check').classList.add('formulario_grupo-incorrecto')
                document.getElementById('grupo_check').classList.remove('formulario_grupo-correcto')
                document.querySelector('#grupo_check i').classList.add('fa-times-circle');
                document.querySelector('#grupo_check i').classList.remove('fa-check-circle');
                document.querySelector('#grupo_check .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['fechaPago'] = false;
            }
        break;
    }
}




inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario )
    input.addEventListener('blur', validarFormulario )
})


const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('passaword');
	const inputPassword2 = document.getElementById('passaword2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__passaword2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__passaword2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__passaword2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__passaword2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__passaword2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
		alert("hola")
	} else {
		document.getElementById(`grupo__passaword2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__passaword2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__passaword2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__passaword2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__passaword2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
		alert("adios")
	}
}