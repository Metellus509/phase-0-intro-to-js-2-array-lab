// Write your solution here!
const cats=[
    "Milo",
    "Otis",
    "Garfield"
]

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop()
}
function destructivelyFirstLastCat(name){
    cats.shift()
}

function destructivelyRemoveFirstCat(name){
    cats.shift()
}

function removeFirstCat(){
    return cats.slice(1)
}

function removeLastCat(){
    return cats.slice(0, -1)
}

function appendCat(name){
    const allCats = [...cats, name];
    return allCats;
}

function prependCat(name){
    const allCats =cats.slice()
    allCats.unshift(name)
    return allCats;
}
