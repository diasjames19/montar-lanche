const vm = new Vue({
    el:"#app",
    data:{
        inputTipoPao:'',
        inputSalada:[],
        inputMolho:[],
        inputHambuger:'',
        etapa:1
    },
    computed:{
        pao() {
            switch (this.inputTipoPao) {
                case 'gergelim':
                    return[
                        "imagens/pao_gergelim_superior.png",
                        "imagens/pao_gergelim_inferior.png",
                    ]
                 case 'australianoa':
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
            return "imagens/katchup.png"
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
            return "imagens/mestarda.png"
            else
            return "imagens/padrao/molho.png"    
        },
        hambuger(){
            switch (this.inputHambuger) {
                case 'bovino':
                    return "imagens/bovino.png"
                       
                    
                 case 'frango':
                    return "imagens/frango.png"
                         
                case 'soja':
                        return "imagens/soja.png"
                default:
                    return 

                        "imagens/padrao/hambuger.png"
                        
                    
            }
            
        },
    },

        methods:{
           fezerPedido(){
            if(this.inputTipoPao && this.inputHambuger)
            this.etapa = 2
            else
                alert("Seleciono ao menos o pao e o tipo de carne")

           }
        },
    });
