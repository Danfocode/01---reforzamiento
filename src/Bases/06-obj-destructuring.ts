const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

const { name, age, key } = person;
console.log(name, age, key);

interface Hero{
    name:String;
    age: Number;
    key: String;
    rank?: String;
}

const useContext = ({ name, age, key, rank = 'Sin rango' }: Hero) => {
    return {
        keyName: key,
        user:{
            name,
            age
        },
        rank: rank
    }
}

const context = useContext(person);
console.log(context);

const { user } = useContext (person);
console.log(user.name);