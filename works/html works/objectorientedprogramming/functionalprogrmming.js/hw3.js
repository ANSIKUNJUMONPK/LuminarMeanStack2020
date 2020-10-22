 string="HHHPPSDAAA";
 //H3P2S1D1A3
 out=[]
 for(item of string){
     if(item in out){
         out[item]+=1;
     }
     else{
         out[item]=1;
     }
 }
 console.log(out);
 