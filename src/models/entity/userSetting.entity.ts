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
  
  @Table({ tableName: 'userSettings', freezeTableName: true })
  export class UserSetting extends Model<UserSetting> {
    
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    settingId: number;
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    userId: string;
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    genreId: number;
  
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
  