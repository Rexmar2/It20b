/* i = 1;

// do {
//     console.log(i);
//     i++;

// } while (1<=5);

i = 6;

do {
    console.log(i);
    i++;

 } while (i>=5);

 output = "";
 i = 1;
 do {
    output += i + " ";
    i++;
 } while (i<=5);

 console.log(output);

   */

 arr1 = [4,2,3];
 output="";

 function arrDoWhile(arr){
    output="";

    i=0;
    do{
        output += arr[i] +  " ";
        i++;
    }while(i < arr.length)
        console.log(output);

    }
 arrDoWhile(arr1);

