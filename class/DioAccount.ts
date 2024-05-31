export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 15
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
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
      if(this.balance >= value){
        this.balance = this.balance - value
        console.log("Saque realizado com sucesso de valor " + value +" seu saldo atual é", this.balance)
      }
      else{
        console.log("Não foi possivel realizar o saque de valor " + value +" pois seu saldo é inferior a seu saldo ", this.balance)
      }
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
