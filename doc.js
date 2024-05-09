

// Question no1 


// for (let i=1; i<'6' ; i++){
//     console.log(i,"hello world")

// }

// Question no2


// for (let i=0; i<=10; i++){
//     console.log(i)
// }


// Question no3


// const multi= + prompt('Enter table number')
// const times= + prompt('How many times do you want ')

// for(let i=0 ; i<=times; i++){
//     console.log(`${multi} * ${i} = ${multi * i}`)
// }



// Question no3


// const  arr =['Nokia' , 'Sqamsung' , 'Apple' , 'Sony' , "huawei"]
// for(let i=0 ; i<arr.length; i++){
    
//     console.log(arr[i])
// }




//  Question no4


// const  arr =['Orange' , 'Lemon' , 'Apple' , 'mango' , "Chikku"]
// for(let i=0 ; i<arr.length; i++){
   
//     console.log(arr[i])


// }


// const  fruits =['Orange' , 'Lemon' , 'Apple' , 'mango' , "Chikku"]
// for(let i=0 ; i<fruits.length; i++){
   
//     document.write(`${fruits[i]} <br>`)


// }
//  Question no5
// const  fruits =['Orange' , 'Lemon' , 'Apple' , 'mango' , "Chikku"]
// for (let i = 0; i < fruits.length; i++) {
//    document.write(`${fruits[i]} <br>`) 
    
// }
// document.write(`<br><br>`)
// for (let j = 0; j < fruits.length; j++) {
    
//     document.write(`Element at index ${j} is ${fruits[j]}<br><br>`)
// }






 
//  Question no6


    // let arr=[]
    // let arr_length=+prompt('enter num of items')
    // document.write('number of items=' +arr_length+ '<br>')
    // for (let i = 0; i < arr_length; i++) {
        
    //     arr[i]=prompt(`enter the value of index ${i}`)
    //     document.write(`${arr[i]} <br>`)
    // }


// question 7


// document.write(`<h1>Counting</h1> `)

// for (let i = 1; i <=15; i++) {

//     document.write(`${i},  `)
//     }
// document.write(`<h1>Reverse Counting</h1> `)
// for (let i = -10; i <= 0 ; i++) {

//     document.write(`${i},  `)
// }

// document.write(`<h1>Even Counting</h1> `)
// for (let i = 0; i <= 10 ; i++) {
//     document.write(`${2*i}, `)
    
// }
// document.write(`<h1>odd Counting</h1> `)
// for (let i = 0; i < 10; i++) {
//     document.write(`${2*i+1}, `)
// }

// document.write(`<h1>series Counting</h1> `)

// for (let i = 1; i <= 10; i++) {
//     document.write(`${2*i}k, `)


// }
    
// question 8

// const  shop =['Orange' , 'Lemon' , 'Apple' , 'mango' , "Chikku"]
// const fruits=prompt('Enter fruit name')
// const h1=document.querySelector('h1')

// if (shop.includes(fruits)){
//     console.log('Friuts available ailable h')
//     h1.innerHTML='Friuts available h'
// }
// else{
//     console.log('Fruits available ni h')
//     h1.innerHTML='Friuts available ni h'

// }


// question 9
// let h1=document.querySelector('h1')
// function but() {
//     let arr=[5,4,8,10,18]
//     let min=arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>min){
//             min=arr[i]
//         }
        
//     }
//     h1.innerHTML=(`the largest num is ${min}`)
// }


// question 10

// let h1=document.querySelector('h1')
// function but() {
//     let arr=[5,4,8,10,18]
//     let max=arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<max){
//             max=arr[i]
//         }
        
//     }
//     h1.innerHTML=(`the smalest num is ${max}`)
// }

// question 11





// let h1=document.querySelector('h1')
// let h2=document.querySelector('h2')

// function but() {
// let arr=[5,4,8,10,18]
    
//     let min=arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>min ){
//             min=arr[i]
        
        
//         }}
        
//     h1.innerHTML=(`the largest num is ${min}`)
// }



// question 12


//     function but() {
//         for (let i = 0; i <= 100; i++) {
//             console.log(`5 * ${i} = ${5*[i]}`)
            
            
//         }
//     }

// question 13


// let students=[ 'zohaib' ,' asad' ,' saqib' , 'irshad']
// let score=[ 95 , 75, 45 , 85]
// let table =document.querySelector('table')
// table.innerHTML+=` <tr>
// <th>Students</th>
// <th>score</th>
// </tr>`


//     function but() {
//         for (let i = 0; i < students.length; i++) {
//             table.innerHTML+=`<tr>
//             <td>${students[i]}</td> 
//             <td>${score[i]}</td>
//             </tr>
//             `
            
//         }
//     }


// question 14



// let score =[55 ,60 , 85 , 98 ,65]
// let input =+prompt('enter stop num')

// for (let i = 0; i < score.length; i++) {
    
    


// if(score[i]==input) {
// document.write(`${score [i]}`)

// break;

// }else{
//     document.write(`${score[i]}`)


// }



// question 15


let a =[[1, 2 , 3] , [4, 5 , 6] , [7, 8 , 9]]




for (let i = 0; i < a.length; i++) {
    
    document.write(`${(a)[i]} <br>`)

    
}


// question 16




// let num = +prompt('Enter a number!');
// for (let index = num*2; index >= 0; index--) {
//     document.write(`<b>${index/2}</b>, `)
// }


//               Q16 End








//               Q17 Start


// for (let index = 0; index <= 20; index++) {
//     if (index % 2 == 0) {
//         document.write(`${index} is even. <br>`);
//     }else{
//         document.write(`${index} is odd. <br>`);
//     }
// }


//               Q17 End








//               Q18 Start


// let product = 1;
// for (let index = 0; index <= 7; index++) {
//     if (index % 2 !== 0) {
//         product *= index;
//     }
// }
// document.write(`${product}`);

// let product = 1;
// for (let index = 0; index < 20; index++) {
//     if (index % 2 === 0) {
//         product *= index;
//     }
// }
// document.write(`${product}`);
// console.log(product);


//               Q18 End








//               Q19 Start


// let stars = +prompt("enter a number");
// for (let index = stars; index >= 1; index--) {
//     let stars2 = ``;
//     for (let j = 0; j < index; j++) {
//         stars2 += '*';
//     }
//     console.log(stars2);
// }


//               Q19 End








//               Q20 Start


//     part 1
// let input = +prompt('enter a number');
// for (let index = 0; index < input; index++) {
//     document.write('*****' + '</br>');
// }

//     part 2
// let input = +prompt('enter a number');
// for (let index = 1; index <= input; index++) {
//     // console.log(stars)
//     let stars = '';
//     for (let j = 0; j < index; j++) {
//         stars += '*';
//     }
//     document.write('<br>', stars)
//     console.log(stars);
// }

//     part 3
// let input = +prompt('enter a number');
// for (let index = input; index > 0; index--) {
//     let stars = ''
//     for (let j = 0; j < index; j++) {
//         stars += '*';
//     }
//     document.write('<br>', stars)
//     console.log(stars);
// }
    












 
