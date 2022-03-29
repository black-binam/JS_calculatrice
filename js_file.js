
window.addEventListener('load', () =>{
    var btn = document.getElementsByTagName('button')
    array_btn = Array.from(btn)
    

    function operation(touche){
       
        clearInterval(var_clignotant)

        if(touche.type == 'click'){
            referer = touche.target.innerText
        }else if (touche.type == 'keydown'){
            referer = touche.key
        }
        
        value_on_screen += referer // value to play on the screen
        
        
        ecran.innerText = value_on_screen      // value is played on the screen
        memory +=referer 

        if(referer == 'C'){
            ecran.innerText=''
            value_on_screen =''
            memory =''
            store_value =[]
            var_clignotant()
            

            
        }

        else if (referer === '+'){
            sign ='+';
            store_value.push(memory.slice(0,-1))
            store_value.push(sign)
            memory =''

            console.log(store_value)

        }else  if (referer == '-'){
            sign ='-';
            store_value.push(memory.slice(0,-1))
            store_value.push(sign)
            memory =''

            console.log(store_value)

        }else  if (referer == 'x'){
            sign ='x';
            store_value.push(memory.slice(0,-1))
            store_value.push(sign)
            memory =''

            console.log(store_value)

        }else  if (referer == '/'){
            sign ='/';
            store_value.push(memory.slice(0,-1))
            store_value.push(sign)
            memory =''

            console.log(store_value)

        }else  if (referer == '=' || referer == 'Enter'){
            if (referer == 'Enter'){
                store_value.push(memory.split('Enter')[0])
                value_on_screen =''

            }else { store_value.push(memory.slice(0,-1)) }
            value_on_screen =''
            memory =''
            calcul = Number(store_value[0])

            for(i=0; i<store_value.length; i++){
                //------------- we do an addition-------------------------------
                if(store_value[i] =='+'){

                    // we first check if there is 'x' or '/' sign after the '+' sign 
                    if(store_value[i+2] == 'x' ){
                        calcul += Number(store_value[i+1]) * Number(store_value[i+3])

                    }else if(store_value[i+2] == '/'){
                        calcul += Number(store_value[i+1]) / Number(store_value[i+3])

                    // if there is no 'x' or '/' sign we print the the result
                    } else {calcul += Number(store_value[i+1])}


                // -------------------substraction---------------------------------
                }else if(store_value[i] =='-'){
                    /*console.log(store_value.slice(i+1))*/
                    store_value_sliced = store_value.slice(i+1)
                    
                    // we first check if there is 'x' sign after the '+' sign
                    if(store_value[i+2] == 'x'){
                        op =Number(store_value[i+1])
                        
                        for (n =0; n<store_value_sliced.length; n++) {
                            if (store_value_sliced[n]  == 'x'){
                                op *=Number(store_value_sliced[n+1])
                                /*console.log('n+1 stor', store_value_sliced[n+1])*/
                            }
                        }
                        calcul -=op

                    }else if(store_value[i+2] == '/'){
                        op =Number(store_value[i+1])
                        
                        for (n =0; n<store_value_sliced.length; n++) {
                            if (store_value_sliced[n]  == '/'){
                                op /=Number(store_value_sliced[n+1])
                                /*console.log('n+1 stor', store_value_sliced[n+1])*/
                            }
                        }
                        calcul -=op
                    // if there is no 'x' or '/' sign we print the the result
                    }else {calcul -= Number(store_value[i+1])}

                }else if(store_value[i] =='x' & store_value[store_value.length] == undefined
                & store_value[i-2] == undefined){
                    store_value_sliced = store_value
                    calcul =0
                    op = store_value_sliced[0]

                    for (n =0; n<store_value_sliced.length; n++) {

                        if (store_value_sliced[n]  == 'x'){
                            op *=Number(store_value_sliced[n+1])
                            /*console.log('n+1 stor', store_value_sliced[n+1])*/
                        }
                    }
                    calcul +=op

                }else if(store_value[i] =='/' & store_value[store_value.length] == undefined
                & store_value[i-2] == undefined){
                    store_value_sliced = store_value
                    calcul =0
                    op = store_value_sliced[0]

                    for (n =0; n<store_value_sliced.length; n++) {

                        if (store_value_sliced[n]  == '/'){
                            op /=Number(store_value_sliced[n+1])
                            /*console.log('n+1 stor', store_value_sliced[n+1])*/
                        }
                    }
                    calcul +=op

                }

                

            }
            store_value = []
            
            
            ecran.innerText = calcul
            
            
            
           
        }

        
    }

    document.addEventListener('keydown', operation)



    array_btn.forEach(touche  =>{
        ecran = document.querySelector('#ecran')
        value_on_screen =''
        memory = ''
        sign = ''
        
        store_value = [] 

        // un ajoute un addlistenr pour capter
        //le contenue de la touche
        touche.addEventListener('click',operation )
    
    });

    ecran = document.querySelector('#ecran')

    function clignotant(){

        setTimeout(function(){
            ecran.innerText = '|'
            console.log('p')
        },900, ecran.innerText = '')

    }
    
     var var_clignotant =setInterval( ()=>{
         clignotant()
     },1500)

    
    
        
    
    
    


    

    
})