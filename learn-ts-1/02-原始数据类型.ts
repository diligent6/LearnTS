// // 原始数据类型 

// // 1.  数字
// let number1:number = 1
// let number2:number =18.8
// //2.  字符串
// let message:string = "jack"

// //3.symbol类型
// const key1:symbol = Symbol('jack')

// //4.对象类型
// //基本方式 定义了key的名称 + value的类型
// let dog:{name:string,age:number} = {
//     name:'bob',
//     age:6
// }
// //type方式
// //?定义可选参数
// type obj ={x:number,y:string,z?:string}

// let people:obj ={
//     x:1,
//     y:'2'
// }
// // interface方式
// interface IPerson{
//     name:string,
//     age:number,
//     gender:string,
//     career?:string
// }
// const jack:IPerson ={
//     name:'jack',
//     age:18,
//     gender:'boy',
//     career:'coder'
// }
// //5.数组类型
// let arrs:string[] = ["jack",'nacy']
// let arrss:Array<number> =[1,2,3,4]


// //6.元组方式

// let tuple:[string,number] = ["jack",18]
// console.log(tuple[0])
// console.log(tuple[1])