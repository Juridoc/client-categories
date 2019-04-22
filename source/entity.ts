/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from './types';

/**
 * Category entity class.
 */
@RestDB.Schema.Entity('categories')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Category Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Parent category Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public parentId?: string;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Category type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration([...Object.values(Types.System), ...Object.values(Types.Common)])
  @Class.Public()
  public type!: Types.System | Types.Common;

  /**
   * Category name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public name!: string;

  /**
   * Category translations.
   */
  @RestDB.Schema.Map(String)
  @Class.Public()
  public translations?: RestDB.Map<string>;

  /**
   * Category icon.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public icon?: string;

  /**
   * Category color.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public color?: string;
}
