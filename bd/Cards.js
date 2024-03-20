export default class Cards{
    #id;
    #card_name="";
    #elixir="";
    #rarity="";
    #arena="";
    #card_description="";
    #type_id=[];
    #img="";
    
    constructor(id, card_name, elixir, rarity, arena, card_description, liste_type_id, img){
        this.#id = id;
        this.#card_name = card_name;
        this.#elixir = elixir;
        this.#rarity = rarity;
        this.#arena = arena;
        this.#card_description = card_description;
        this.#type_id = liste_type_id;
        this.#img = img;
    }
    get id(){
        return this.#id;
    }
    get img(){
        return this.#img;
    }
    get card_name(){
        return this.#card_name;
    }
    get elixir(){
        return this.#elixir;
    }
    get rarity(){
        return this.#rarity;
    }
    get arena(){
        return this.#arena;
    }
    get card_description(){
        return this.#card_description;
    }
    get type_id(){
        return this.#type_id;
    }
}