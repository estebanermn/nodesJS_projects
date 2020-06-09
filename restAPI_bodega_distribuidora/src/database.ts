import sql, {ConnectionPool} from 'mssql/msnodesqlv8';

const userName = 'LUCKYSAC\emedina';
const pass = '';
const serverName = '.';
const dbName = 'BodegaDistribuidoraDB';


var config = {
    server: serverName,
    database: dbName,
    authentication: {
      type: 'default',
      options: {
        userName: userName,
        password: pass,
      },
    },
    options: {
      enableArithAbort: true, 
      encrypt: false,
      trustedConnection: true
    },
  };

  

export const connection = new sql.ConnectionPool(config).connect()
        .then((connectionPool: ConnectionPool)=>{

            if(connectionPool.connected)
            console.log('Connection has been established successfully.');
        })
        .catch((err: Error)=>{
            console.error('Unable to connect to the database: ', err);
        });

    







