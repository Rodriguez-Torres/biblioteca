import {author} from "./author";
class libro extends author{
    private titulo:string = "";
    private tipo:string = "";
    private editorial:string = "";
    private year:number = 0;

    constructor(nombre: string, nacionalidad: string, fecha_nac: number, titulo: string, tipo: string, editorial: string, year: number) {
        super(nombre,nacionalidad,fecha_nac)
        this.titulo=titulo;
        this.tipo=tipo;
        this.editorial=editorial;
        this.year=year;
    }

    private get_titulo(): string {
        return this.titulo;
    }

    private get_tipo(): string {
        return this.tipo;
    }

    private get_editorial(): string {
        return this.editorial;
    }

    private get_year(): number {
        return this.year;
    }

    private set_titulo(titulo:string){
        this.titulo = titulo;
    }

    private set_tipo(tipo:string){
        this.tipo = tipo;
    }

    private set_editorial(editorial:string){
        this.editorial = editorial;
    }

    
    private set_year(year:number){
        this.year = year;
    }
}
