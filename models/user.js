module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emotion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        breathe: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        message: {
            type: DataTypes.TEXT,
        }
    });

    return User;
};
