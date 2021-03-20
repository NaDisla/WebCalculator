window.addEventListener('load', function () {
    var numbers = document.querySelectorAll(".numbers");
    var txtResult = document.querySelector("label");
    var clearButton = document.querySelector(".row01");
    var operations = document.querySelectorAll(".operations");
    var num01, num02;
    var control = 1;
    var igual = document.querySelector("#igual");

    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function () {
            if (txtResult.innerHTML == 0 || control == -1) {
                if (txtResult.innerHTML == 0) {
                    txtResult.innerHTML = "";
                }
                if (control == -1) {
                    txtResult.innerHTML = "";
                    control = -2;
                }
            }
            txtResult.innerHTML += this.textContent;
            if (control == 1) {
                num01 = parseInt(txtResult.innerHTML);
            }
            else if (control < 0) {
                num02 = parseInt(txtResult.innerHTML);
            }
        });
    }

    for (let i = 0; i < operations.length; i++) {
        operations[i].addEventListener('click', function () {
            op = this.textContent;
            control = -1;
        });
    }

    clearButton.addEventListener('click', () => { 
        txtResult.innerHTML = 0;
        num01 = 0;
        num02 = 0;
        control = 1;
    });

    igual.addEventListener('click', () => {
        txtResult.innerHTML = "";
        let resultado;
        switch (op) {
            case "+":
                resultado = num01 + num02;
                txtResult.innerHTML = resultado;
                break;
            case "-":
                resultado = num01 - num02;
                txtResult.innerHTML = resultado;
                break;
            case "x":
                resultado = num01 * num02;
                txtResult.innerHTML = resultado;
                break;
            case "÷":
                resultado = num01 / num02;
                txtResult.innerHTML = resultado;
                break;
        }
    });
});
