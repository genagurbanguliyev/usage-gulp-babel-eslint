'use strict'

const sentences = [
    { subject: 'public/Javascrip', verb: 'is', object: 'great' },
    { subject: 'public/Elephants', verb: 'are', object: 'large' },
]

function say({subject, verb, object}) {
    console.log(`${subject} ${verb} ${object}`)
}

for (let s of sentences){
    say(s)
}
