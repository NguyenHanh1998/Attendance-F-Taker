# ATTENDANCE F-TAKER

## First install

### Require:
    Nodejs: v10.16.3
    NPM or yarn
    Mysql

### Init
```
    npm install
```

### Config env

    Edit env development in config/config.json with your configuration
    
### Migrate database

Run migration database script with configuration with this command
```
    sequelize db:migrate
```
Run db seed for sample tokens with command
```
    sequelize db:seed:all
```
## Start server
```
    npm run start
```
