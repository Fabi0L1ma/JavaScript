class Tv{
    
    constructor(){
        this._relacaoCanais = Array(2, 4, 5, 7, 10) // UNDERLINE MEIO QUE UM ENCAPSULAMENTO
        this._canalAtivo = 5
        this._volume = 5
    }

    //GETS E SETS
    get canalAtivo(){
        return this._canalAtivo
    }

    set canalAtivo(canal){
        if(this._relacaoCanais.indexOf(canal) !== -1){   // VERIFICA SE DENTRO ARRAY TEM UMA REFERENCIA PARA ESSE CANAL 
            this._canalAtivo = canal
        }  
    }
}

let tv = new Tv()

tv.canalAtivo = 1

console.log(tv.canalAtivo)