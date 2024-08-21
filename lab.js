//<-----Class------>
//Lab1
// class Calculalor{
//    constructor(init=0){
//       this.value =init
//    }
//    add(num) {
//       this.value += num
//       return this.value
//    }
//    sub(num) {
//       this.value -= num
//       return this.value
//    }
//    multiply(num){
//       this.value*= num
//       return this.value
//    }
//    divide(num){
//       this.value /= num
//       return this.value
//    }
//    show() {
//       console.log(`Value = ${this.value}`)
//    }
// }
// let result = new Calculalor(10)
// result.show()
// console.log(result.add(50))
// console.log(result.sub(40))
// console.log(result.divide(3))


//Lab2
// class Sale {
//    constructor(name, amount, price) {
//       this.name = name
//       this.amount = amount
//       this.price = price
//    }
//    calcuPrice() {
//       return this.amount * this.price
//    }
// }
// class Beverage extends Sale {
//    constructor(name, amount, price) {
//       super(name, amount, price)
//    }
// }
// let result = new Beverage("pepsi", 5, 20)
// console.log(result.calcuPrice())


//<---isArray---->
//Lab1
// let arr = [1, 2, 3]
// let item = {
//    name: "Jo"
// }
// function arr1 (input){
//    return Array.isArray(input)
// }

// console.log(arr1(arr))
// console.log(arr1(item))


//<---object keys---->
//Lab1
// let Salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130
// }
// let key = Object.values(Salaries)

// let check = key.reduce((pre, curr) => {
//    return pre += curr
// }, 0)
// console.log(check)


//Lab2 
// let obj = {};
// let checkEmptyObi = (obj) => {
//    return Object.keys(obj).length == 0 ? true : false
// }
// console.log(checkEmptyObi({}))





//<----Rest Parameter----->
//Lab1
// let cal = (...nums) => {
//   let sum = 1
//   for (let num of nums) {
//     console.log(num)
//     sum *= num
//   }
//   return sum
// }
// let result = cal(1, 2, 3, 4, 5)

// console.log(result)


//Lab2
// let filterOutOdds = (...nums) => {
//    let sum = nums.filter((num)=> {

//    return num % 2 == 0
// })
// return sum
// }
// let result = filterOutOdds(1, 2, 3, 4, 5, 6)

// console.log(result)


//Lab3 
// let num = { name: "may" ,  age: 24 }

// let mergeObjects = (...obj) => {
//    let result = obj.reduce((pre,curr) => {
//      Object.assign(pre,curr)
//      return pre
//   },{})
//  return result
// }

// // console.log(mergeObjects({ name: "may" },{ age: 24 }))
// console.log(mergeObjects(num))


//leb4
// const num1 = [1, -2, 3, 4]
// const num2 = [8, 3, -8, 1]

// let arr2 = [5, ...num1, -6, -1, ...num2]
// console.log(arr2)

// let arr3 = arr2.reduce((pre,curr)=> {
//    return pre += curr
// },0)
// console.log(arr3)

//leb5
// let arr = [0, 1, 2, 3, 4, 5, 6, 7]

// let num = (what) => {
//    let arr1 = [...what]
//    arr1[3] = arr1[3] ** 2   
//    return arr1
// }
// console.log(arr)
// console.log(num(arr))



//leb6 
// let two = (fname, lname, ...hob) =>{
//    // console.log(hob.length)

//    return `${fname} ${lname} ${hob} ${hob.length}`
// }
// console.log(two("rawee", "ssss", "e", "f", "a", "d"))


//Lab 7 
// let doubleAndReturnArgs = (arr, ...arr2) => {
//    let newarr = arr2.map((item) => {
//       return item * 2
//    })

//    return [...arr, ...newarr]
// }
// console.log(doubleAndReturnArgs([1,2,3],4,4))
// console.log(doubleAndReturnArgs([2],10,4))


//Lab8
// const x = [1, 2, 3, 4, 5, 6, 7, 8]
// const removeRandom = (arr) => {
//    const num = [];

//    const random = Math.abs(Math.floor(arr.length - (Math.random() * 10)))

//    num.push(arr[random])
//    return num
// };

// console.log(removeRandom(x))


//Lab9
// const cloneArray = (arr) => {

//    return [...arr]
// }
// const xs = [1,2,21,41,4,8,9,10,27,32]
// const a = [...xs]
// console.log(cloneArray(xs))
// console.log(a)


//Lab10
// const cloneObject = (obj) => {
//    return {...obj}
// }
// const b = {a:1, b:2, c:3}
// console.log(cloneObject(b))


//Lab11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); //"Maya"
// console.log(second); //"Marisa"
// console.log(third); //"Chi"


//Lab12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//    'Raindrops on roses',
//    'whiskers on kittens',
//    'Bright copper kettles',
//    'warm woolen mittens',
// ];
// console.log(raindrops); // "Raindrops on roses"
// console.log(whiskers); // "whiskers on kittens"
// console.log(aFewOfMyFavoriteThings); // "Bright copper kettles,warm woolen mittens"


//Lab13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // [10,30,20]


//Lab14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846


//Lab15
// let planetFacts = {
//    numPlanets: 8,
//    yearNeptuneDiscovered: 1846,
//    yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // {yearNeptuneDisovere: 1846, yearMarsiscovered:1659}


//Lab16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//    return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// let a = getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); //{Your name is Alejandro and you like purple} 
// let b = getUserData({ firstName: 'Melissa' }); //{Your name is Melissa and you like green } 
// let c = getUserData({}); //{ Your name is undefined and you like green}
// console.log(a) 
// console.log(b) 
// console.log(c) 


//Lab17
// let guest = 'Jane';
// let admin = 'Pete';

// [admin, guest] = [guest, admin];

// console.log(admin, guest)


//Lab18
// let user = ({firstName, lastName, age}) => {
//    return age > 18 ?`Hi ${firstName} ${lastName}` :"Don't show" 
// }
// // let keys = { age: 21, firstName: "may", lastName: "ss"}
// let keys2 = { age: 18, firstName: "may", lastName: "ss"}
// console.log(user(keys))
// console.log(user(keys2))


//Lab19
// let user = {
//    name: 'John',
//    years: 27
// };

// let {name, years: age, isAdmin=false} = user
// console.log(name, age, isAdmin)


//Lab21
// let arr = [1, [2, [[[3, 4], 5], 6]]] 
// let ["a", "b", "c", "d", "e", "f"] = arr
// console.log(arr)


//Lab22
// let obj = { prop: 5, prop2: 10 };
// let {prop: a, prop2: b} = obj
// console.log(a)
// console.log(b)


//Lab23
// let a, b;
// { a, b } = { a: 1, b: 2 }; //error


//Lab24
// const [, , , a, b] = [1, 2, 3];
// console.log(a, b) //"undefined, undefined"


//Lab25
// const q = { prop: 5, prop2: [10, 100] };
// let { prop: x, prop2: [, y]} = q
// console.log(x)
// console.log(y)


//Lab26
// let q = {
//    prop: 'Hello',
//    prop2: {
//       prop2: {
//          nested: ['a', 'b', 'c']
//       }
//    }
// };
// let {prop: x, prop2:{prop2:{nested:[, y, ]}}} = q
// console.log(x)
// console.log(y)


//Lab27
// const names = [
//    { firstName: 'John', lastName: 'Doe' },
//    { firstName: 'Jack', lastName: 'Dann' },
//    { firstName: 'Joe', lastName: 'Dunne' }
// ];
// for (let fullname of names){
//    let { firstName, lastName } = fullname
//    console.log(`Fullname: ${firstName} ${lastName}`)
// }


//Lab28
// const users = [
//    { user: "Name1" },
//    { user: "Name2", age: 2 },
//    { user: "Name2" },
//    { user: "Name3", age: 4 }
// ];
// for (let element of users){
//    let { user, age = "unknown"} = element
//    console.log(`user: ${user}, age: ${age}`)
// }