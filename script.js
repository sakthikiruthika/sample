const API_URL="http://localhost:3000/api/posts";
const BASE_URL="http://localhost:3000/";

const getposts=()=>{
    fetch(API_URL,{
        method:"GET"
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        return showdata(data);
    })
}

getposts();

const showdata=(data)=>{
    let dataDiv="";
    data.forEach((datum)=>{
        const username=datum.name;
        const usergender=datum.gender;
        const userplace=datum.place;
        console.log(userplace);

        dataDiv+=`
        <div>
        <h1>${username}</h1>
        </div>
        <div>
        <p>${usergender[0].toUpperCase()+usergender.slice(1)}</p>
        </div>
        <div>
        <p>${userplace[0].toUpperCase()+userplace.slice(1)}</p>
        </div>`
    })

    const wrapper=document.querySelector("#wrapper");
    wrapper.innerHTML=dataDiv;

}


const submitButton=document.querySelector('#submit');
console.log(submitButton);

const getValues=()=>{
    const name=document.querySelector("#name").value;
    const gender=document.querySelector("#gender").value;
    const place=document.querySelector("#place").value;

    if(name== "" ||gender== "" || place==""){
        return false;
    }else{
    let data=new FormData();
    console.log(gender,name,place);
    data.append("name",name);
    data.append("gender",gender);
    data.append("place",place);


    fetch(API_URL,{
        method:"POST",
        body:data
    }).then(()=>{
        console.log("OK");
    });
}
}



submitButton.addEventListener('click',getValues);
