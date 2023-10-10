class Person {
    //参数属性
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}

const person: Person = new Person("jack", 18);

// 函数类型前面 加new 表示这个函数是一个构造函数类型 必须通过new 关键字调用
function personFactory(creator: new (name: string, age: number) => Person) {
  const p = new creator("jack", 18);
  return p;
}

const arr:Array<String> =['jack','name','alice']

console.log(arr[0])
console.log(arr['0'])

