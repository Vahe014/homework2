// Checking palindrome
function palindromeStr (str){
  
    let isPalidrome = true;
      if(str === ''){
       return false;
    }
    for(let i = 0; i < str.length / 2; i++){
        if(str[i] !== str[str.length - 1 - i] ){
            isPalidrome = false;
            break
        }
    }
    return isPalidrome
}

palindromeStr('')

// Change String

  
    function cutText(text, str, changeStr) {
    
        let cutedText = '';
        let tempCuted = '';
        for (let i = 0, j = 0; i < text.length; i++) {
            if(str[j] === text[i]){
                tempCuted += text[i]
                j++
            }else{
                if(j !== str.length){
                    cutedText += tempCuted
                }else{
                    cutedText += changeStr
                }
                cutedText += text[i]
                tempCuted = ''
                j = 0
            }
    
        }
      //console.log(cutedText)
      }


  //Print Number

  function printNums (n){
    for(let i = 1; i <= n; i++){
        let row = '';
        for(j = 1; j <= i; j++){
            row += j
        }
       // console.log(row)
    }

    for(let i = n - 1; i > 0; i--){
        let row = ''
        for(let j = 1; j <= i; j++){
            row += j
        }
       // console.log(row)
    }
  }
  printNums(5)


    //Symbols
    const arr = [
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
      
      ]

  function stars(arr,symbol){
    
    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr[i].length; j++){
            if(i === j  ){
                arr[i][j] = symbol
            }
        }
    }
    return arr
  }

  //console.log(stars(arr, '*'))

  function stars(arr,symbol){
    
    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr[i].length; j++){
             if(i === j || j === arr[i].length - 1 - i ){
                arr[i][j] = symbol
             }
        }
    }
    return arr
  }

  //console.log(stars(arr, '*'))

 



 

