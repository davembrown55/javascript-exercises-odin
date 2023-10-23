const findTheOldest = function(Arr) {

    const howOld = function (person) {
        let currentYear = new Date().getFullYear();
        birthYear = person.yearOfBirth;    
        deathYear = (typeof person.yearOfDeath === 'undefined') ? currentYear : person.yearOfDeath;        
        return deathYear - birthYear;
    
    }

    return Arr.reduce((prev, current) => {return howOld(prev) > howOld(current) ? prev : current });
};


    // let personToCompare = Arr[0];
    // let currentYear = new Date().getFullYear();


    // for (person of Arr) {

    //     if (personToCompare.hasOwnProperty('yearOfDeath')) {
    //         if (person.hasOwnProperty('yearOfDeath')) {

    //             if(person.yearOfDeath - person.yearOfBirth > personToCompare.yearOfDeath - personToCompare.yearOfBirth) {
    //                 personToCompare = person;
    //             } 
    //         } else { 
    //             if (currentYear - person.yearOfBirth > personToCompare.yearOfDeath - personToCompare.yearOfBirth) 
    //             personToCompare = person;
    //         } 
    //     } else {
    //         if (person.hasOwnProperty('yearOfDeath')) {

    //             if(person.yearOfDeath - person.yearOfBirth > currentYear - personToCompare.yearOfBirth) {
    //                 personToCompare = person;
    //             } 
    //         } else { 
    //             if (currentYear - person.yearOfBirth > currentYear - personToCompare.yearOfBirth) 
    //             personToCompare = person;
    //         } 
    //     }
    // }
    // return personToCompare;
// };




// Do not edit below this line
module.exports = findTheOldest;

// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1066,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]

//   const howOld = function (person) {
//     let currentYear = new Date().getFullYear();
//     birthYear = person.yearOfBirth;    
//     deathYear = (typeof person.yearOfDeath === 'undefined') ? currentYear : person.yearOfDeath;        
//     return deathYear - birthYear;

// }

// console.log(findTheOldest(people));
// console.log(people.map((person) => person.name + " " + howOld(person)));
  
