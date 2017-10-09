/**
 * Created by lenovo on 2017/10/9.
 */
Array.prototype.fun=function(){
    this.sort();
    var arr=[this[0]];
    for(var i=1;i<this.length;i++){
        if(this[i]!==arr[arr.length-1]){
            arr.push(this[i]);
        }
    }
    return arr;
}
var arr1=[1,1,"a","c","a",7];
console.log(arr1.fun());