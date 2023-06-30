// Time Based.
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

// Space Complexity. 
// How does a algorithm grow in memory usage as the input size scales.

const data8 = ['A', 'B', 'C']  

for (let i= 0; i<data8.length; i++){
    console.log(data8[i]);
}

//This is how the big o is illustrated

0(1) 

// The space complexity in the above is O because theres no additional space because we are not creating anything inside

const data9 = ['A', 'B', 'C']
const out = []  

for (let i= 0; i<data9.length; i++){
    out[i] = data9[i]
}

o(n)

// The above will have  a space complexity of n because the output is going to be of the exact same link as the array input.


const data10= ['A', 'B', 'C']  
const data11 = [] 


for (let i= 0; i<data10.length; i++){
    data11[i] = []
   for (let j= 0; i<data4.length; j++)
    data11[i][j]+ data[i];
}

o(n^2)






// TO NOTE

// O(1) - Constant Time: The algorithm takes a constant amount of time or space, regardless of the input size. Examples include accessing an element in an array or performing a simple arithmetic operation.

// O(log n) - Logarithmic Time: The algorithm's performance grows logarithmically with the input size. Commonly seen in algorithms that divide the problem into smaller subproblems, such as binary search on a sorted list.

// O(n) - Linear Time: The algorithm's performance grows linearly with the input size. Examples include iterating through an array or performing a simple search.

// O(n log n) - Linearithmic Time: The algorithm's performance grows in a combination of linear and logarithmic rates. Commonly seen in efficient sorting algorithms like merge sort and quicksort.

// O(n^2) - Quadratic Time: The algorithm's performance grows with the square of the input size. Often occurs in nested loops where each iteration depends on the input size.

// O(2^n) - Exponential Time: The algorithm's performance grows exponentially with the input size. Commonly seen in brute-force algorithms that explore all possible combinations.

// These are just a few examples of Big O notations, and there are more complex notations like O(n!) (factorial time) and O(n^n) (super-exponential time) as well.