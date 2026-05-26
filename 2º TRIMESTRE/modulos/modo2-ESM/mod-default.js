// Módulos default (padrão) devem estar sozinhos
// Ao importarmos, dispensamos {}
 const config = function(){
    return{
        online: true,
        livre: true,
        health: 100
    }
}
export default config; // ; é opcional
