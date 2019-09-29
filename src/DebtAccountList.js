import React from 'react'
import './DebtAccountList.css'
import DebtAccount from './DebtAccount'

class DebtAccountList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            accounts: [
                {
                    id: 0,                    
                    name: "Navient",
                    balance: 16000,
                    rate: 4.0,
                    minBalance: 110
                },
                {
                    id: 1,
                    name: "Capitol One Auto",
                    balance: 9302.7,
                    rate: 3.99,
                    minBalance: 275
                }
            ]
        }

        this.addAccount = this.addAccount.bind(this);
    }

    // render() {
    //     const accountList = this.state.accounts.map((account) => <tr>
    //         <td>{account.name}</td>
    //         <td>{account.balance}</td>
    //         <td>{account.rate}</td>
    //         <td>{account.minBalance}</td>
    //         <td></td>
    //     </tr>)
    //     return <table>
    //         <tr><th>Account Name</th><th>Balance</th><th>Rate</th><th>Minimum Balance</th><th></th></tr>
    //         {accountList}

    //     </table>;
    // }

    render(){
        const accountList = this.state.accounts.map((account) => <DebtAccount key={account.id} name={account.name} balance={account.balance} rate={account.rate} minBalance={account.minBalance}></DebtAccount>);
        return <div className="accountContainer">
            <span><strong>Account Name</strong></span>
            <span><strong>Account Balance</strong></span>
            <span><strong>APR</strong></span>
            <span><strong>Minimum Balance</strong></span>
            {accountList}
            <DebtAccount mode="add" onAddAccount={this.addAccount}></DebtAccount>
        </div>
    }

    addAccount(name, balance, rate, minBalance){
        let accounts = this.state.accounts;
        accounts.push({
            id: this.state.accounts.length,
            name: name,
            balance: balance,
            rate: rate,
            minBalance: minBalance
        });
        this.setState({accounts : accounts});

        console.log(this.state.accounts);
    }
}

export default DebtAccountList