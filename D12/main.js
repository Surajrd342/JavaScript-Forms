//Date 
//document.write(Date());  
// document.getElementById("demo").innerHTML = "Date : " + Date(); 


function submitForm (event) {
    event.preventDefault() //prevent page to load another default page 
    const form = document.forms["login-form"];
    const brand = form.brand.value;   //it takes values from name 
    const model = form.model.value;   //it takes values from name 
    const color = form.color.value;   //it takes values from name 

    const car = {
        brand: brand,
        model: model,
        color: color,
    };

    const strigify = JSON.stringify(car);  //To stringify the object 

    localStorage.setItem("car", strigify);  //To store a data in local storage

    const carDetails = `This is ${brand} ${model} ${color} car.`;

    document.getElementById("car-detail").innerHTML = carDetails;
}