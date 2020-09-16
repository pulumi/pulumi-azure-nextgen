import * as pulumi from "@pulumi/pulumi";
export declare function listConfigurationStoreKeyValue(args: ListConfigurationStoreKeyValueArgs, opts?: pulumi.InvokeOptions): Promise<ListConfigurationStoreKeyValueResult>;
export interface ListConfigurationStoreKeyValueArgs {
    /**
     * The name of the configuration store.
     */
    readonly configStoreName: string;
    /**
     * The key to retrieve.
     */
    readonly key: string;
    /**
     * The label of the key.
     */
    readonly label?: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * The result of a request to retrieve a key-value from the specified configuration store.
 */
export interface ListConfigurationStoreKeyValueResult {
    /**
     * The content type of the key-value's value.
     * Providing a proper content-type can enable transformations of values when they are retrieved by applications.
     */
    readonly contentType: string;
    /**
     * An ETag indicating the state of a key-value within a configuration store.
     */
    readonly eTag: string;
    /**
     * The primary identifier of a key-value.
     * The key is used in unison with the label to uniquely identify a key-value.
     */
    readonly key: string;
    /**
     * A value used to group key-values.
     * The label is used in unison with the key to uniquely identify a key-value.
     */
    readonly label: string;
    /**
     * The last time a modifying operation was performed on the given key-value.
     */
    readonly lastModified: string;
    /**
     * A value indicating whether the key-value is locked.
     * A locked key-value may not be modified until it is unlocked.
     */
    readonly locked: boolean;
    /**
     * A dictionary of tags that can help identify what a key-value may be applicable for.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The value of the key-value.
     */
    readonly value: string;
}
