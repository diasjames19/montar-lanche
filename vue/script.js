var foodApp = new Vue({
    el:"foodApp",
    data:{
        tarefas:[
            {titulos:"Deselvover Api para sistemas", pronta:false},
            {titulos:"Ciar controle de Acesso", pronta:false},
            {titulos:"Desenvolver View", pronta:false},
            {titulos:"Enviar novas mudanças par o servidor", pronta:false},
            {titulos:"teste", pronta:false},
        ],
        novaTarefa:{
            titulos:'',
            pronta:false
        },
        methods:{
            adcionar: function(e){
                    e.preventDefault()
                    let taf = {
                        titulos: this.novaTarefa.titulos,
                        pronta: false
                    }
                    this.tarefas.push(tarefas);
                    this.novaTarefa.titulos = '';
            },
            remover: function(e){

            },
            modificar: function(e){
                
            }
        },
    }
})