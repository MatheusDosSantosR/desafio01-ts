import { DioAccount } from "./DioAccount";

export class TsAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    setBalance = (value: number): void => {
        const newValue = value + 10;
        this.deposit(newValue);
        console.log(`Você depositou R$ ${value}`)
    }
}