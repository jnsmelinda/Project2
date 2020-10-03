module.exports = function (sequelize, DataTypes) {
    const Feedback = sequelize.define('Feedback', {
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
        message: {
            type: DataTypes.TEXT,
        }
    });

    return Feedback;
};
