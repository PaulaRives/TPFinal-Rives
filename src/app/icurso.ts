import { IDocente } from "./idocente";

export interface ICurso {
    nombre: string;
    horas: number;
    precio: number;
    docente: IDocente;
    inicio: string;
    fin: string;
    estado: string;
}
