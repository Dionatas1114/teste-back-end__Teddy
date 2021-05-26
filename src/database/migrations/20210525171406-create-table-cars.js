module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cars', {
      uid: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
      },
      car_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      brand: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      year_manufacture: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      purchase_price: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      license_plate: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_uid: {
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'uid',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cars');
  },
};
