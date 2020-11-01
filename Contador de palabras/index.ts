let text = "Hola que tal, bienvenido a este ejercicio de pruebas. Aquí vamos contar la cantidad de palabras que se repiten en este texto a traves de tablas de hash y utilizando typescript, tal palabras.";

function normalize(word){
    word.toLowerCase().replace(/[.!,]/g)
}

function wordRepetitions (text: string){
    let dictionary: {[key: string]:number}={};
    let separateWords = text.split(" ");
    for (let word of separateWords){
        if(normalize(word) in dictionary){
            ++dictionary[normalize(word)];
        }
        else{
            dictionary[normalize(word)]=1;
        }
    }
    console.log(dictionary);
}

wordRepetitions(text);