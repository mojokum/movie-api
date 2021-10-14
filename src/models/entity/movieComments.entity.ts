import {
    Model,
    PrimaryKey,
    Column,
    DataType,
    Table,
    CreatedAt,
    ForeignKey,
    AutoIncrement,
    UpdatedAt,
    BelongsTo,
} from "sequelize-typescript";
// eslint-disable-next-line import/no-cycle

/**
 * Class FilmComments Model
 *
 * @export
 * @class FilmComments
 * @extends {Model<FilmComments>}
 */
@Table({ tableName: "moviecomments", freezeTableName: true, updatedAt: false})
export class MovieComments extends Model<MovieComments> {
    /**
     * id
     *
     * @type {number}
     * @memberof id
     */

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    commentId: number;

    /**
     * filmid
     *
     * @type {number}
     * @memberof FilmComments
     */

    @Column(DataType.INTEGER)
    userId: number;

    /**
     * userId
     *
     * @type {number}
     * @memberof FilmComments
     */

    @Column(DataType.INTEGER)
    movieId: number;

    /**
     * 
     * @type {string}
     * @memberof FilmComments
     */
    @Column(DataType.STRING)
    comments: string;

    /**
     * CreatedOn
     *
     * @type {Date}
     * @memberof FilmComments
     */

    @CreatedAt
    createdAt: Date;
}
