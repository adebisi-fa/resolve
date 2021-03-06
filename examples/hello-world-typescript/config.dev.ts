import { declareRuntimeEnv } from 'resolve-scripts'

const devConfig = {
  target: 'local',
  port: declareRuntimeEnv('PORT', '3000'),
  mode: 'development',
  rootPath: '',
  staticPath: 'static',
  staticDir: 'static',
  distDir: 'dist',
  readModelConnectors: {
    default: {
      module: 'resolve-readmodel-lite',
      options: {
        databaseFile: 'data/read-models.db'
      }
    }
    /*default: {
      module: 'resolve-readmodel-mysql',
      options: {
        host: 'localhost',
        port: 3306,
        user: 'customUser',
        password: 'customPassword',
        database: 'customDatabaseName'
      }
    }*/
  },
  eventstoreAdapter: {
    module: 'resolve-eventstore-lite',
    options: {
      databaseFile: 'data/storage.db',
      secretsFile: 'data/secrets.db'
    }
  },
  schedulers: {
    scheduler: {
      adapter: {
        module: 'resolve-scheduler-local',
        options: {}
      },
      connectorName: 'default'
    }
  },
  /*{
    module: 'resolve-eventstore-mysql',
    options: {
      host: 'localhost',
      port: 3306,
      user: 'customUser',
      password: 'customPassword',
      database: 'customDatabaseName',
      eventsTableName: 'customTableName',
      secretsDatabase: 'customSecretsDatabaseName',
      secretsTableName: 'customSecretsTableName'
    }
  },*/
  subscribeAdapter: {
    module: 'resolve-subscribe-socket.io',
    options: {}
  },
  /*{
    module: 'resolve-subscribe-mqtt',
    options: {}
  },*/
  jwtCookie: {
    name: 'jwt',
    maxAge: 31536000000
  }
}

export default devConfig
