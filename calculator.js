let result=document.getElementById("inputext");

let calculate=(number)=>{
    result.value+=number;

}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Wprowadź poprawną wartość");
    }
}

function clr(){
    result.value=result.value.slice(0,-20);
}

function del(){
    result.value=result.value.slice(0,-1);
}