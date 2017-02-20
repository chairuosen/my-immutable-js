function immutable(source) {
    return new Proxy(source,{
        get:function(target,key){
            try{
                return immutable(target[key]);
            }catch(e){
                return target[key];
            }
        },set:function(){}
    });
}
module.exports = immutable;