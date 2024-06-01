import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { TsAccount } from './class/TsAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(20)
console.log(peopleAccount)
peopleAccount.withdraw(10)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(20)
console.log(companyAccount)
companyAccount.getLoan(25)
console.log(companyAccount)

const tsAccount: TsAccount = new TsAccount('Alexandre', 30)
tsAccount.setBalance(600)
console.log(tsAccount)