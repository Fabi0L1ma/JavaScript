function contador() {
    let caracter = document.getElementById('input').value;

    document.getElementById('input').value = '';

    caracter.trim();

    switch (caracter) 
    {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            document.getElementById('numero').value = caracter;
            break;

        default:
            document.getElementById('string').value = caracter;
            break;
    }



}