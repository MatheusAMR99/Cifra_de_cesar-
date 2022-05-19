
/*const handleSubmit = (event) => {
    event.preventDefault();
}*/
var texto
var cifra = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]



function cripCC() {
    var textoCriptografado = ""
    texto = texto.toUpperCase();
    var deslocamento = Number(document.querySelector("#range").value);

    console.log(deslocamento)

    for (i = 0; i < texto.length; i++) {


        var letraAscii = texto.charCodeAt(i)

        console.log(letraAscii)
        if (letraAscii == 32) {
            continue;
        }

        var aux = (letraAscii + deslocamento - 65) % cifra.length

        textoCriptografado += (cifra[aux])

    }

    document.querySelector("#texto").value = textoCriptografado

}

function base64() {
    document.querySelector("#texto").value = btoa(texto)
}

function callFunctionbutton() {


    var space = 32;



    var select = document.getElementById("idselecione");

    var value = select.options[select.selectedIndex].value;

    console.log(value)



    texto = document.querySelector("#texto").value;
    console.log(texto)

    if (value == "cc") {

        cripCC()
    }
    else {
        base64()
    }
}
