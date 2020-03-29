# Be The Hero
    An web/mobile application to help people help ONGs
## :gear: Backend
    The backend was made in Node.js + Express, integrating with an SQLite database.
### :wrench: Controllers and Functions
- **Incident**
  - **Index** (To list all incidents)
  - **Create** (To create an incident)
  - **Delete** (To drop an incident)
- **ONG**
  - **Index** (To list all ONGs)
  - **Create** (To register and ONG)
- **Profile**
  - **Index** (To list all incidents from an ONG)
- **Session**
  - **Create** (To make logon for an ONG)
### :card_file_box: Database
     The database was written with Knex 
#### :card_index_dividers: Tables
  - **ongs** *(id, name, email, whatsapp, city, uf)*
  - **incidents** *(id, title, description, value, ong_id(foreign key))*
### 	:package: Packages
- **Express** *(To make things more easier)*
- **Knex** *(To make an connection to the database using migrations)*
- **Sqlite3** *(To make the Database)*
- **Cors** *(Middleware that can be used to enable CORS with various options)*
- **Cross-env** *(To use "global" variables in node)*
- **Celebrate** *(To validate user-data in backend)*
- **Jest** *(To make tests in backend functions)*
- **Supertest** *(To make a specific database to tests)*
- **Nodemon** *(To start the server when some file are edited)*

## 	:joystick: Frontend
     The frontend was made using React
### 	:package: Packages
- **React** *(To make the things more easier)*
- **React-Icons** *(To use Feather icons)*
- **React-Router-Dom** *(To make routes in a SPA)*
- **Axios** *(To connect frontend and backend)*
- **Node-Sass** *(To style everithing)*
## :iphone: Mobile App
     The mobile app was made using React Native and Expo
### 	:package: Packages
- **React-Native** *(To make the things more easier)*
- **React-Navigation** *(To make app pages)*
- **Axios** *(To connect frontend and backend)*
- **expo-mail-composer** *(To open an send-email form from click)*
- **Intl** *(To format numbers)*
