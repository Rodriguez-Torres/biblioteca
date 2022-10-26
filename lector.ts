export class lector {
    
    private num_socio:number=0;
    private nombre:string="";
    private telefono:number=0;
    private direccion:string="";
    private TC:number=0;
     constructor (num_socio:number,nombre:string,telefono:number,direccion:string,TC:number)
    {
        this.num_socio=num_socio;
        this.nombre=nombre;
        this.telefono=telefono;
        this.direccion=direccion;
        this.TC=TC
    } 
    private get_num_socio():number {
        return this.num_socio;
         
    }
    private get_nombre():string {
        return this.nombre;
         
    }
    private get_telefono():number {
        return this.telefono;
         
    }
    private get_dirrecion():string {
        return this.direccion;
         
    }
    private get_TC():number {
        return this.TC;
         
    }
    private set_num_socio(num_socio:number)
   {
    this.num_socio=num_socio;
   }
   private set_nombre(nombre:string)
   {
    this.nombre=nombre;
   }
   private set_telefono(telefono:number)
   {
    this.telefono=telefono;
   }
   private set_direccion(direccion:string)
   {
    this.direccion=direccion;
   }
   private set_TC(TC:number)
   {
    this.TC=TC;
   }
   public multar(mensaje:string):string{
    return mensaje;
   }
   public devolver(mensaje:string):string{
    return mensaje;
   }
   public prestar(mensaje:string):string{
    return mensaje;
   }
}