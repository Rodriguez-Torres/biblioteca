export class multar {
    private fecha_inicio: number = 0;
    private fecha_fin: number = 0;
    constructor(fecha_inicio: number, fecha_fin: number)
    {
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
    }

    private get_fecha_inicio(): number{
        return this.fecha_inicio;
    }

    private get_fecha_fin(): number {
        return this.fecha_fin;
    }

    private set_fecha_inicio(fecha_inicio:number){
        this.fecha_inicio = fecha_inicio;
    }

    private set_fecha_fin(fecha_fin:number){
        this.fecha_fin = fecha_fin;
    }
}