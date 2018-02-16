// Componente de formulario
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {reduxForm, Field} from 'redux-form' // reduxForm: é uma função que funciona mais ou menos como o connect, ela serve como decoreator, liga o componente com o estado do redux - Field é uma tag que irá controlar os campos do formulario

import labelAndInput from '../common/form/labelAndInput'
import CreditList from './creditList'

import {init} from './billingCycleActions'
class BillingCycleForm extends Component{
    render() {

        const {handleSubmit, readOnly} = this.props // metodo do reduxform para processamento do formulario
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>{/*Recebe como parametro a action que será disparada*/}
                    <Field name='name' component={labelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={labelAndInput} type='number' readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o mês' />
                    <Field name='year' component={labelAndInput} type='number' readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o ano' />
                    <CreditList cols='12 6' readOnly={readOnly} />
                </div>

                <div className='box-footer' >
                    <button type='submit' className={`btn btn-${this.props.submitClass}`} >{this.props.submitLabel}</button>
                    <button type='button' className={'btn btn-default'} 
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm) //Ligação com o estado do redux - o segundo parametro é para manter os dados do formulario mesmo que o componente tenha sido destruido na passagem de abas - passa para uma variavel o resultado 
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null,mapDispatchToProps) (BillingCycleForm)