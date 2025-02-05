let button = document.querySelector("button");
let weight = document.querySelector("#weight")
let height = document.querySelector("#height")
let msg = document.querySelector(".msg")
let bmi = null;



button.addEventListener('click',()=>{
    if(weight.value === "" || height.value === ""){
        alert("Enter valid data...") 
    }
    else{
        bmi = Math.round((weight.value)/(height.value*height.value))
        weight.value="";
        height.value="";
        if(bmi<=18.5){
           
            msg.innerHTML = `You are 'Underweight',  your BMI is ${bmi}`
            msg.style.backgroundColor = "lightslategray" 
            msg.style.color = "white" 
        }
        else if(bmi>18.5 && bmi<=25){
            msg.innerHTML = `You are 'Optimal',  your BMI is ${bmi}`
            msg.style.backgroundColor = "green" 
            msg.style.color = "white" 
        }
        else if(bmi>25 && bmi<30){
            msg.innerHTML = `You are 'Overweight',  your BMI is ${bmi}`
            msg.style.backgroundColor = "orange" 
            msg.style.color = "white" 
        }
        else{
            msg.innerHTML = `You are 'Obese',  your BMI is ${bmi}`
            msg.style.backgroundColor = "red" 
            msg.style.color = "white" 
        }
    }
})