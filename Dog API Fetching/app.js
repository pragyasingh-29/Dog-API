let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let link = await getFacts();
    let img = document.querySelector("#result");
    img.setAttribute("src",link);
});

let url="https://dog.ceo/api/breeds/image/random";

async function getFacts(){
    try{
         let res = await axios.get(url);
          return res.data.message;
    }catch(e){
         console.log("error - ",e);
         return "no data found";
    }
}

