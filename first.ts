// var myMoney = 50;
// myMoney = 10;
// myMoney = 0;

let age:number = 50;
let club: string = 'Real Madrid';
const isFamous: boolean = false;
let famous: boolean;
famous= true;

function add (num1: number | string, num2:number){
    return num1 + num2;
}
add(3, 76);
add(45,98);
add('Adam', 'Sand')



age = 150;

function doubleItAndConsole(num: number):void{
    const result = num *2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log('output',output);


function fullName(firstName: string, lastName: string): string{
    return firstName + ' ' + lastName;
}

const user = fullName('Martin','Rock');

let multiply2: (x:number, y:number) => number;

multiply2 = (x,y) => x * y;



const multiply = (x:number,y:number):number=> x*y;
console.log(multiply(25,6))

const numbers:number = [2, 3 ,4, 5, 42, 91, 34];
numbers.push(22);
const friends:string[] = ['George', 'Jeff','Bill','Abdul'];
let megaName = '';
for (let i = 0; i< friends.length; i++) {
  const element:string = friends[i];
  if (friend.length> megaName.length) {
    megaName = friend;      
  }
    }
console.log('Friend with the largest name', megaName);

let player: {
    club : string
    salary: number
} = {
    club: 'Real Madrid',
    salary: 45000000,
}
//object

const friend: {name: string, age: number}= {
    name: 'Samuel David',
    age: 61
}
friend.age = 57;
interface Player{
    club: string,
    name: string,
    salary: number,
    wife?: string,
    isPlaying: boolean
}

const messy: Player = {
    name: 'Messy',
    club: 'Real Madrid',
    salary: 4500000,
    wife: 'Some name',
    isPlaying: true
}

const Ronaldo: Player = {
    name: 'Ronaldo',
    club: 'Liverpool',
    salary: 51000000,
    isPlaying:true
}

function getBonus (player:Player, friends:string[]){
    return player.salary * 0.1;
}
const poorPlayer = {age: 50,salary: 10000}
getBonus(messy, ['sam', 'tam'])

class Person{
    name: string;
    private _partner: string;
    readonly fatherName: string;
    constructor(name:string,father: string){
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName():string{
        return this.name + '' + this._partner;
    }
}
const sam = new Person ('Samuel', 'David');
console.log('name', sam.fatherName);
const samName: string = sam.getName();
sam.name = 'Ben';


