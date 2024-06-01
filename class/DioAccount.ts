export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + value
      console.log('Voce depositou ' + value + " seu saldo atual e " + this.balance)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()){
      if(this.getBalance() >= value){
        this.balance = this.getBalance() - value
        console.log("Saque realizado com sucesso de valor ", value, " seu saldo atual é", this.getBalance())
      }
      else{
        console.log("Não foi possivel realizar o saque de valor " + value +" pois seu saldo é inferior a seu saldo ", this.getBalance())
      }
    }
  }

  getBalance = (): number => {
    console.log(this.balance)
    return this.balance
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
