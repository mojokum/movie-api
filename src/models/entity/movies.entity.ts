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
  
  @Table({ tableName: 'movies', freezeTableName: true })
  export class Movie extends Model<Movie> {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    movieId: number;
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    name: string;
  
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    genre: number;
  
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    releaseDate: string;
    
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

    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    upVote: number;

    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    downVote: number;

  }
  