const server = require('./app')
const PORT = 3001;
const { conn } = require('./DB_connection');

conn.sync({alter: true}).then(() => {
   
   server.listen(PORT, () => {    
      console.log(`Server listening on port: ${PORT}`);
   });
})
