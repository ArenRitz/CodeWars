Array.prototype.sameStructureAs = function (other) {
    if (Array.isArray(other) === false) {
        return false;
      }
      return compare(this, other);
    };



    const compare = function(arr1, arr2) {
        let state = true;
        if (arr1.length !== arr2.length) {
            state = false;
          }
        arr1.forEach((e,i) => {
            if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
               state = compare(arr1[i], arr2[i])
            } else if ((Array.isArray(arr1[i]) && !Array.isArray(arr2[i])) || (Array.isArray(arr2[i]) && !Array.isArray(arr1[i]))) {
                state = false;
            }
        });
        return state;
    }
