// exercise 

const asgardianBrothers = [
    {
        firstName: "Thor",
        familyName: "Odinsson"
    },
    {
        firstName: "Loki",
        familyName: "Laufeysson-Odinsson"
    }
]

const phrase = "I like this brown drink very much, bring me another!"

// as a parameter
function intro(person, line) {
    return `${person.firstName} ${person.familyName} says: ${line}`
}

console.log(intro(asgardianBrothers[0], phrase)) //=> Thor Odinsson says: I like this brown drink very much, bring me another!

// as this
function introWithContext(line) {
    return `${this.firstName} ${this.familyName} says: ${line}`
}

console.log(introWithContext.call(asgardianBrothers[0], phrase  + " -> call"));
//=> Thor Odinsson says: I like this brown drink very much, bring me another!

console.log(introWithContext.apply(asgardianBrothers[0], [phrase]));
//=> Thor Odinsson says: I like this brown drink very much, bring me another!


// Explicitly Lock Context For a Function With bind

const thorIntro = introWithContext.bind(asgardianBrothers[0]);
console.log(thorIntro(phrase + " -> bind"));
//=> Thor Odinsson says: I like this brown drink very much, bring me another!

