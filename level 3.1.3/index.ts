//intrface A
interface BigObject {
    [a: string]: { cvalue: number | string | undefined | BigObject } | undefined;
}

function summ(a: BigObject): number {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (typeof elem === "undefined") return 2022 //+""
        if (typeof elem.cvalue === 'string') return +(elem.cvalue) || /*'*/ 2022; /*'*/
        if (typeof elem.cvalue==="number") return elem.cvalue
        if (typeof elem.cvalue/*.isBigObject*/ !== "undefined") return summ(elem.cvalue) //"", summ(elem.cvalue)
       return 2022
      //  return elem.cvalue;  
    });
    let sum = 0;
    
    for (let i = 0; i < x.length; i++) { //length
            sum += x[i]/*.*/;
    }
    return sum/*m*/;
}

let res = summ({ hello: { cvalue: 1 }, world: { cvalue: { yay: { cvalue: "2" } } } });
console.log(res);
