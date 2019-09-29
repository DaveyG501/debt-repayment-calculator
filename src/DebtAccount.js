import React from 'react'
import styles from './DebtAccount.css'

const modes = {
    DEFAULT: 'default',
    ADD: 'add',
    EDIT: 'edit',
}

class DebtAccount extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : this.props.name || '',
             balance : this.props.balance || 0,
             rate : this.props.rate || 0,
             minBalance : this.props.minBalance || 0,
             mode : this.props.mode || modes.DEFAULT
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSetName = this.onSetName.bind(this);
        this.onSetBalance = this.onSetBalance.bind(this);
        this.onSetRate = this.onSetRate.bind(this);
        this.onSetMinBalance = this.onSetMinBalance.bind(this);
    }
    


    render(){
        switch(this.state.mode){
            case modes.ADD:
                return this.addFieldRender();
            default:
                return this.defaultFieldRender();
                    
        }        
    }
    
    defaultFieldRender(value){
        return <><span>{this.state.name}</span><span>{this.state.balance}</span><span>{this.state.rate}</span><span>{this.state.minBalance}</span></>;
    }

    addFieldRender(){
        return <form onSubmit={this.handleSubmit}>
            <input type="text" value = {this.state.name} onChange={this.onSetName}/>
            <input type="number" value={this.state.balance} onChange={this.onSetBalance}/>
            <input type="number" value={this.state.rate} onChange={this.onSetRate}/>
            <input type="number" value={this.state.minBalance} onChange={this.onSetMinBalance}/>
            <input type="submit" value="Add"/>
        </form>
    }

    onSetName(event){
        this.setState({name : event.target.value});
    }

    onSetBalance(event){
        this.setState({balance : event.target.value});
    }

    onSetRate(event){
        this.setState({rate : event.target.value});
    }

    onSetMinBalance(event){
        this.setState({minBalance : event.target.value});
    }

    handleSubmit(event){
        console.log(this.state);
        this.props.onAddAccount(this.state.name, this.state.balance, this.state.rate, this.state.minBalance);
        event.preventDefault();
    }
}

export default DebtAccount