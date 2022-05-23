let n = 1;
let m = 1;
let stringOut = "";
while(n<6){
    if (n == 1) {
        stringOut +=`¡Bienvenido, ${n}!`;
    }
    else{
        stringOut +=`¡Bienvenido, ${n}! Te presento`;
        while(m<n && n>1){
            if (n==2) {
                stringOut +=` a ${m}.`
            }
            else if(n==3) {
                if(m==(n-1)){
                    stringOut +=` y a ${m}.`
                }
                else{
                    stringOut +=` a ${m}`
                }
            }
            else{
                if (m == (n-2)){
                    stringOut +=` a ${m}`
                }
                else if(m == (n-1)){
                    stringOut +=` y a ${m}.`
                }
                else{
                    stringOut +=` a ${m},`
                }
            }
            m ++;
        }
    }
    console.log(stringOut);
    stringOut = "";
    n++;
    m=1;
}