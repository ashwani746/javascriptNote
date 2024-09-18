const obj = [
   {
    key: 'Sample 1',
    
    data: 'Data1',
    
    },
    {
    
    key: 'Sample 1',
    
    data: 'Data1',
    
    },
    {
    
    key: 'Sample 2',
    
    data: 'Data2',
    
    },
    {
    
    key: 'Sample 1',
    
    data: 'Data1',
    
    },{
    
    key: 'Sample 3',
    
    data: 'Data1',
    
    },{
    
    key: 'Sample 4',
    
    data: 'Datal',
    }
]

const output = {};

obj.forEach(item =>{
   if (output[item.key])
   {
    // key is available
    output[item.key].push[item];
   }else{
    output[item.key]=[item];
   }
})
console.log(output)