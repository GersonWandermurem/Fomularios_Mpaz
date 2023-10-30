// load-data.js

exports.handler = async (event, context) => {
    // Implemente a lógica para carregar os dados da tabela aqui
    // Você pode carregar os dados de um banco de dados ou de qualquer outra fonte de dados

    // Exemplo de estrutura de dados da tabela
    const data = [
        {
            id: 1,
            nomeEmpresa: "GERSON",
            data: "30/10/2023", // Formato "dd/mm/aaaa"
            valor: 200.00,
            descricao: "Venda de produtos",
            tipo: "Receita"
        },
        {
            id: 2,
            nomeEmpresa: "GERSON",
            data: "29/10/2023", // Formato "dd/mm/aaaa"
            valor: 50.00,
            descricao: "Despesa de escritório",
            tipo: "Despesa"
        },
        // Adicione mais linhas de dados conforme necessário
    ];

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
};
