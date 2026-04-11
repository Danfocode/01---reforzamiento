
interface Person {
    firstname: string;
    lastName: string;
    age: number;
    address?: Address;
}

interface Address {
    street: string;
    city: string;
}


const ironman: Person = {
    firstname: 'Tony',
    lastName: 'Stark',
    age : 30,
    // address : {
    //     street: 'Malibu Point 10880',
    //     city: 'Malibu',
    // }
};


console.log( ironman ); 

// const spiderman = structuredClone (ironman);


// spiderman.firstname = 'Peter';
// spiderman.lastName = "Parker";
// spiderman.age = 21;

// console.log( ironman, spiderman );