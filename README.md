<div align="center">
	<h1 style="letter-spacing: 7px">ZENTINEL.JS</h1>
</div>

Zentinel.JS is a backend framework / boilerplate built on top of Express.JS, structured to mirror the Laravel directory format for a familiar setup. It includes Artisan-like commands called 'Zentinel' to streamline development tasks, offering a powerful toolset for efficient backend operations and seamless integration.

<div id="badges" align="center">
	<div align="center">
		<img src="https://media2.giphy.com/media/bGgsc5mWoryfgKBx1u/200w.gif?cid=6c09b95248puaf5xo1jzqdo1jhpx9dg9aa99b6mwgo05b22o&ep=v1_gifs_search&rid=200w.gif&ct=g" width="600" height="300"/><br><br>
	</div>
</div>

<div align="center">

![ExpressJS](https://img.shields.io/badge/Express.JS-black?style=for-the-badge&logo=express)
![NodeJS](https://img.shields.io/badge/Node.JS-black?style=for-the-badge&logo=node.js)
</div>

## Table of Contents
- Features
- Installation
- Environment Variables
- Commands
- Project Structure
- API Documentation
- Error Handling
- Validation
- Authentication
- Authorization
- Logging
- Rate Limit
- Socket / Realtime Data
- Contributing

## Features
Below are the features of Zentinel.JS:
- Builtin Authentication using JSON Web Token.
- Builtin Role-Based Access Control as Authorization.
- Configured Mongoose for MongoDB 
- Configured Sequelize for MySQL
- Configured CORS, Helmet and Securities
- Interconnected MVC Components

## Installation
To install and start developing with Zentinel, follow these steps:
Clone the repository:
```bash 
git clone https://github.com/surelle-ha/zentineljs.git
cd zentineljs
npx rimraf ./.git
```
Navigate to the directory and install the dependencies using `npm`:
```bash 
npm install
```
Set the environment variables
```bash
cp .env.example .env
# open .env and modify the environment variables (if needed)
```
Migrate Database
```bash 
npx sequelize-cli db:migrate
```
Seed Default Data
```bash 
npx sequelize-cli db:seed:all
```
Start Server
```bash
npm run dev
```

## Commands
Create Seeder File
```bash 
npx sequelize-cli seed:generate --name sample-seeder
```
Create Migration File
```bash 
npx sequelize-cli migration:generate --name sample-migration
```

## Recently Added
The Project is constantly being optimized and updated. Here are the new features I recently implemented.
- Rate Limit - a mechanism used to control the number of requests a server receives within a certain period of time. It helps to prevent abuse, ensure fair usage, and protect the server from being overwhelmed by excessive requests, which could lead to performance degradation or denial of service.
```js
/* Default Rate Limit Configuration */
const RateLimit = rateLimit({
    /* 15 minutes */
	windowMs: 15 * 60 * 1000, 

    /* Request Limit Per IP Per Window */
	limit: 100, 

    /* draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header */
	standardHeaders: 'draft-7',

    /* Disable the `X-RateLimit-*` headers */
	legacyHeaders: false, 
})
```
- Sequelize ORM - Object/Relational Mapping (ORM) framework for Node. js applications. It enables JavaScript developers to work with relational databases, including support for features such as solid transaction support, relations, read replication, and more.

## Goal Checklist
<input type="checkbox" checked disabled> Add Rate Limit <br>
<input type="checkbox" checked disabled> Integrate Mongoose ORM <br>
<input type="checkbox" checked disabled> Integrate Sequelize ORM <br>
<input type="checkbox" disabled> Add Socket.io as Native Feature <br>
<input type="checkbox" disabled> Add Logger Utility <br>
<input type="checkbox" disabled> Recreate Zentinel CLI <br>

## Developer
As a developer who constantly seeks to improve my development skills, my goal with Zentinel.JS is to create a powerful yet intuitive backend framework that simplifies the development process for fellow developers. I aim to provide a robust toolset that makes backend operations more efficient and enjoyable, ensuring that developers can focus on building great applications without getting bogged down by repetitive tasks.

I envision Zentinel.JS as a go-to framework for developers who appreciate the structure and convenience of Laravel but prefer to work within the Node.js ecosystem. By combining the best aspects of both worlds, I hope to foster a community where developers can share their experiences, contribute to the project's growth, and continuously improve their craft. Ultimately, Zentinel.JS will empower developers to create scalable, secure, and high-performance applications with ease, making backend development more accessible and enjoyable for everyone.

## Developers
Surelle-ha - [Github](https://github.com/surelle-ha)::
 _I'm currently looking for contributors to help improve project. Contact me on [Linkedin](https://www.linkedin.com/in/surellejs/), if you're interested._