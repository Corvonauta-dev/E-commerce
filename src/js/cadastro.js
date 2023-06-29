$(document).ready(function () {
    $("#cpf").inputmask("999.999.999-99");
    $("#cep").inputmask("99999-99");
});

const form = document.getElementById('form');
const campos = document.querySelectorAll('.inputs');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const cepRegex = /^([\d]{5})-*([\d]{2})/;
const cpfRegex = /^([\d]{3})\.*([\d]{3})\.*([\d]{3})-*([\d]{2})/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(nameValidate() && emailValidate() && cpfValidate() && cepValidate() && ruaValidate() && bairroValidate() && cidadeValidate() && ufValidate() && numeroValidate() && dataValidate() && senhaValidate()){
        return;
    }
    alert("Formulário enviado com sucesso!");
    window.location.href = "index.html";
});

function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';

}

function removeError(index) {
    campos[index].style.border = '1px solid #ccc';
    spans[index].style.display = 'none';
}

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);
        return true;
    } else {
        removeError(0);
        return false;
    }
}

function emailValidate() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
        return true;
    } else {
        removeError(1);
        return false;
    }
}

function cpfValidate() {
    if (!cpfRegex.test(campos[2].value)) {
        setError(2);
        return true;
    } else {
        removeError(2);
        return false;
    }
}

function cepValidate() {
    if (!cepRegex.test(campos[3].value)) {
        setError(3);
        return true;
    } else {
        removeError(3);
        return false;
    }
}

function ruaValidate() {
    if (campos[4].value.length < 3) {
        setError(4);
        return true;
    } else {
        removeError(4);
        return false;
    }
}

function bairroValidate() {
    if (campos[5].value.length < 3) {
        setError(5);
        return true;
    } else {
        removeError(5);
        return false;
    }
}

function cidadeValidate() {
    if (campos[6].value.length < 3) {
        setError(6);
        return true;
    } else {
        removeError(6);
        return false;
    }
}

function ufValidate() {
    if (campos[7].value.length < 2) {
        setError(7);
        return true;
    } else {
        removeError(7);
        return false;
    }
}

function numeroValidate() {
    if (campos[8].value.length < 1) {
        setError(8);
        return true;
    } else {
        removeError(8);
        return false;
    }
}

function dataValidate() {
    console.log(campos[9].value);
    if (!validarDataNascimento(campos[9].value)) {
        setError(9);
        return true;
    } else {
        removeError(9);
        return false;
    }
}

function senhaValidate() {
    if (campos[10].value.length < 8) {
        setError(10);
        return true;
    } else {
        removeError(10);
        return false;
    }
}

function validarDataNascimento(data) {

    const partesData = data.split("-");
    const dia = parseInt(partesData[2], 10);
    const mes = parseInt(partesData[1], 10) - 1;
    const ano = parseInt(partesData[0], 10);

    const dataNascimento = new Date(ano, mes, dia);
    const hoje = new Date();

    if (
        dataNascimento.getDate() !== dia ||
        dataNascimento.getMonth() !== mes ||
        dataNascimento.getFullYear() !== ano ||
        dataNascimento > hoje ||
        hoje.getFullYear() - dataNascimento.getFullYear() < 18
    ) {
        return false;
    }

    return true;
}


