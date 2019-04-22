/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Categories mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Create a new category based on the specified creation request.
     * @param request Category creation request.
     * @returns Returns a promise to get the category Id.
     * @throws Throws an error when the category wasn't created.
     */
    create(request: Requests.Create): Promise<string>;
    /**
     * Loads the category that corresponds to the specified category Id.
     * @param id Category Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the category entity.
     * @throws Throws an error when the category wasn't loaded.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * Update the category that corresponds to the specified category Id based on the given update request.
     * @param id Category Id.
     * @param request Category update request.
     * @returns Returns a promise to get true when the category was updated, false otherwise.
     */
    modify(id: string, request: Requests.Update): Promise<boolean>;
    /**
     * List all categories that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the category list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all categories that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of categories or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
    /**
     * Delete the category that corresponds to the specified category Id.
     * @param id Category Id.
     * @returns Returns a promise to get true when the category was deleted, false otherwise.
     */
    remove(id: string): Promise<boolean>;
}
