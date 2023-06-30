const data1 = ['A', 'B', 'C']  
const data2 = [1, 2, 3, 4, 5] 

for (let i= 0; i<data1.length; i++){
    console.log(data1[i]);
}

for (let j= 0; i<data2.length; j++){
    console.log(data2[j]);
}

// Assuming that data1 is (n) and data2 is (a) then the big o is evaluated as follows 
o(n + a) 


// if we change to nested loops then this is how the big O is evaluated.

const data3= ['A', 'B', 'C']  
const data4 = [1, 2, 3, 4, 5] 


for (let i= 0; i<data3.length; i++){
   for (let j= 0; i<data4.length; j++)
    console.log(data3[i] + data4[j]);
}
 
// Assuming data3 is n and data4 is a then the big O notation would be 

o(n * a)


// If we need to loop through only one array then big o is found as follows
// As a result this performs very slowly since the 3 inputs in the array will be performed 9 times.



const data = ['A', 'B', 'C']  


for (let i= 0; i<data.length; i++){
for (let j= 0; i<data.length; j++){
    console.log(data[j] + data[i]);
}
}

o(n ^ 2)