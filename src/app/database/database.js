const {createPool} =require('mysql');


const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'client_db',
    connectionLimit: 10
})

pool.query('select * from registration', (err,result, fields)=>{
if(err){
    return console.log(err);
}
return console.log(result);


})


