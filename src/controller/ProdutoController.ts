import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
    // Lista para armazenar os produtos
    private listaProduto: Array<Produto> = new Array<Produto>();

    // Controlar o ID
	public id: number = 0

    // Método para criar um novo produto
    criarProduto(produto: Produto): void {
        this.listaProduto.push(produto);
        console.log("Produto cadastrado com sucesso!");
        console.log("produto cadastrado ", produto);
    }

    // Método para listar todos os produtos
    listarProdutos(): void {
        console.log("Listando produtos.... ");
        console.log("Conteúdo da lista: ", this.listaProduto);

        for (let produto of this.listaProduto) {
            produto.visualizar();
        }
    }

    // Método para consultar um produto (ainda sem lógica)
    consultarProduto(produto: string): void {
        console.log(`Método consultarProduto chamado com o parâmetro: ${produto}`);
    }

    // Método para atualizar um produto (ainda sem lógica)
    atualizarProduto(produto: string): void {
        console.log(`Método atualizarProduto chamado com o parâmetro: ${produto}`);
    }

    // Método para deletar um produto (ainda sem lógica)
    deletar(produto: string): void {
        console.log(`Método deletar chamado com o parâmetro: ${produto}`);
    }
}



