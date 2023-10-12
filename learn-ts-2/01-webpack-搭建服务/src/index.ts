const message:string ="hello TS"
console.log(message)

type typeP = unknown extends infer U ? U:never;
const p:typeP ="any"
const foo:(p:string)=>void = (p)=>{
    console.log(p)
}
foo(p as string)