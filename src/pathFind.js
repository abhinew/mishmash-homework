//input :  propertyname as an array in the function
// for every element  in the array get the property of the object 
//loop through the elements of the array and find the property in the object



function pathFind(propertiesList, object) {
    return propertiesList.reduce(function(acc,current) {
        return acc[current];
    },object)
    
}




module.exports =  { pathFind }