import React from 'react';

import { Container } from "./styles";
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';

export function Summary() {
    return (
        <Container >
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeIcon} alt="Entradas" />
                </header>
                <strong>R$10.000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeIcon} alt="Saídas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalIcon} alt="Total" />
                </header>
                <strong>R$9.500,00</strong>
            </div>
        </Container>
    );

}