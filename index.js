
// 1st Question //

    function mergeArray(arr1,arr2){
        return arr1.concat(arr2);
    }
    const array1 = [1,2,3];
    const array2 = [4,5,6];
    const mergeArr = mergeArray(array1,array2); 
    console.log(mergeArr); 

// 2nd Question //

    function filterNum(num){
        return num.filter((num)=> num >= 30);
    }
    const number = [10,20,30,40,50]
    const moreThanThirty = filterNum(number);
    console.log (moreThanThirty);

// 3rd Question //

    let removeindex = 2;
    function removeNumber(rn){
    return rn.splice(removeindex,1);
}
    const arraynum = [5,6,7,2,4]
    const removed = removeNumber(arraynum);
    console.log(arraynum);

// 4th Question //

    const romanNum = {
        I:1,
        V:5,
        X:10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    const inputRoman = "XIV";
    console.log(inputRoman);

    function romanToNum(rnum){
        let limit = 0;
    for (i=0; i<rnum.length; i++) {
        if(rnum[i] === "I"&& rnum[i+1]==="V"){
            limit += 4;
            i++
            } else if (rnum[i] === "I"&& rnum[i+1]==="X"){
                limit += 9;
                i++
            } else if (rnum[i] === "X"&& rnum[i+1]==="L"){
                limit += 40;
                i++
            } else if (rnum[i] === "X"&& rnum[i+1]==="C"){
                limit += 90;
                i++
            } else if (rnum[i] === "C"&& rnum[i+1]==="D"){
                limit += 400;
                i++
            } else if (rnum[i] === "C"&& rnum[i+1]==="M"){
                limit += 900;
                i++
            } else {
                limit += romanNum[rnum[i]];
            }
        }
      return limit;
    }
    const romanConvert = romanToNum(inputRoman);
    console.log(romanConvert);

   // 5th Question //

    function removeDup(snum){
        return [...new Set(snum)]
    }
    const sortNum = [1,2,1,4,5,2,3,4,1,4]
    sortNum.sort();
    const removeDupFunc = removeDup(sortNum);
    console.log(removeDupFunc);

    // 6th Question //
    
    function rotateArray(rarray,rtime){
        const n = rarray.length;
        rtime %= n;
        return rarray.slice(n-rtime).concat(rarray.slice(0,n-rtime));
    }
    let rotateTime = 3;
    const originalArr = [1,2,3,4,5];
    const rotateArrayFunc = rotateArray (originalArr,rotateTime);
    console.log(rotateArrayFunc);
