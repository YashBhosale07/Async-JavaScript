// function makeHttpRequest(type,url,callback){
//     const req=new XMLHttpRequest();
//     req.responseType='json';
//     req.open(type,url);
//     req.addEventListener('load',()=>{
//         callback(req.response);
//     })
//     req.send();

// }

// var response=makeHttpRequest('GET','https://dummyjson.com/posts',(data)=>{
//     console.log(data);
//     makeHttpRequest('GET',`https://dummyjson.com/users/${data.posts[0].id}/todos`,(comments)=>{
//         console.log(comments);
//     })
// });

//Promises

// var chechkEven=new Promise((resolve,reject)=>{
//     let num=5;
//     if(num%2==0){
//         resolve("The number is even");
//     }else{
//         reject("The number is odd");
//     }
// });

// chechkEven.then((result)=>{
//     setTimeout(()=>{
//         console.log(result);
//     },8000);
    
// }).catch((reject)=>{
//     console.log(reject);
// })

// console.log("Hello")

//working of callback queue and microtask queue and call stack for promises
// chechkEven is created immediately and executed:

// num = 5 → Not even → reject("The number is odd") is called.

// .catch() is scheduled to run when the call stack is empty. till then .catch() is stored in microtask queue

// Then, console.log("Hello") runs immediately because it's synchronous.

// Now the event loop checks that the call stack is empty and then checks the microtask queue, finds the rejected promise, and runs the .catch() callback.


//fix the callback hell problem

// function makeHttpRequest(method,url){
//     const xhr=new XMLHttpRequest();
//     xhr.responseType='json';
//     const promise=new Promise((resolve,reject)=>{
//         xhr.addEventListener('load',()=>{
//             resolve(xhr.response);
//         })
//     });
//     xhr.open(method,url);
//     xhr.send();

//     return promise;
// }

// makeHttpRequest('GET','https://dummyjson.com/posts')
//     .then((data)=>{
//         return makeHttpRequest('GET',`https://dummyjson.com/users/${data.posts[0].id}/todos`)
//     })
//     .then((post)=>{
//         console.log(post);
//     })


// fetch api

// var postsData=fetch('https://dummyjson.com/posts',{
//     method:'GET'
// });
// var data=postsData.then((response)=>{
//     if(response.ok){
//         return response.json();
//     }
//     return "error";});
// data.then((response)=>console.log(response)).catch((error)=>console.log(error));


