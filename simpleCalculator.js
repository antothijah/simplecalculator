var input_box = document.getElementById('calculation');

function userClickButton(input){
    var oldinput = input_box.value;
    var newinput = oldinput + '' + input;
    input_box.value = newinput;
}

function calculateValue(){
    var input = input_box.value;
    var result = eval(input);
    input_box.value = result;
}

function clearData(){
    input_box.value = '';
}

function del(){
    var input = input_box.value;
    var lastchar = input.slice(0, input.length - 1);
    input_box.value = lastchar;
}