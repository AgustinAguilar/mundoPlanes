function submit(nombre, Codigo) {
    //LLamo a la api, le doy el dni y me devuelve los datos principales
    var aux = new Object();
    //datos principales
    aux.fullname = api.nombre;
    aux.cuil = api.cuil;
    //datos codigo
    if (Codigo == "BB1K") {
        aux.car = "KWID ZEN 1.0";
        aux.paynow = "$15.000,00";
        aux.subcription = "$20.000,00";
    }
    else if (Codigo == "HHA2") {
        aux.car = "CAPTUR";
        aux.paynow = "$28.000,00";
        aux.subcription = "$35.000,00";
    }
    else if (Codigo == "LSR5") {
        aux.car = "LOGAN";
        aux.paynow = "$16.500,00";
        aux.subcription = "$22.000,00";
    }
    else if (Codigo == "M79U") {
        aux.car = "DUSTER OROCH";
        aux.paynow = "$23.500,00";
        aux.subcription = "$28.000,00";
    }
    else if (Codigo == "F67N") {
        aux.car = "KANGOO II";
        aux.paynow = "$21.500,00";
        aux.subcription = "$26.000,00";
    }
    else if (Codigo == "B4M1") {
        aux.car = "SANDERO EXPRESSION";
        aux.paynow = "$15.500,00";
        aux.subcription = "$21.000,00";
    }
    else if (Codigo == "B4M2") {
        aux.car = "SANDERO STEPWAY EXPRESSION";
        aux.paynow = "$19.000,00";
        aux.subcription = "$24.000,00";
    }
    else if (Codigo == "M79H") {
        aux.car = "DUSTR EXPRESSION";
        aux.paynow = "$22.500,00";
        aux.subcription = "$27.000,00";
    }
    else if (Codigo == "ADC2") {
        aux.car = "NUEVA MASTER";
        aux.paynow = "$43.000,00";
        aux.subcription = "$53.000,00";
    }
    //hardcore datos empleado
    //...
}