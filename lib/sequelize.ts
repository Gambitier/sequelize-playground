import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
	dialect: 'sqlite',
	database: 'movies',
	storage: '../database.sqlite',
	models: [__dirname + '/database/models'],
});
