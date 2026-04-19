

// function countForMe(){
//     let c=0;
//     return function (){
//         c++;
//         console.log(c);

//     };

// }

// let fnc = countForMe();
// fnc();
// fnc();

// function clickLimiter(){
//     let click = 0;
//     return function(){
//         if(click<5){
//         click++;
//         console.log(click);
//     }else{
//         console.error("limited exceeded");
//     }

//     }
    
// }

// let f=clickLimiter();
// f();
// f();
// f();
// f();
// f();
// f();



//toaster

// function createToaster(config){

//     return function (notification){
//         let div = document.createElement("div");
//         div.className = `fixed ${config.theme === "dark" ?  "bg-gray-800 text-white" : "bg-gray-100 text-white"} px-6 py-3 rounded shadow-lg pointer-events-none ${config.positionX === "right" ? "right-10" : "left-10"} ${config.positionY === "top" ? "top-10" : "bottom-10"}`;

//         div.textContent = notification;
//         document.body.appendChild(div);

//         setTimeout(()=>{
//             document.body.removeChild(div);

//         },config.duration *1000);

//     };
// }

// let toaster = createToaster({
//     positionX:"right",
//     positionY: "top",
//     theme:"dark",
//     duration:3,
// });

// toaster("This is a dummy notification !");


function createToaster(config){
    return function(str){

        let parent = document.querySelector(".parent");

        let div = document.createElement("div");

        div.textContent = str;

        div.className = `inline-block 
        ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;

        parent.appendChild(div);

        if(config.positionX !== "left" || config.positionY !== "top"){

            
            parent.className += ` ${config.positionX === "right" ? " right-5" : " left-5"} ${config.positionY === "bottom" ? " bottom-5" : " top-5"} `;
        }

        setTimeout(()=>{
            parent.removeChild(div);


        },config.duration * 1000);
        

    }
}

let toaster = createToaster({
    positionX:"right",
    positionY:"bottom",
    theme:"light",
    duration:3,

});

toaster("Downloaded successfully");
setTimeout(()=>{
    toaster("welcome!")
},2000);