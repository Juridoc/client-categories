/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Category update request.
 */
@RestDB.Schema.Entity('categories/{id}')
@Class.Describe()
export class Update extends Class.Null {
  /**
   * Parent category Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public parentId?: string;

  /**
   * Category name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public name?: string;

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
