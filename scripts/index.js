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
    // KG -> Grams
    var user_weight = user_weight * 1000;

    var value = parseFloat(user_weight) / parseFloat(object_weight);

    return value.toFixed(1);
}

function weightHandler() {
    var user_weight = parseFloat(document.getElementById("weightinput").value);

    for (i = 0; i < Object.keys(items).length; i++) {
        var obj = document.getElementById(Object.keys(items)[i]).lastChild;
        if (isNaN(user_weight) || user_weight == "Infinity") {
            obj.innerHTML = `∞ ${items[Object.keys(items)[i]].plural}`;
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
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    console.log(charCode);
    if (evt.keyCode == 190 || evt.keyCode == 8 || evt.keyCode == 37 || evt.keyCode == 38 || evt.keyCode == 39 ||
        evt
        .keyCode == 40 || evt.keyCode == 46) {
        return true;
    } else if ((evt.keyCode >= 96) || (evt.keyCode <= 105)) {
        return true
    } else if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

setup();