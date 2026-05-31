const getUser2 = () =>{
    return {
        uid: 'ABC123',
        username: 'Danfo1006'
    }
}
const user2 = getUser2();
console.log (user2)

const myNumbers: number[] = [1,2,3,4,5];

myNumbers.forEach( (number) => console.log( {number} ) );