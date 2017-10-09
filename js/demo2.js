/**
 * Created by lenovo on 2017/10/9.
 */
Array.prototype.fu=function(){
    var res=[this[0]];
    for(var i=1;i<this.length;i++){
        var repeat = false;
        for(var j=0;j<res.length;j++){
            if(this[i]==res[j]){
                repeat = true;
                break;
            }
        }
        if(!repeat){
            res.push(this[i]);
        }
    }
    return res;
}
var arr2=[5,6,6,"a","c","a",2,2,1];
console.log(arr2.fu());

