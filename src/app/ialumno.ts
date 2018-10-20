import { ICurso } from "./curso-module/icurso";

export interface IAlumno {
    nombre: string;
    apellido: string;
    cursos: Array<ICurso>
}
