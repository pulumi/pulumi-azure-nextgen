import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Data store.
 */
export declare class DataStore extends pulumi.CustomResource {
    /**
     * Get an existing DataStore resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataStore;
    /**
     * Returns true if the given object is an instance of DataStore.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DataStore;
    /**
     * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
     */
    readonly customerSecrets: pulumi.Output<outputs.hybriddata.v20190601.CustomerSecretResponse[] | undefined>;
    /**
     * The arm id of the data store type.
     */
    readonly dataStoreTypeId: pulumi.Output<string>;
    /**
     * A generic json used differently by each data source type.
     */
    readonly extendedProperties: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Name of the object.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Arm Id for the manager resource to which the data source is associated. This is optional.
     */
    readonly repositoryId: pulumi.Output<string | undefined>;
    /**
     * State of the data source.
     */
    readonly state: pulumi.Output<string>;
    /**
     * Type of the object.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a DataStore resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataStoreArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DataStore resource.
 */
export interface DataStoreArgs {
    /**
     * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
     */
    readonly customerSecrets?: pulumi.Input<pulumi.Input<inputs.hybriddata.v20190601.CustomerSecret>[]>;
    /**
     * The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    readonly dataManagerName: pulumi.Input<string>;
    /**
     * The data store/repository name to be created or updated.
     */
    readonly dataStoreName: pulumi.Input<string>;
    /**
     * The arm id of the data store type.
     */
    readonly dataStoreTypeId: pulumi.Input<string>;
    /**
     * A generic json used differently by each data source type.
     */
    readonly extendedProperties?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Arm Id for the manager resource to which the data source is associated. This is optional.
     */
    readonly repositoryId?: pulumi.Input<string>;
    /**
     * The Resource Group Name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * State of the data source.
     */
    readonly state: pulumi.Input<string>;
}
