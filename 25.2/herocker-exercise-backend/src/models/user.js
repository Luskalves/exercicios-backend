const User = (sequelize, Datatypes) => {
  const User = sequelize.define('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Datatypes.INTEGER,
    },
    firstName: {
      type: Datatypes.STRING,
    },
    lastName: {
      type: Datatypes.STRING,
    },
    email: {
      type: Datatypes.STRING,
    },
  },
  { timestamps: false }
  )

  return User;
};

module.exports = User;