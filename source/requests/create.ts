/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Category creation request.
 */
@RestDB.Schema.Entity('categories')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * Parent category Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public parentId?: string;

  /**
   * Category type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Common))
  @Class.Public()
  public type!: Types.Common;

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
