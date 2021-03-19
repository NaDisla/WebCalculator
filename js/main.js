window.addEventListener('load',function()
{
    var numbers = document.querySelectorAll(".numbers");
    var txtResult = document.querySelector("label");
    var clear = document.querySelector("#clear");

    for(var i = 0; i < numbers.length; i++)
    {
        numbers[i].addEventListener('click',function(){
            if(txtResult.innerHTML == "0")
            {
                txtResult.innerHTML = "";
            }
            txtResult.innerHTML += this.textContent;
        });    
    }
    clear.addEventListener('click', () => {txtResult.innerHTML = 0});
});
