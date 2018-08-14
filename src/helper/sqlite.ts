import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { Injectable } from '@angular/core';


@Injectable()
export class SqliteHelper{

     dbInstance :any;


    constructor(private sqlite: SQLite){

    }

    createDataBase(){
            this.dbInstance = this.sqlite.create({
              name: 'foodhunter.db',
              location: 'default',
            });
    }
}