exports.insertSort = function(data){
    var sortedData = [];
    
    data.forEach(function(target){
        sortedData.splice(insertNumber(sortedData,target),0,target);
    });
    
    
    return sortedData;
}

function insertNumber(sortArray,target){
    
    
    for(var i=0;i<sortArray.length;i++){
        var data = sortArray.slice(i,i+1);
        
        if(data - target > 0){
            return i;
        }
    }
    
    return sortArray.length;
    
}