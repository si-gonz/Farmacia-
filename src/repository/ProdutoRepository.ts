import { Produto } from "../model/Produto";

export interface ProdutoRepository{

    //CRUD do Produto
    criarProduto(produto:Produto):void;
    listarProdutos():void;
    consultarProduto(produto:string):void;
    atualizarProduto(produto:string):void;
    deletar(produto:string):void;
}


