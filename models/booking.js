module.exports = (sequelize, type) => {
    const Booking = sequelize.define('bookings', {
        id: {type: type.INTEGER, primaryKey: true, autoIncrement: true},
        date: type.DATE,
        member_id: type.INTEGER,
        copy_id: type.INTEGER,
    });
    return Booking;
};