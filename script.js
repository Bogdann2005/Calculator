var pow = document.getElementById('anjatich');
var tt = 0;
pow.onclick = function() {
        var icon = document.getElementById('icon');
        var plusminus = document.getElementById('plusminus');
        var tokos = document.getElementById('tokos');
        // var bajanum = document.getElementById('bajanum');
        var C = document.getElementById('C');
        var yot = document.getElementById('yot');
        var ut = document.getElementById('ut');
        var iny = document.getElementById('iny');
        var bazm = document.getElementById('bazm');
        var chors = document.getElementById('chors');
        var hing = document.getElementById('hing');
        var vec = document.getElementById('vec');
        var minus = document.getElementById('minus');
        var mek = document.getElementById('mek');
        var erku = document.getElementById('erku');
        var ireq = document.getElementById('ireq');
        var plus = document.getElementById('plus');
        var zro = document.getElementById('zro');
        // var ket = document.getElementById('ket');
        var havasar = document.getElementById('havasar');
        var C = document.getElementById('C');
        var ss = document.getElementById('ss');
        // hh1 = document.getElementById('hh1');


        if (tt == 0) {
            icon.style.color = 'red';
            tt++
            C.style.display = 'block';
            ss.style.display = 'block';
            plusminus.style.display = 'block';
            tokos.style.display = 'block';
            // bajanum.style.display = 'block';
            ireq.style.display = 'block';
            havasar.style.display = 'block';
            // ket.style.display = 'block';
            zro.style.display = 'block';
            plus.style.display = 'block';
            yot.style.display = 'block';
            erku.style.display = 'block';
            vec.style.display = 'block';
            iny.style.display = 'block';
            mek.style.display = 'block';
            minus.style.display = 'block';
            hing.style.display = 'block';
            ut.style.display = 'block';
            bazm.style.display = 'block';
            chors.style.display = 'block';

        } else {
            icon.style.color = 'whitesmoke';
            tt = 0;
            hh1.value = '';
            ss.style.display = 'none';
            C.style.display = 'none';
            plusminus.style.display = 'none';
            tokos.style.display = 'none';
            ireq.style.display = 'none';
            havasar.style.display = 'none';
            zro.style.display = 'none';
            plus.style.display = 'none';
            yot.style.display = 'none';
            erku.style.display = 'none';
            vec.style.display = 'none';
            iny.style.display = 'none';
            mek.style.display = 'none';
            minus.style.display = 'none';
            hing.style.display = 'none';
            ut.style.display = 'none';
            bazm.style.display = 'none';
            chors.style.display = 'none';
        }


    }
    // function f(val) {
    //     hh1 = document.getElementById('hh1');
    //     hh1.value += val;
    // }

// function s() {
//     hh1 = document.getElementById('hh1');
//     ss = '';
//     for (let i = 0; i < (hh1.value).length - 1; i++) {
//         ss = (hh1.value)[i]
//     }
//     hh1.value = ss

// }


// function j() {
//     hh1 = document.getElementById('hh1');
//     hh1.value = '';
// }

// function pm() {
//     hh1 = document.getElementById('hh1');
//     hh1.value *= -1;
// }

// function havasar() {
//     hh1 = document.getElementById('hh1');
//     var nam = hh1.value;
//     if (nam == '') {
//         nam = 0;
//     } else {
//         hh1.value = eval(nam);
//     }
// }

// -----------------------------------------------------------------------------//

const hh1 = document.getElementById('hh1');
const hh2 = document.getElementById('hh2');

function f(num) {
    switch (num) {
        case 1:
            hh1.value += "1";
            break;
        case 2:
            hh1.value += "2";
            break;
        case 3:
            hh1.value += "3";
            break;
        case 4:
            hh1.value += "4";
            break;
        case 5:
            hh1.value += "5";
            break;
        case 6:
            hh1.value += "6";
            break;
        case 7:
            hh1.value += "7";
            break;
        case 8:
            hh1.value += "8";
            break;
        case 9:
            hh1.value += "9";
        case 0:
            hh1.value += "0";
            break;
    }

}



function operator(op) {
    switch (op) {
        case "+":
            hh1.value += "+";
            break;
        case "-":
            hh1.value += "-";
            break;
        case "%":
            hh1.value += "%";
            break;
        case "*":
            hh1.value += "*";
            break;

    }
}

function havasar() {
    var nam = +eval(hh1.value);
    hh2.value = nam;
}

function j() {
    hh1.value = '';
    hh2.value = '';

}