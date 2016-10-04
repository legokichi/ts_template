declare global {
    interface Window {
        initialize: (a: string)=> void;
    }
}


export function main(){
    window.initialize = ()=>{

    };
}