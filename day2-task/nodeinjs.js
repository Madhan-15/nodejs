// NORMAL FUNCTION
// function add(n1,n2){
//     return n1+n2;
// }
// const sum = add(4,1);
// console.log("n1+n2 is :",sum);

//  // USING ARROW FUNCTION
//  const sam=(a,b)=>{return(a+b);} 
//or 
//const sam =(a,b)=>(a+b);
//  console.log(sam(5,5));
 
 //objects KEY PAIR VALUES
// const obj={name:'madhan',age:'12' ,message: function(){
//     console.log("my name is "+this.name);
// }} 
// obj.message();

//ARRAY
 //const array =['madhan', 'raj']
// for (const eg of array) {
//     console.log(eg);
// }
//or
// const array =['madhaneey', 'rajaa']
// const op = array.map(eg =>'madhu : ' +eg)
// console.log(op);

//const result = array.map(eg => `madhu : ${eg}`);
//console.log(result);

//ARRAY & OBJECT REFERENCE TYPES
// const mad =['m','j']
// mad.push('g');
// console.log(mad);
// const madd ={name:'box'}
// madd.name='l';
// madd.push='lmno'
// console.log(madd);

// SPREAD OPERATOR IN OBJECT & ARRAY
// const m1=['sonama','ventura'];
// const m2 = [...m1]
// const m3={...m1}
// console.log(m2); 
// console.log(m3,'age is 12'); 
// const m2 = m1.slice()
// m2.push('mac')
// console.log(m2);

//normal method
// const mm =(a,b)=>{
//     return [a,b];
// }
// console.log(mm(1,2,3,4,5));

// REST OPERATOR 
// const m =(...m)=>{return m;} 
// console.log(m(1,2.4,2));


//asynchronous codes
// setTimeout(()=>{
//     console.log('time up');},4000)
// console.log('hello');

//DESTRUCTURING IN OBJ & ARRAY
// const m1={name:'madhaneey',age:12}
// const mad = m1.name;
// console.log(mad);

// const {name,age}=m1;
// console.log({name,age});
// const m6=['madhan','age13']
// const [madhan,age13]=m6
// console.log([madhan,age13]);

//CALL BACK FUNCTION
// const datawant = (callback)=>{
//     setTimeout(()=>{
//         callback('callback after 2 sec success');    
//     },2000);
//     console.log('2 sec aachi');
//     };
// setTimeout(()=>{
// datawant((num) =>{
//     // console.log("time up vrooooo");
//     console.log(num);
// });
// },5000);
// console.log('hell');
// console.log('world');

//PROMISE
let stmt=new Promise((pass,fail)=>{
    //pass();
    fail();
})
stmt .then(()=>{console.log("passed success");})
.catch(()=>{console.log('stmt failed');})