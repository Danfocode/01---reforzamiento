const myPromise = new Promise<number>( (resolve, reject)=>{
    setTimeout(()=>{
        //yo quiero mi dinero
        resolve(100);
        reject('Mi amigo se perdio')
    }, 2000)
});

myPromise.then((myMoney) => {
    console.log(`Tengo mis ${myMoney} dolares de vuelta`)
}).catch((reason)=>{
    console.warn(reason)
}).finally(()=>{
    console.log('Pues sigo con mi vida')
})