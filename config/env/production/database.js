// path: ./config/env/production/database.js

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("postgres://tkaemioinnuzbd:b89fd74c4b60e24cbd00850ac61bea88a2b955971529fc79b01f91bb13d6d1c1@ec2-34-236-103-63.compute-1.amazonaws.com:5432/d8om5u1n9sb37q"));
  
  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  }
};
