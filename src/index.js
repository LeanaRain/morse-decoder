const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let sentense = '';
    //строка разбив. на блоки по 10 символов
    for (let i = 0; i < expr.length; i += 10) {
        const morseChar = expr.slice(i, i + 10);
        
        // Если символы 0 (пробел) - пропускаем 
        if (morseChar === '**********') {
            sentense += ' ';
            continue;
        }

        let morseSymbol = '';

        //10 замен. на точку, 11 на тире
        for (let j = 0; j < morseChar.length; j += 2) {
            const pair = morseChar.slice(j, j + 2);
            if (pair === '10') {
                morseSymbol += '.';
            } else if (pair === '11') {
                morseSymbol += '-';
            }
            // Если 00 пропуск
        }

        //const morseSymbol = morseChar.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '');

        sentense += MORSE_TABLE[morseSymbol] || '';
    }
    return sentense;
}

module.exports = {
    decode
}