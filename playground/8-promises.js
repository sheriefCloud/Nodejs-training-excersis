

const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        
        reject('Things Didnt Go well' )
        resolve([1,3,5,7])
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success', result)
}).catch((error) => {
    console.log('Error!', error)
})

// Promiss  --  Pending ----> resolve() -> Fulfilled
//                        |---> rejsct() -> Rejected