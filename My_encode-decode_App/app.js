function solve(){
    let btnEncode = document.getElementById('btnEncode');
    let btnDecode = document.getElementById('btnDecode');    
    btnEncode.addEventListener('click', encode);
    btnDecode.addEventListener('click', decode);
    

    function encode(){    
        let toEncode = document.getElementById('encode').value;    
        let resultFromEncode = document.getElementById('textArea');
        
        for(let i =0; i < 15; i++){
            toEncode = btoa(toEncode);        
        }
        resultFromEncode.textContent = toEncode;    
    }
    
    function decode(){
        let toDecode = document.getElementById('textAreaDecode').value;
        let resultFromDecode = document.getElementById('decodingResult');
        for(let i = 15; i > 0; i--){
            toDecode = atob(toDecode);
            
        }
    
        resultFromDecode.textContent = toDecode;
        resultFromDecode.style.display = 'inline';
        
    }
}