/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
/**
 * Category update request.
 */
export declare class Update extends Class.Null {
    /**
     * Parent category Id.
     */
    parentId?: string;
    /**
     * Category name.
     */
    name?: string;
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
