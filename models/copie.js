module.exports = (sequelize, type) => {
    const Copie = sequelize.define('copies', {
        id: {type: type.INTEGER, primaryKey: true, autoIncrement: true},
        number: type.NUMBER,
        format: type.ENUM('DVD', 'BluRay', 'Digital'),
        status: type.ENUM('available', 'rented', 'lost')
    });
    return Copie;
};