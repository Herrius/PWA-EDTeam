const CACHE_NAME_CORE='cache-v1';
const CACHE_FILE_CORE=[
    'src/images/icons/icon-144x144.png',
    'src/css/app.css',
    'src/images/computer.jpg',
    'src/js/app.js',
    'index.html',
    "/"
];
const CACHE_NAME_INMUTABLE='inmutable-v1';
const CACHE_FILE_INMUTABLE=[
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://code.getmdl.io/1.3.0/material.brown-orange.min.css',
    'https://code.getmdl.io/1.3.0/material.min.js',
    'http://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
    'https://unpkg.com/pwacompat',
];
self.addEventListener('install',(event)=>{
    // Unidad3
    const guardadoCache=caches.open(CACHE_NAME_CORE)
        .then(cache=>cache.addAll(CACHE_FILE_CORE))
        .catch(err=>console.error(err.message));
    const guardadoCacheInmutable=caches.open(CACHE_NAME_INMUTABLE)
        .then(cache=>cache.addAll(CACHE_FILE_INMUTABLE))
        .catch(err=>console.error(err.message));
        self.skipWaiting();
        event.waitUntil(Promise.all[guardadoCache,guardadoCacheInmutable]);
        
    //Unidad 2
    // console.info('SW Adicionando nuestros archivos al cache');
    
    // const wu=new Promise((resolve,reject)=>{
    // try{
    //     setTimeout(()=>{
    //         const adicionandoMisArchivos='';
    //         const adicionalVariablesDinamicas='';
    //         console.warn('SWse instalo correctamente')
    //         resolve();
    //     },1000);
    //     self.skipWaiting();// Existe un método para provocar el salto de espera, y que lo haga automático, que es self.skipWaiting()
    //     }catch(error){
    //         reject(error.message)
    //     }
    // })
    // event.waitUntil(wu);
});
self.addEventListener('active',(event)=>{
    console.info('SW Archivos exitosamente guardados');
    //event.waitUntil(clients.claim()); //Se recomienda usar el siguiente método en el evento activate: event.waitUntil(client.claim())
})
self.addEventListener('fetch',(event)=>{
    if(!(event.request.url.indexOf('http')===0)){
        return;
    }
    const cacheLuegoRed=caches.open(CACHE_NAME)
        .then(response=>{
            cache.put(event.request,response.clone())
            return response;
        });
    event.respondWith(soloCache);
})

self.addEventListener('sync',(event)=>{
    console.log('------------');
    console.log(event);
})

self.addEventListener('push',(event)=>{
    console.error(event);
})