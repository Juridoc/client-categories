/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Types from '../types';
/**
 * Category creation request.
 */
export declare class Create extends Class.Null {
    /**
     * Parent category Id.
     */
    parentId?: string;
    /**
     * Category type.
     */
    type: Types.Common;
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
