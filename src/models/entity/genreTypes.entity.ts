import { Model, PrimaryKey, Column, DataType, Table, CreatedAt, UpdatedAt } from "sequelize-typescript";

/**
 * Class Category Model
 *
 * @export
 * @class Category
 * @extends {Model<Category>}
 */
@Table({ tableName: "genreTypes", freezeTableName: true, timestamps: true })
export class GenreType extends Model<GenreType> {
    /**
     * GenreTypeid
     *
     * @type {number}
     * @memberof GenreType
     */

    @PrimaryKey
    @Column(DataType.INTEGER)
    genreId: number;

    /**
     * type
     *
     * @type {string}
     * @memberof GenreType
     */

    @Column(DataType.STRING)
    type: string;

    /**
     * isactive
     *
     * @type {boolean}
     * @memberof GenreType
     */

    @Column(DataType.BOOLEAN)
    isActive: boolean;

    /**
     * createdby
     *
     * @type {string}
     * @memberof GenreType
     */

    @Column(DataType.STRING)
    createdBy: string;

    /**
     * createdon
     *
     * @type {Date}
     * @memberof GenreType
     */
    @CreatedAt
    createdAt: Date;

    /**
     * updatedby
     *
     * @type {string}
     * @memberof GenreType
     */

    @Column(DataType.STRING)
    updatedBy: string;

    /**
     * updatedon
     *
     * @type {Date}
     * @memberof GenreType
     */
    @UpdatedAt
    updatedAt: Date;
}
