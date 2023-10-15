let a = "Bryan"
let b = "Mathis"
let result = checkName(a, b)

function checkName(num1, num2) {
    if (num1 == num2) {
        return("Les deux noms sont identiques") 
    }
    else {
        return("Les deux noms sont différents")
    }
}

console.log(result)



let names = []
names.push("Ivern", "Bryan", "Qiyana" )
names.forEach(function ( names ){
    console.log(names,"va a la peche")
})



let Student = {
    name: 'Melvyn',
    favoriteFood: 'noodle',
    city: 'Plailly'
}

let values = Object.values(Student)
let nombreDeLettres = 0

values.forEach((value) => {
    nombreDeLettres += value.length
})

if (nombreDeLettres % 2 === 1) {
    console.log("impair")
} else {
    console.log("pair")
}