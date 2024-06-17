// -------------------- DOM Manipulationin TS --------------------




// ------ Type Assertion ------

// const btn = document.getElementById("btn") as HTMLElement;
// const btn = <HTMLElement> document.getElementById("btn");
const btn = document.getElementById("btn")!;

btn.onclick = ()=>{
    console.log("Btn clicked")
}



// const img = document.getElementById("myimg") as HTMLImageElement;
const img = document.querySelector("img") as HTMLImageElement;
// const img = document.querySelector("img")!;

img.src;




const form = document.getElementById("myform") as HTMLFormElement;
const myinput = document.querySelector("form > input") as HTMLInputElement;


form.onsubmit = (e: SubmitEvent)=>{
    e.preventDefault();
    const val = Number(myinput.value);
    console.log(val);
    console.log(typeof val);

    const h2 = document.createElement("h2");
    h2.textContent = String(val+20);
    const body = document.querySelector("body")!;
    body.append(h2);
}








// ---------------------------------------


interface Person{
    //     name: string,
    //     email: string,

    [key: string]: string;      // key dynamic h
}


const myObj:Person = {
    name: "lokesh",
    email: "lokesh@gmail.com"
};



console.log(myObj.name);

const getName = ():string =>{
    // return myObj.name;
    return myObj["name"];
}
const getEmail = ():string =>{
    // return myObj.email;
    return myObj["email"];
}


// merge prev two fun

const getDataOfMyObj = (key: keyof Person):string =>{
    // return myObj["name"];
    return myObj[key];      // generic bana diya h
}

// const getDataOfMyObj = (key: "name" | "email"):string =>{
//     // return myObj["name"];
//     return myObj[key];      // generic bana diya h
// }


console.log("Name: " + getDataOfMyObj("name"));
console.log("Email: " + getDataOfMyObj("email"));
// console.log("Email: " + getDataOfMyObj("shdi"));  // it cause problem ->  agar key present nhi h to  





let key = "name";
console.log("name => ", myObj[key as keyof Person]);
console.log("name => ", myObj[key as keyof typeof myObj]);    // if Person is not present








