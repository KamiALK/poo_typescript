export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
}


const driver: Driver = {
  database: "",
  password: "",
  port: 23,
  connect() {
    console.log("Connecting to database...");
    //code,
  }
}


class MySQLDriver implements Driver {
  database: string;
  password: string;
  port: number;

  constructor(database: string, password: string, port: number) {
    this.database = database;
    this.password = password;
    this.port = port;
  }
  connect(): void {
    console.log("Connecting to MySQL database...");
  }
}


class PostgreSQLDriver implements Driver {
  public database: string;
  public password: string;
  public port: number;

  constructor(database: string, password: string, port: number) {
    this.database = database;
    this.password = password;
    this.port = port;
  }
  connect(): void {
    console.log("Connecting to PostgreSQL database...");
  }
}


const mysqlDriver = new MySQLDriver("mydb", "password", 3306);
