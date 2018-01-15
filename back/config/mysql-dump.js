var mysqlDump = require('mysqldump');
var schedule = require('node-schedule');

exports.mysqlBackUp = function(){
    let now = new Date();
    let mes = now.getMonth();
    mes++;
    var fecha = now.getDate()+'-'+mes+'-'+now.getFullYear()+' '+now.getHours()+' '+now.getMinutes(); 
    var j = schedule.scheduleJob({hour: 0, minute: 0, second: 0}, function(){
                                // OTRA FORMA DE ESCRIBIRLO
                                // (* * * * * *)
                                //  * * * * * *
                                //  ┬ ┬ ┬ ┬ ┬ ┬
                                //  │ │ │ │ │ |
                                //  │ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
                                //  │ │ │ │ └───── month (1 - 12)
                                //  │ │ │ └────────── day of month (1 - 31)
                                //  │ │ └─────────────── hour (0 - 23)
                                //  │ └──────────────────── minute (0 - 59)
                                //  └───────────────────────── second (0 - 59, OPTIONAL)
        console.log("entrando al schedule");
        mysqlDump({
                host: 'localhost',
                user: 'root',
                password: 'soporteit',
                database: 'MrBreak',
                tables:['Ventas','LineasVenta'], // only these tables; default all tables
                // getDump: false,//BOOLEAN Return dump as a raw data on callback instead of create file Default: false;
                // where: {'players': 'id < 1000'}, // Only test players with id < 1000
                dest:'./mysqlBackups/MrBreakBackup '+fecha+'.sql' // destination file 
            },function(err){

            });
        });
}

