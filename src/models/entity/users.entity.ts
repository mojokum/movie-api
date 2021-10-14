import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    CreatedAt,
    UpdatedAt,
    HasMany,
    AutoIncrement,
  } from 'sequelize-typescript';
  
  @Table({ tableName: 'users', freezeTableName: true })
  export class Users extends Model<Users> {
    
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    userId: number;
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    userName: string;

    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    password: string;
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    userEmail: string;
  
    @Column({
      type: DataType.BOOLEAN,
      allowNull: false,
    })
    isActive: boolean;
    
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    createdBy: string;
  
    @CreatedAt
    createdAt: string;
  
    @Column({
      type: DataType.STRING,
      allowNull: true,
    })
    updatedBy: string;
  
    @UpdatedAt
    updatedAt: string;
  }
  