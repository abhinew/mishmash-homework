//input :  propertyname as an array in the function
// for every element  in the array get the property of the object 


function pathFind(propertiesList, object) {
    const property = propertiesList[0]
    return object[property];
}


const obj = {
    foo: "Hey"
}

console.log(pathFind(["foo"], obj));


module.exports =  { pathFind }