// ***** Variable ***** //
/* 
    Create a few variables that store a value of string, number, 
    and boolean. Choose your own topic.
*/

let favTreat = "Doritos"
const powerLevel = 100
let lovesColinMochrie = true


// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguage' that include 
    4 coding language of your choice. 
*/

let codingLanguage = ['javascript', 'html', 'css', 'python']


/* 
    Access the 3rd element of the 'codingLanguage' array.
*/

//console.log(codingLanguage[2])


/*
    Copy the array using one of the array methods, 
    and call it 'codingLanguage2.'
*/

const codingLanguage2 = codingLanguage.slice()


/* 
    Add another coding language to the codingLanguage2 array.
*/

codingLanguage2.push('c++')
console.log(codingLanguage2)


// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the 
    instruments array.
*/

instruments.pop()
console.log(instruments)


/* 
    Use a built-in array function to remove 'piano' from the 
    instruments array
*/

instruments.shift()
console.log(instruments)

/* 
    Use a built-in array function to add 'guitar' to the front of 
    the instruments array
*/

instruments.unshift('guitar')
console.log(instruments)

/* 
    Use a built-in array function to replace 'xylophone' in the 
    instruments array to 'glockenspiel.'
*/


instruments.splice(2, 1, 'glockenspiel')
console.log(instruments)


// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/

// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is 
    not an even number.'
*/

 if (num % 2 === 0){
    console.log('num')
 }else{
    console.log(`${num} is not an even number`)
 }


// !!! Don't edit the code below !!! //
let score = 83;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

 if (score <= 10){
    console.log('you\'re a failure')
 }else if(10 < score && score < 41){
    console.log('the grade is C.')
 }else if(40 < score && score < 71){
    console.log('the grade is B.')
 }else{
    console.log('you\'re not a failure!!!')
 }



// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array 
    above.
*/

let totalPrice = 0

for (let i = 0; i < price.length; i++){
    totalPrice += price[i]
    console.log(`The total price is ${totalPrice} `)
}



/* 
    Using the 'totalPrice,' find the average of 'price.'
*/

console.log(totalPrice/price.length)

// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if 
    the color is red, print 'melon' if the color is green, and 
    print 'banana' when the color is yellow.
*/

for (let i = 0; i < colors.length; i++){
    if (colors[i] === 'red'){
        console.log('apple')
    } else if (colors[i] === 'green'){
        console.log('melon')
    } else if (colors[i] === 'yellow'){
        console.log('banana')
    }
}



// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- planning
    -- Analysis of Requirements
    -- Design
    -- Implementation
    -- Testing & Integration
    -- Maintain
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git
        -- github
        -- git init
        -- git clone
        -- git status
        -- git add
        -- git commit
        -- git push
    - How to push git to github
*/

