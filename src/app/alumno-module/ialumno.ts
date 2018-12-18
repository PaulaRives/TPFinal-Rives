import { ICurso } from "../curso-module/icurso";
import { TipoDocumento} from "../shared-module/tipo-documento.enum"

export interface IAlumno {
    _nombreCompleto: string,
    nombre :string,
    apellido: string
    fechaNacimiento: string,
    tipoDocumento: TipoDocumento
    documento: string,
    comunidad: boolean,
    legajo: string,
    cursos: Array<number>
}
