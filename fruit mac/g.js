'use strict';

const prompt = require('prompt-sync')({sigint: true});

//Apple Banana Cherry Diamond Pineapple

const a= "Apple"
const b= "Banana"
const c= "Cherry"
const d= "Diamond"
const p= "Pineapple"

const reel1=[a,p,c,d,d,b,c,a,c,d,a,c]

const reel2=['Apple','Diamond','Pineapple','Banana','Banana','Cherry','Apple','Banana','Apple','Cherry','Apple','Cherry']

const reel3=['Cherry','Banana','Pineapple','Apple','Apple','Banana','Diamond','Apple','Cherry','Banana','Apple','Cherry']

let money=100

let started=process.hrtime() //returns a [seconds][nanoseconds] tuple

let costPerSpin = 10

while (money>costPerSpin) {

    console.log('You have £' + money )
    prompt('Press enter to spin the wheels')

    money = money - costPerSpin //Pay £1 to play


    let p1 = Math.floor(Math.random() * 10)
    let p2 = Math.floor(Math.random() * 10)
    let p3 = Math.floor(Math.random() * 10)

    console.log(reel1[p1] + ' ' + reel2[p2] + ' ' + reel3[p3])

    if (reel1[p1]==reel2[p2] && reel2[p2]==reel3[p3]){
        
        console.log ('You win :o)')

        if (reel1[p1]=='Apple'){
            money = money + 20
            console.log ('£20')
        }
        else if (reel1[p1]=='Cherry'){
            money = money + 40
            console.log ('£40')
        }
        else if (reel1[p1]=='Banana'){
            money = money + 60
            console.log ('£60')
        }
        else if (reel1[p1]=='Diamond'){
            money = money + 100
            console.log ('£100')

        }
        else if (reel1[p1]=='Pineapple'){
            money = money + 200
            console.log ('£200')
        }

    }
    else{
        console.log('You lose :o(')
    }

}

console.log ("You are out of money - gambling is a fools game")

let took=process.hrtime(started)
console.log (took[0] +"seconds and " + took[1] /1e6 + " milliseconds")
