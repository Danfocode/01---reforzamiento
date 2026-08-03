const charactersName = ["Goku", "Vegeta", "Gohan"];

const [, , p3] = charactersName;
console.log({p3}); 
const returnArrayFn = ()=>{
    return ["ABC", 123] as const
}
const [ letters, numbers] = returnArrayFn();
 
console.log(numbers + 100 + letters)

const useState = (name:string)=> [name, console.log] as const

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"