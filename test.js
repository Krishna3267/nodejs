const name = "Krishna";
console.log(name);

const greet = (name) => {
    console.log(`hello ${name}`);
}

function func_name(shiv){
    console.log(shiv)
}

func_name("hello shivansh")

greet('Krishna')

// let a = 5
// console.log(a)

// a = "krishna"
// console.log(a)

//data types in.. let var const 
// console.log(global)

setTimeout((a,b) => {
    console.log(a+b)
    // clearInterval(int)
}, 3000);



// setTimeout( function , time )

setTimeout(
    () => {
        console.log("5 sec hogayw")
    } , 5000
)



setInterval(() => {
    console.log('In the interval')
}, 1000)

// __dirname
console.log( "directory " + __dirname);
console.log( "file " + __filename)



// setTimeout(()=>{
//     console.log("Krishna testing testing")
// },10000)