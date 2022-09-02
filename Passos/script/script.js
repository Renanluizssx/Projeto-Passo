function contar() {
    let init = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    if (init.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados')
    }
    else {
        res.innerHTML = 'Contando:<br>'
        let i = Number(init.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p<=0) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            for(let c=i; c<= f; c+=p) {
                // \u permite colocar emojis pelo unicode
                res.innerHTML += `${c} \u{1f3c3}`
            }
        }   //c -= p é a simplificação de c = c - p
            else {
                for(let c = i; c>= f; c-=p) {
                    res.innerHTML += `${c} \u{1f3c3}`
                }
    
        }
        
        
        }
        // numero + string automaticamente ele concatena
        // c+=p simplificando para c = c + p
        // \u permite colocar emojis pelo unicode
        

    }
