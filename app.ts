const num1Element=document.getElementById('num1') as HTMLInputElement;
const num2Element=document.getElementById('num2') as HTMLInputElement ;
const buttonElement=document.querySelector('button');

const numarray:  Array<number> =[];
const stringarray: string[]=[];


    type numorstring=number | String;
    type Result= {val: number; timestamp : Date };

    interface Resultobj{
        val: number; timestamp : Date
    }

function add(num1: numorstring , num2: numorstring)
{
    if(typeof num1 === 'number' && typeof num2 === 'number')
    {
        return num1 + num2;
    }
    else if(typeof num1 === 'string' && typeof num2 === 'string')
    {
        return num1 + ' ' +num2;
    }
    return  +num1 + +num2;
}

function printResult(resultobj: Resultobj)
{
    console.log(resultobj.val);
}

buttonElement?.addEventListener('click',() =>{
    const   num1=num1Element.value;
    const num2=num2Element.value;
    const result=add(+num1, +num2);
    const stringresult=add(num1,num2);
    console.log(result);
    numarray.push(result as number);
    console.log(stringresult);
    stringarray.push(stringresult as string);
    printResult({val : result as number, timestamp: new Date()});
})

const mypromise=new Promise<String>((res,rej) =>{
    setTimeout(() => {
        res('it worked');
    }, 1000);
})

mypromise.then((result) =>{
    console.log(result.split('w'));
})




