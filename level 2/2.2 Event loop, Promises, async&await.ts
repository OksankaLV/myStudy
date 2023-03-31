/* 
1. Use node-fetch to make an await fetch("https://api.ipify.org?format=json") request, 
get the response, and display your ip
*/
/*
import fetch from "node-fetch";
*/
async function reguestIP(params: string) {
    await fetch(params)
        .then(res => res.json())
        .then(res => console.log(`This is IP for 1 task: ${res.ip}`))
        .catch(err => console.log(err));
   
}
const adress = "https://api.ipify.org?format=json";
reguestIP(adress);

/* 
2. Write a function based on p.1., which actually returns your ip.
*/
async function myIpAdress() {
    return await fetch("https://api.ipify.org?format=json")
        .then(res => res.json())
        .then(res => res.ip )
        .catch(err => err)
}
//the function returns a promise, so in order to display it, you need to use it as well
myIpAdress().then(res => console.log(`My Ip adress: ${res} - task #2`))

/*
 3. Write a function that returns three names by making three requests in parallel
 to https://random-data-api.com/api/name/random_name*/

//3.1. use async/await + Promise.all

async function nameReguest() {
const requestPage = "https://random-data-api.com/api/name/random_name"  
    return await fetch(requestPage)
        .then(res => res.json())
        .then(res => res.name)
        .catch(err =>  console.log(err) )
}
function threeNames() {
    return Promise.all([nameReguest(), nameReguest(), nameReguest()]).then(res => res)
}
threeNames().then(res=>console.log(`task #3.1: ${res}`))

//3.2 use async/await but without Promise.all

for (let i = 0; i < 3; i++) { 
    nameReguest().then(res=>console.log(`task #3.2: ${res}`))
}

//3.3 use pure promises, no async/await, no Promise.all 
const requestPage = "https://random-data-api.com/api/name/random_name"  
function oneName(num: number): Promise<any> {
   
    return new Promise((resolve, reject) => {
        for (let i = 0; i < num; i++) {
            resolve(fetch(requestPage).then(res => res.json()).then(res => console.log(`task #3.3: ${res.name}`)))
            reject(new Error("err"))
        }
    })
}
oneName(3);

// 4. a function that should get a woman user for the minimum number of requests

const linkForSearchUser = "https://random-data-api.com/api/users/random_user";
//4.1
function searchWoman1() {
    return new Promise((resolve, reject) => { 
        resolve(fetch(linkForSearchUser)
            .then(res => res.json())
            .then(res => isWomen(res))
            .then(res=> printName(res))
            .catch(err => console.log(err)))
        reject(new Error("err"))
    })
    function isWomen(params: any) { 
        return params.gender === "Female" ? params.first_name : searchWoman1();
    }
    function printName(res: string): any {
        if (res != undefined) { console.log(`${res} - is a user woman `) }
}
}
searchWoman1();

//4.2 with async/await

async function searchUser() {
    return await (await fetch(linkForSearchUser)).json()
}

async function searchWoman2() {
    let dataUser = await searchUser();
    if (dataUser.gender==="Female"){return dataUser.first_name} else {searchWoman2()}
}

async function printName2() {
    let data = await searchWoman2();
    console.log(`${data} - is a user woman name #2`)
} 

printName2()

/*
5. There is a function #1 that accepts a callback that will be called with the parameter == your current ip. 
Create an escapeable function #2 that uses function #1
*/
async function func1(callback: (arg0: any) => void) { 
const data: any = await (await fetch("https://api.ipify.org?format=json")).json();
callback(data.ip);
}
async function func2(printIp: string) { 
    console.log(printIp);
}

func1(func2);

/*
6.There is a function #1 that can be evaded, which will return the string == your current ip. 
Create function #2, which should use function #1 to get your current ip, 
and which takes one parameter as input - a callback function that will be called when the ip is received, 
with the first parameter equal to this ip.
*/

async function func12(): Promise<string>{ 
    const data = await (await fetch("https://api.ipify.org?format=json")).json();
    return data.ip;
}
async function func22(callback: (arg0: string) => void) { 
    const ip = await func12();
    callback(`This ip = ${ip}`);
}
func22(console.log);
