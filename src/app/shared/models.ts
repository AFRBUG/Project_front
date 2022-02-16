export class register_user{
    name:string="";
    username:string=""; 
    password:string="";
    public user(nom:string,email:string,pwd:string){
        this.name=nom;
        this.username=email; 
        this.password=pwd; 
    }
}
  export  class log_user{
      username:string=""; 
      password:string=""; 
      public log_user(email:string,paswd:string){
        this.password=paswd; 
        this.username=email; 
      }
      
  }
  
export class event {

    eventName:string="";
    eventDisc:string="";
    public event(nom:string,discription:string){
        this.eventName=nom;
        this.eventDisc=discription;
    }
    
}