import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    // O metodo deposit, realiza a validação da conta de esta com status true ou false.
    this.deposit(value)
    console.log("Emprestimo realizado com sucesso! No valor de ", value)
  }
}
