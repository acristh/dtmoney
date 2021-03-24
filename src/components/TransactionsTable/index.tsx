import { Container } from './styles';

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <td>Data</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">- R$ 500,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/03/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel de Casa</td>
                        <td className="widthdraw">R$ 1.100,00</td>
                        <td>Casa</td>
                        <td>20/03/2021</td>
                    </tr>
                </tbody>
            </table>   
        </Container> 
    );
}