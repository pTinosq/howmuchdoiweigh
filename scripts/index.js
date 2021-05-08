function setup() {
    var packages = document.getElementById("packages");
    var i;
    for (i = 0; i < Object.keys(items).length; i++) {
        var div_obj = document.createElement("div");
        div_obj.id = Object.keys(items)[i];
        div_obj.className = "package";
        var h2_obj = document.createElement("h2");
        h2_obj.innerHTML = `0 ${items[Object.keys(items)[i]].plural}`;
        div_obj.appendChild(h2_obj);
        packages.appendChild(div_obj);
    };
};

function calculateWeight(user_weight, id) {
    var object_weight = items[id].weight;
    
    var value = parseFloat(user_weight) / parseFloat(object_weight);

    return value.toFixed(3);
}

function weightHandler() {
    var user_weight = parseFloat(document.getElementById("weightinput").value);

    for (i = 0; i < Object.keys(items).length; i++) {
        var obj = document.getElementById(Object.keys(items)[i]).lastChild;
        if(user_weight == "Infinity"){
            obj.innerHTML = `∞ ${items[Object.keys(items)[i]].plural}`;
        }
        else if (isNaN(user_weight)) {
            obj.innerHTML = `Invalid ${items[Object.keys(items)[i]].plural}`;
        } else {
            var calc_value = calculateWeight(user_weight, Object.keys(items)[i]);
            if (calc_value == 1) {
                obj.innerHTML = `1 ${items[Object.keys(items)[i]].singular}`;
            } else {
                obj.innerHTML = `${calc_value} ${items[Object.keys(items)[i]].plural}`;
            }
        }
    }
}


// https://stackoverflow.com/a/7295864/9700228
function noMinus(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if(charCode == 173 || charCode ==  189 || charCode == 187){
        return false;
    } else {
        return true;
    }
}

setup();
