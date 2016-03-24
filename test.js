
var sorted = require('./user/sortutil.js');
var assert = require('chai').assert;

describe('挿入ソート',function(){
 it('テスト一つ目',function(){
     var testData = [10,3,6,1,7,9];
    　assert.deepEqual([1,3,6,7,9,10],sorted.insertSort(testData));
 })
    
})