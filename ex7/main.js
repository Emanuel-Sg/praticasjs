
// Função responsável por inserir linhas na tabela
function inserirLinhaTabela() {

    // Captura a referência da tabela com id “minhaTabela”
    var table = document.getElementById("tabela");
    // Captura a quantidade de linhas já existentes na tabela
    var numOfRows = table.rows.length;
    // Captura a quantidade de colunas da última linha da tabela
    var numOfCols = table.rows[numOfRows - 1].cells.length;

    // Insere uma linha no fim da tabela.
    var newRow = table.insertRow(numOfRows);

    // Faz um loop para criar as colunas
    for (i = 0; i < numOfCols; i++) {
        // Insere uma coluna na nova linha 
        newCell = newRow.insertCell(i);
        // Insere um conteúdo na coluna
        newCell.innerHTML = "Novo   " ;
    }

}
