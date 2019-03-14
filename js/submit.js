function submit() {
    debugger;
    //LLamo a la api, le doy el dni y me devuelve los datos principales
    this.callback();
    var code = document.getElementById("code").value;
    var aux = new Object();
    //datos principales
    aux.fullname = "Agustin Aguilar";
    aux.cuil = "20406397948";
    //datos code
    if (code == "BB1K") {
        aux.car = '<img style="width:30%;border-radius:7px;" src="img/kwidd.png">';
        aux.subcription = "$20.000,00";
        aux.paynow = "$15.000,00";
        document.getElementById("car").innerHTML = aux.car;
        document.getElementById("paynow").innerHTML = aux.paynow;
        document.getElementById("subcription").innerHTML = aux.subcription;
    }
    else if (code == "HHA2") {
        aux.car = '<img style="width:30%;border-radius:7px;" src="img/capturr.png">';
        aux.paynow = "$28.000,00";
        aux.subcription = "$35.000,00";
        document.getElementById("car").innerHTML = aux.car;
        document.getElementById("paynow").innerHTML = aux.paynow;
        document.getElementById("subcription").innerHTML = aux.subcription;
    }
    else if (code == "LSR5") {
        aux.car = '<img style="width:30%;border-radius:7px;" src="img/logan.jpg">';
        aux.paynow = "$16.500,00";
        aux.subcription = "$22.000,00";
        document.getElementById("car").innerHTML = aux.car;
        document.getElementById("paynow").innerHTML = aux.paynow;
        document.getElementById("subcription").innerHTML = aux.subcription;
    }
    else if (code == "M79U") {
        aux.car = '<img style="width:30%;border-radius:7px;" src="img/dusteroroch.jpg">';
        aux.paynow = "$23.500,00";
        aux.subcription = "$28.000,00";
        document.getElementById("car").innerHTML = aux.car;
        document.getElementById("paynow").innerHTML = aux.paynow;
        document.getElementById("subcription").innerHTML = aux.subcription;
    }
    else if (code == "F67N") {
        aux.car = '<img style="width:30%;border-radius:7px;" src="img/kangoo.jpg">';
        aux.paynow = "$21.500,00";
        aux.subcription = "$26.000,00";
        document.getElementById("car").innerHTML = aux.car;
        document.getElementById("paynow").innerHTML = aux.paynow;
        document.getElementById("subcription").innerHTML = aux.subcription;
    }
    else if (code == "B4M1") {
        // aux.car = "SANDERO EXPRESSION";
        aux.car = '<img style="width:30%;border-radius:7px;" src="img/kwidd.png">';
        aux.paynow = "$15.500,00";
        aux.subcription = "$21.000,00";
        document.getElementById("car").innerHTML = aux.car;
        document.getElementById("paynow").innerHTML = aux.paynow;
        document.getElementById("subcription").innerHTML = aux.subcription;
    }
    else if (code == "B4M2") {
        aux.car = '<img style="width:30%;border-radius:7px;" src="img/stepway.jpg">';
        aux.paynow = "$19.000,00";
        aux.subcription = "$24.000,00";
        document.getElementById("car").innerHTML = aux.car;
        document.getElementById("paynow").innerHTML = aux.paynow;
        document.getElementById("subcription").innerHTML = aux.subcription;
    }
    else if (code == "M79H") {
        //aux.car = "DUSTR EXPRESSION";
        aux.car = '<img style="width:30%;border-radius:7px;" src="img/kwidd.png">';
        aux.paynow = "$22.500,00";
        aux.subcription = "$27.000,00";
        document.getElementById("car").innerHTML = aux.car;
        document.getElementById("paynow").innerHTML = aux.paynow;
        document.getElementById("subcription").innerHTML = aux.subcription;
    }
    else if (code == "ADC2") {
        aux.car = '<img style="width:30%;border-radius:7px;" src="img/master.jpg">';
        aux.paynow = "$43.000,00";
        aux.subcription = "$53.000,00";
        document.getElementById("car").innerHTML = aux.car;
        document.getElementById("paynow").innerHTML = aux.paynow;
        document.getElementById("subcription").innerHTML = aux.subcription;
    }
    else {
        App.alert("El codigo ingresado es incorecto");
    }
};

function callback() {
    const url = 'http://sac.nosis.com.ar/Sac_ServicioVI/Consulta.asp';
    const data = {
        IdConsulta: 132,
        TipoConsulta: 1,
        Doc: 40639794,
        MaxRows: 1,
        User: 62304,
        Password: 253864
    };
    $.post(url, data, function (data, status) {
        console.log(`${data} and status is ${status}`);
    });

}