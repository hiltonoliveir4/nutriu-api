import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database"; // Certifique-se de que o caminho está correto

// Definição dos atributos do usuário
interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "client" | "nutritionist";
  createdAt?: Date;
  updatedAt?: Date;
}

// Permite que `id` seja opcional na criação
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

// Definição do modelo User
class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;
  public role!: "admin" | "client" | "nutritionist";
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicialização do modelo no Sequelize
User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        len: {
          args: [3, 255],
          msg: "Name must have at least 3 characters",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Invalid email format",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "client", "nutritionist"),
      validate: {
        isIn: {
          args: [["admin", "client", "nutritionist"]],
          msg: "Invalid role",
        },
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "users",
    defaultScope: {
      attributes: { exclude: ["password"] },
    },
    scopes: {
      withPassword: {
        attributes: { include: ["password"] },
      },
    },
  }
);

export default User;
