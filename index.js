let sym = '';
let resString = '';//eslint-disable-line

function padString(string, resLength, symbol, flag) {
    if(resLength < string.length){
        return string;
    }
    else {
        let i = 0;
        let difference = 0;
        difference = resLength - string.length;
        for(i = 0; i < difference; i++){ //eslint-disable-line
            sym += symbol;
        }
    }

    if(flag === true) {
        return resString = string + sym;
    }
    else {
        return resString = sym + string;
    }

}
const flag = true;
const resLength = 8;
padString('hi', resLength, '8', flag);


