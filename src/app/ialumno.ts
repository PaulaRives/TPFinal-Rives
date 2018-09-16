import { ICurso } from "./icurso";

export interface IAlumno {
    nombre: string;
    apellido: string;
    cursos: Array<ICurso>
}
