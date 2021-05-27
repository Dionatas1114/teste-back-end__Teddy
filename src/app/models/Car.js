import Sequelize, { Model } from 'sequelize';

class Car extends Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
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
      },
      {
        sequelize,
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_uid',
    });
  }
}

export default Car;
