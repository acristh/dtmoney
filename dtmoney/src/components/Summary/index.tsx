import { Container } from "./styles";

import incomeIcon from '../../assets/income.svg';

export function Summary() {
    return (
        <Container >
            <div>
                <head>
                    <p>Entradas</p>
                    <img src={incomeIcon} alt="entradas"/>
                </head>
                <strong>R$10.000,00</strong>
            </div>
        </Container>
    );

}