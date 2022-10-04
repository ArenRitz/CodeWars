function openOrSenior(data){
    let result = [];
    data.forEach(arr => {
        if (arr[0] >= 55 && arr[1] > 7) {
            result.push('Senior');
        } else {
            result.push('Open');
        }
    })
    return result;
  }



  console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))