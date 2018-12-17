import { Estado } from "./estado.enum";

export interface ICurso {
    id: number;
    titulo: string;
    fechaInicio: number;
    fechaFin: number;
    asistentes: Array<string>;
    profesor: Array<string>;
    laboratorio: number;
    estado: Estado;
    precio: Number;
}