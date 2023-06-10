const vm = new Vue({
    el:"#app",
    data:{
        inputTipoPao:'',
        inputSalada:[],
        inputMolho:[],
        inputHamburguer:'',
        etapa:1,
        inputNome:'',
        inputEnd:'',
        novoPedidoAssic:null
    },
    computed:{
        pao() {
            switch (this.inputTipoPao) {
                case 'gergelim':
                    return[
                        "imagens/pao_gergelim_superior.png",
                        "imagens/pao_gergelim_inferior.png",
                    ]
                 case 'australiano':
                    return[
                        "imagens/pao_australiano_superior.png",
                        "imagens/pao_australiano_inferior.png",
                    ]   
                default:
                    return [

                        "imagens/padrao/pao_superior.png",
                        "imagens/padrao/pao_inferior.png",
                    ]
            }
           
        },
        alface() {
            if(this.inputSalada.includes('alface'))
                return "imagens/alface.png"
            else
                return "imagens/padrao/alface.png"
        },
        ketchup(){
            if(this.inputMolho.includes('ketchup'))
            return "imagens/ketchup.png"
            else
            return "imagens/padrao/molho.png"            
        },
        maionese(){
            if(this.inputMolho.includes('maionese'))
            return "imagens/maionese.png"
            else
            return "imagens/padrao/molho.png"    
        },
        mostarda(){
            if(this.inputMolho.includes('mostarda'))
            return "imagens/mostarda.png"
            else
            return "imagens/padrao/molho.png"    
        },
        hamburguer(){
            switch (this.inputHamburguer) {
                case 'bovino':
                    return "imagens/bovino.png"
                case 'frango':
                    return "imagens/frango.png"      
                case 'soja':
                        return "imagens/soja.png"
                default:
                    return  "imagens/padrao/hamburguer.png"
                        
                    
            }
            
        },
    },
        methods:{
           fezerPedido(){
            if(this.inputTipoPao && this.inputHamburguer)
                this.etapa = 2
            else
                alert("Seleciono ao menos o pao e o tipo de carne")

           },
           confirmarPedido(){
            if(this.inputNome && this.inputEnd){
                this.etapa = 3
                this.novoPedidoAssic = setTimeout(() => this.novoPedido(), 9000)
             } else{
                alert("Preenvha os Campos de Eenderço e Nome")
             }
           },
           novoPedido(){
            this.etapa = 1,
            this.inputTipoPao='',
            this.inputSalada=[],
            this.inputMolho=[],
            this.inputHamburguer='',
            this.inputNome='',
            this.inputEnd=''
           },
           watch:{
                etapa(novoValor){
                    if(novoValor == 1)
                        clearTimeout(this.novoPedidoAssic)
                }
           },
        },
    });