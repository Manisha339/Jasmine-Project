var factorial = (x) => {
    var result=1;
    for(var i=1;i<=x;i++){
        result *=i;
    }
    return result;

}

module.exports = factorial;