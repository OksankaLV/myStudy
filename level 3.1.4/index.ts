/*
Напишите функцию mapObject, которая
в чем-то очень похожа на функцию map для массивов.

Эта функция должна принимать объект джаваскрипта
и функцию transformer, которую нужно применить к каждому из полей того объекта, 
...а из результата применения функции transformer к каждому полю входящего объекта
собрать новый объект и вернуть его.

Так например можно будет замэппить объект типа 
{ "roma" : 5, "vasya": 2 } оценок студентов
на функцию вроде (x) => x > 2
чтобы получить объект 
{ "roma": true, "vasya": false } зачетов студентов

Понятное дело для описания сигнатуры mapObject надо будет юзать
1) дженерики с несколькими параметрами-типами
2) такую штуку как Record (globalThis.Record, если быть точным ;) )

*/
type Key = string | number | symbol;

function mapObject<Value, ResValue>(obj: Record<Key, Value>, transformer: (arg: Value) => ResValue): Record<Key, ResValue> { 
    let newObject: Record<Key, ResValue> = {};
    
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObject[key]=transformer(obj[key])
        }
    }
    
    return newObject; 
}

let object1 = { "roma": 5, "vasya": 2 };
let object2 = { "new1": "one", "new2": "lengthTwo" };
let object3 = {"one": [1,2,3], "two": [1,2,2,2,4,5] }
let object4 = {"one": true, "two": false}

console.log(mapObject(object1, (x) => (x > 2)))
console.log(mapObject(object2, (x) => (x.length > 5 )))
console.log(mapObject(object3, (x) => ( x.length > 5 )))
console.log(mapObject(object4, (x) => (x === true)))


/*
// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т, но возможно не со всеми полями
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1, 
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :) 
// нас интересует только ее сигнатура.
*/
interface T { 
    name: string,
    age: number
}

declare function f1<T>(data: Partial<T>, func: (data: Partial<T>)=>Required<T>): void;

interface F2<T>{
    (data: Partial<T>, func: (data: Partial<T>)=>Required<T>): void
};

/*
// Более сложный вариант:
// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т (у которого поле id: string), 
//    но возможно без поля id
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1, 
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :) 
// нас интересует только ее сигнатура.
*/
interface Tstr extends T { 
    id?: string
}

interface F3<Tstr>{
    (data: Partial<Tstr>, func: (data2: typeof data)=>Required<Tstr>): void
};

/*
// Последняя задача:
// Напишите сигнатуру функции, которая принимает
// - некий класс 
// - количество
// ...а возвращает массив экземпляров этого класса
*/
class Rectangle {
    w!: number;
    h!: number;
}
class Circle {
    radius!: number;
}

// сделайте норм сигнатуру тут.
// НЕТ, Rectangle|Circle это не вариант, надо сделать универсальную функцию 
function наштамповать<CR>(SOMECLASS: new ()=>CR, count: number): CR[] {
    let a = []
    for (let i = 0; i < count; i++)
       a.push(new SOMECLASS());
   
    return a;
}

let a: Rectangle[] = наштамповать(Rectangle, 10);
let b: Circle[] = наштамповать(Circle, 20)
