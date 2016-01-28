app.service('GetStyle',function(){

   this.getStyle = function (obj,name){
        
            return getComputedStyle(obj,false)[name];
        

    }
    
});