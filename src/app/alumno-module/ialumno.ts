import { ICurso } from "../curso-module/icurso";
import { TipoDocumento} from "../shared-module/tipo-documento.enum"

export interface IAlumno {
    nombre :string,
    apellido: string
    fechaNacimiento: Date,
    tipoDocumento: TipoDocumento
    numeroDocumento: string,
    comunidad: boolean,
    numeroLegajo: string,
    cursos: Array<ICurso>
}
