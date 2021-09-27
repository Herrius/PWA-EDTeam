self.addEventListener('install',(event)=>{
    console.info('SW Install....');
})
self.addEventListener('active',(event)=>{
    console.info('SW Activete....');
})
self.addEventListener('fetch',(event)=>{
    console.info('SW Fetch....');
})