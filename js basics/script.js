document.write("hello , good evening!")

var frame="harinand" 
console.log(frame)

let age = 19
console.log(age)
console.log(typeof(age))

let salary=40000.5
console.log(salary)

const pi=3.14
// pi=3.1415 - cannot reassign

let canvote = false
console.log(canvote)

let e
console.log(e) //undefined
console.log(typeof(e)) //undefined

let f = null
console.log(f)

const fav_colors = ['pink','purple','white']
console.log(fav_colors)
console.log(fav_colors[0])
console.log(fav_colors[1])
console.log(fav_colors[2])
console.log(fav_colors[3])//undefined
console.log(fav_colors.length)

let fav_days =[]
fav_days[0] ="sunday"
fav_days[1] ="monday"
console.log(fav_days)

const car ={
    name: "virtus" ,
    color:"white" ,
weight:500
}
console.log(car)
console.log(car.name)
console.log(car.color)
console.log(car.weight)

console.log(10**3)//exponent operator

let a=10
let b=10

let result
result=a/b
console.log(result)

result=a%b
console.log(result)

let c=20
c/=50
console.log(c)

let x=5
console.log(x=="5")
console.log(x!="5")
console.log(x<5)
console.log(x>=5)
let x1 = 6
let y1 = 3

console.log(x1<10 && y1>5)
console.log(x1==6 || y1==5 )
console.log(!(x1=y1))

let temperature = -90

if(temperature>25){
    console.log("its hot outside")
}
else if(temperature>15){
    console.log("its warm outside")
}
else if(temperature>10){

}
else{
    console.log("its very cold outside")
}

for(let i=0;i<=5;i++){
    console.log(i)
}
function greet(){
    console.log("hello user")
}
greet()

function welcome(name){
    console.log("hello" + name)
}

welcome ("harinand")

function add(num1,num2){
    return num1+num2
}
let sum=add(5,7)
console.log(sum)

let head1 = document.getElementById("head")
head1.innerText="you have been hacked!!"
head1.style.backgroundColor='aqua'
head1.style.border='3px solid green'

function handleclick (){
    document.getElementById('clickbutton').innerText="clicked!"
    document.getElementById('clickbutton').style.
    backgroundColor='yellow'

}
document.getElementById('clickbutton').addEventListener("click",handleclick)
document.getElementById('clickbutton').addEventListener("click",()=>console.log("second handler"))

    



