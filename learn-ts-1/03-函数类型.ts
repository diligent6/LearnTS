//1.函数类型基本定义

//1.1普通函数
function bar(name:string,age:number):string{

    console.log(name,age)
    //对于返回值类型 函数会自动进行类型推导 可以不用指定
    return name
}

//这里会进行类型推导，会自动推导传参的类型
bar("jack",18)

//默认就是返回undefined类型 
function bar2(name:string):void{
    console.log(name)
}
const name2 = bar2("rose")
console.log(name2)

//1.2 箭头函数
//搭配type使用 
//通过 (参数类型)=>返回值类型进行约束箭头函数的类型
type fnType = (name:string) =>{name:string}
const itemClick:fnType = (name:string) =>{
    return {name:"jack"}
}

type fnType2 =(num1:number,num2:number)=>number
function calc(calcFn:fnType2){
    calcFn(10,20)
}
//函数作为参数传递时参数个数可以少于要求的参数，但类型必须一样
calc(function clac(num1:number,num2:number){
    return 123

})
//1.2匿名函数
//会进行类型的推导


//2.函数参数类型解析
//2.1默认值
function getObje({name="jack",age=18}){

    console.log(name,age)
}

//2.2 可选参数
type fnType3 = (name:string,age?:number)=>void

//2.3 剩余参数
function baz(name:string | number | boolean,...numbers:number[]){
    //类型收缩
    if(typeof name ==="string"){
        console.log(name)
    }
    
}




