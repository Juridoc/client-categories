/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Types from './types';
/**
 * Category entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Category Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Parent category Id.
     */
    parentId?: string;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Category type.
     */
    type: Types.System | Types.Common;
    /**
     * Category name.
     */
    name: string;
    /**
     * Category translations.
     */
    translations?: RestDB.Map<string>;
    /**
     * Category icon.
     */
    icon?: string;
    /**
     * Category color.
     */
    color?: string;
}
