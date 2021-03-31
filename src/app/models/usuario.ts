export class Usuario {
  constructor(
    public usuarioId?: number,
    public nombre?: string,
    public apellido?: string,
    private password?: string
  ) {}
}
