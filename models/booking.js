module.exports = (sequelize, type) => {
    const Booking = sequelize.define('bookings', {
        id: {type: type.INTEGER, primaryKey: true, autoIncrement: true},
        date: type.DATE,
        member_id: {type: type.INTEGER, references: {model: 'members', key: 'id'}},
        copy_id: {type: type.INTEGER, references: {model: 'copies', key: 'id'}},
    });
    return Booking;
};