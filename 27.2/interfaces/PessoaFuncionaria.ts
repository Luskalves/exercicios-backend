export default interface PessoaFuncionaria {
  registration: string;
  salary: number;
  admissionDate: Date;
  generateRegistration(): string;
}