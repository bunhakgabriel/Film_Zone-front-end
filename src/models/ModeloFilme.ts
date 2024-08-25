export class ModeloFilme{
    

    private _id: number | undefined = undefined;
    public get id() {
        return this._id;
    }
    public set id(value) {
        this._id = value;
    }
    
    private _titulo: string | undefined = undefined;
    public get titulo(){
        return this._titulo;
    }
    public set titulo(value) {
        this._titulo = value;
    }
    
    private _adulto: boolean | undefined = undefined;
    public get adulto(){
        return this._adulto;
    }
    public set adulto(value) {
        this._adulto = value;
    }
    
    private _idsGenero: number[] | undefined = undefined;
    public get idsGenero(){
        return this._idsGenero;
    }
    public set idsGenero(value) {
        this._idsGenero = value;
    }
    
    private _idiomaOriginal: string | undefined = undefined;
    public get idiomaOriginal() {
        return this._idiomaOriginal;
    }
    public set idiomaOriginal(value) {
        this._idiomaOriginal = value;
    }
    
    private _sinopse: string | undefined = undefined;
    public get sinopse(){
        return this._sinopse;
    }
    public set sinopse(value) {
        this._sinopse = value;
    }
    
    private _dataLancamento: Date | undefined = undefined;
    public get dataLancamento(){
        return this._dataLancamento;
    }
    public set dataLancamento(value) {
        this._dataLancamento = value;
    }
    
    private _contagemAvaliacoes: number | undefined = undefined;
    public get contagemAvaliacoes(){
        return this._contagemAvaliacoes;
    }
    public set contagemAvaliacoes(value) {
        this._contagemAvaliacoes = value;
    }
    
    private _urlCapa: string | undefined = undefined;
    public get urlCapa(){
        return this._urlCapa;
    }
    public set urlCapa(value) {
        this._urlCapa = value;
    }
    
    private _urlTrailer: string | undefined = undefined;
    public get urlTrailer(){
        return this._urlTrailer;
    }
    public set urlTrailer(value) {
        this._urlTrailer = value;
    }
    
    private _urlFilme: string | undefined = undefined;
    public get urlFilme(){
        return this._urlFilme;
    }
    public set urlFilme(value) {
        this._urlFilme = value;
    }
    
    private _visualizacoes: number | undefined = undefined;
    public get visualizacoes(){
        return this._visualizacoes;
    }
    public set visualizacoes(value) {
        this._visualizacoes = value;
    }
    
    private _isDisponivel: boolean | undefined = undefined;
    public get isDisponivel(){
        return this._isDisponivel;
    }
    public set isDisponivel(value) {
        this._isDisponivel = value;
    }
    
    private _duracaoMin: number | undefined = undefined;
    public get duracaoMin(){
        return this._duracaoMin;
    }
    public set duracaoMin(value) {
        this._duracaoMin = value;
    }
    
    private _classificacao: number | undefined = undefined;
    public get classificacao(){
        return this._classificacao;
    }
    public set classificacao(value) {
        this._classificacao = value;
    }
    
    private _paisOrigem: string | undefined = undefined;
    public get paisOrigem(){
        return this._paisOrigem;
    }
    public set paisOrigem(value) {
        this._paisOrigem = value;
    }
    
    private _diretor: string | undefined = undefined;
    public get diretor(){
        return this._diretor;
    }
    public set diretor(value) {
        this._diretor = value;
    }
    
    private _rating: number | undefined = undefined;
    public get rating(){
        return this._rating;
    }
    public set rating(value) {
        this._rating = value;
    }
    
}