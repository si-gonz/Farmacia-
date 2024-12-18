import readlinesync = require("readline-sync");
import { ProdutoController } from "./src/controller/ProdutoController";
import { Produto } from "./src/model/Produto";
import { Medicamento } from "./src/model/Medicamento";
import { Cosmetico } from "./src/model/Cosmetico";


export function main() {

    let produtos: ProdutoController = new ProdutoController();
    let opcao, id, tipo, preco: number;
    let nome, generico, fragancia: string;
    const categoriaTipo = ['Medicamentos', 'Cosmeticos'];
    
    const produtoController = new ProdutoController();
     // Instância da Classe Medicamento
     produtos.criarProduto(new Medicamento(4, 'Cataflan', 1, 23.55, 'Antiflamatorio'));
     produtos.criarProduto(new Medicamento(3, 'Dipirona', 1, 67.90, 'Analgesico'));
 
      // Instâncias da Classe Cosmetico
     produtos.criarProduto(new Cosmetico(1, 'JLow', 2, 199.09,  'Perfume'));
     produtos.criarProduto(new Cosmetico(2, 'Cleiton', 2, 189.50, 'Perfume'));

    while (true) {


        console.log("******************FARMA CLICK ********************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                          ");
        console.log("            2 - Listar todas os Produtos               ");
        console.log("            3 - Consultar produto por Id             ");
        console.log("            4 - Atualizar Produto             ");
        console.log("            5 - Deletar Produto                         ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log("\n Farma Click - Cuidando de você, onde quer que esteja. ");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nDigite o ID do produto: \n\n");
                id = readlinesync.questionInt('');
                
                console.log("\n\nDigite o nome do produto: \n\n");
                nome = readlinesync.question('');

                console.log("\n\nDigite o tipo do produto: \n\n");
                tipo = readlinesync.keyInSelect(categoriaTipo, "", {cancel: false}) +1;

                console.log("\n\nDigite o preço do produto: \n\n");
                preco = readlinesync.questionFloat('');

                produtos.criarProduto(new Medicamento(id, nome, tipo, preco, 'Analgesico'));

                switch (tipo){
                    case 1:
                        console.log("Digite a fragancia: ");
                        fragancia = readlinesync.question('');
                        produtos.criarProduto(new Cosmetico(id, nome, tipo,preco, fragancia))
                    break;
                    case 2:
                        console.log("Digite o laboratorio: ");
                        generico = readlinesync.question('');
                        produtos.criarProduto(new Medicamento(id, nome, tipo, preco, generico))
                    break;
                }

                break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");
                produtos.listarProdutos();

                break;
            case 3:
                console.log("\n\nConsultar produto por Id\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar Produto\n\n");

                break;
            case 5:
                console.log("\n\nDeletar Produto \n\n");

                break;
            case 6:
                console.log("\n\Sair\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Simone Gonzaga ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("https://github.com/si-gonz");
    console.log("*****************************************************");
}

main();