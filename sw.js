self.addEventListener('install',(event)=>{
    console.info('SW Adicionando nuestros archivos al cache');
    
    const wu=new Promise((resolve,reject)=>{
    try{
        setTimeout(()=>{
            const adicionandoMisArchivos='';
            const adicionalVariablesDinamicas='';
            console.warn('SWse instalo correctamente')
            resolve();
        },1000);
        self.skipWaiting();// Existe un método para provocar el salto de espera, y que lo haga automático, que es self.skipWaiting()
        }catch(error){
            reject(error.message)
        }
    })
    event.waitUntil(wu);
});
self.addEventListener('active',(event)=>{
    console.info('SW Archivos exitosamente guardados');
    //event.waitUntil(clients.claim()); //Se recomienda usar el siguiente método en el evento activate: event.waitUntil(client.claim())
})
self.addEventListener('fetch',(event)=>{
    console.info('SW Instalando');
})

self.addEventListener('sync',(event)=>{
    console.log('------------');
    console.log(event);
})

self.addEventListener('push',(event)=>{
    console.error(event);
})