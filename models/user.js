module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        aqi: {
            type: DataTypes.STRING,
        },
        location: {
            type: DataTypes.STRING,
        },
        emotion: {
            type: DataTypes.STRING,
        },
        breathe: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        message: {
            type: DataTypes.TEXT,
        }
    });

    return User;
};
