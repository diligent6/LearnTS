


interface IPerson22{
    name:string,
    age:number,
    gender?:number,
    friends:Ifriend
}
interface Ifriend{
    name:string,
    gender:string
}
type aa = never extends infer U? U:number
