export default class Type{
    #id;
    #type_name="";
    #cards = [];
    
    constructor(id, type_name, liste_cards){
        this.#id = id;
        this.#type_name = type_name;
        this.#cards = liste_cards;
    }
    get id(){
        return this.#id;
    }
    get type_name(){
        return this.#type_name;
    }
    get cards(){
        return this.#cards;
    }
}