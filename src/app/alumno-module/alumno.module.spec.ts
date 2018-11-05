import { AlumnoModule } from './alumno.module';

describe('AlumnoModule', () => {
  let alumnoModule: AlumnoModule;

  beforeEach(() => {
    alumnoModule = new AlumnoModule();
  });

  it('should create an instance', () => {
    expect(alumnoModule).toBeTruthy();
  });
});
