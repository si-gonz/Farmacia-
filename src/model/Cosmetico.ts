import { Produto } from "./Produto";

export class Cosmetico extends Produto{

private _fragancia:string;

	constructor(id: number, nome: string, tipo: number, preco: number,fragancia: string) {
        super(id,nome,tipo,preco)
		this._fragancia = fragancia;
	}


    public visualizar():void{
        super.visualizar();
        console.log("Fragancia: " + this._fragancia)
    }

}