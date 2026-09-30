/* ============================================
   Validacao de campos - ONG Pepe Legal
   Contém: validarCPF(), validarTelefone() e validarCEP(),
   cada uma com RegEx ancorada (^...$).
   Aplica as classes .valido e .invalido nos campos.
   ============================================ */
export function validarCPF(campo) {
    
    const regex = /^[0-9]{11}$/;
    if (regex.test(campo.value)) {
        campo.classList.add('valido');
        campo.classList.remove('invalido');
    } else {
        campo.classList.add('invalido');
        campo.classList.remove('valido');
    }
 }

export function validarTelefone(campo) {
    
    const regex = /^[0-9]{10,11}$/;
    if (regex.test(campo.value)) {
        campo.classList.add('valido');
        campo.classList.remove('invalido');
    } else {
        campo.classList.add('invalido');
        campo.classList.remove('valido');
    }
}

export function validarCEP(campo) {
    
    const regex = /^[0-9]{8}$/;
    if (regex.test(campo.value)) {
        campo.classList.add('valido');
        campo.classList.remove('invalido');
    } else {
        campo.classList.add('invalido');
        campo.classList.remove('valido');
    }
}