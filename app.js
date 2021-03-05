window onLoad(){
    document.querySelector('#excuse').innerHTML = generateExcuse() {
        }

function generateExcuse(){ 

    let who = ['My dad', 'My wife', 'My dog', 'His cat', 'Her pet lizard'];
    let action = ['ate', 'pooped', 'peed', 'threw', 'hid', 'burned'];
    let what = ['my homework', 'my phone', 'my computer', 'my tablet', 'the money'];
    let when = ['right before the class', 'while I was sleeping', 'during my lunch', 'when I was taking a shower']

    let whoStr = Math.floor(Math.random() * who.length);
    let actionStr = Math.floor(Math.random() * action.length);
    let whatStr = Math.floor(Math.random() * what.length);
    let whenStr = Math.floor(Math.random() * when.length);

    return who[whoStr] + ' ' + action[actionStr] + ' ' + what[whatStr] + ' ' + when[whenStr]
    
}    
