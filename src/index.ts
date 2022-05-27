// BUILT-IN TYPES
/*
 JAVASCRIPT
 - number
 - string
 - boolean
 - null
 - undefined
 - object
 TYPESCRIPT ADD ON
  - any
  - unknown
  - never
  - enum
  - tuple
*/ 


//ARRAYS
let numbers = [1,2,3,4]

// TUPLES - holds data with 2 different data types
// advisable to use to hold a max of 2 data types
// id, name

let user: [number, string] = [1, 'Marvin']
// user[0].toFixed(1)
// user[1].charAt(1)

/* ENUMS - a list of related constants

// const small = 1
// const medium = 2
// const large = 3
*/
// enum -uses PascalCase naming convention
const enum Size {
    Small = 1, Medium, Large
}

let mySize: Size = Size.Medium
console.log('mySize', mySize)

// FUNCTIONS
/*
 - Properly annotate your functions, all the parameters, return types
 - Enable TS compiler options in tsconfig.json file.
   noUnusedLocals: true
   noUnusedParameters: true
   noImplicitReturns: true
 */
function calculateTax(income: number, taxYear = 2022): number{
    if(taxYear < 2022) 
        return income * 1.2
    return income * 1.3
}

calculateTax(10_0000)
calculateTax(10_0000, 2021)


// OBJECTS
/*  object in typescript - tis verbose and is simplified below using a type alias(type alias creates a custom type)
let employee: {
     readonly id: number
     name: string,
     retire: (date: Date) => void
    } = {
        id: 1,
        name: 'Marvin',
        retire: (date: Date) => {
            console.log(date)
        }
    }
 */
/* using TYPE ALIAS to create a custom type for objects (best way to create objects in typescript)*/

type Employee = {
    readonly id: number
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'Marvin',
    retire: (date: Date) => {
       console.log(date)
    }   
}

// UNION TYPES - gives a variable or func parameter more than one type

function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number') 
        return weight * 2.2
    else
        return parseInt(weight) * 2.2
}

kgToLbs(10)
kgToLbs('10kg')

// INTERSECTION TYPES - another technique of combining types

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

// textbox below is a UIWidget with both draggable and resizable properties.
let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// LITERAL TYPES - limit values you can assign to a variable
// literal(exact/ specific value)
type Quantity = 500 | 100 // Quantity can wither be 50 or 100
// let quantityOne: 50 | 100 = 200 //error
let quantityTwo: 50 | 100 = 50 //correct

type Metric = 'cm' | 'inch'

// NULL type

function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase())
    else
    console.log('Hola!')    
}

greet('dirty pigg')
greet(null)
greet(undefined)

// OPTIONAL CHAINING

type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1)
// Optional property access operator / optional chaining/ optional operator 
console.log('customer birthday', customer?.birthday?.getFullYear())

// Optional element access operator (useful when dealing with arrays)
/*  
acces thee 1st element in an array
if (customers !== null && customers !== undefined)
   customers[0]
this can be simplified to
 customers?.[0]
*/

// Optional call operator 
let log: any = null
let logA: any = (message: string) => console.log(message)
/*
log('a') // this will crash because log is null
*/
// solution
log?.('a') // log will only be called if its referencing a given func otherwise it wont be called
/* logA?.('Marvin') or logA('Marvin') this will no crash because logA is not null */



// PRACTICES

type Result = "pass" | "fall"

function verify(result: Result) {
    if (result === "pass") {
      console.log("Passed")
    } else {
      console.log("Failed")
    }
  }
   