// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Data store.
 */
export class DataStore extends pulumi.CustomResource {
    /**
     * Get an existing DataStore resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataStore {
        return new DataStore(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:hybriddata/v20160601:DataStore';

    /**
     * Returns true if the given object is an instance of DataStore.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataStore {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataStore.__pulumiType;
    }

    /**
     * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
     */
    public readonly customerSecrets!: pulumi.Output<outputs.hybriddata.v20160601.CustomerSecretResponse[] | undefined>;
    /**
     * The arm id of the data store type.
     */
    public readonly dataStoreTypeId!: pulumi.Output<string>;
    /**
     * A generic json used differently by each data source type.
     */
    public readonly extendedProperties!: pulumi.Output<any | undefined>;
    /**
     * Name of the object.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Arm Id for the manager resource to which the data source is associated. This is optional.
     */
    public readonly repositoryId!: pulumi.Output<string | undefined>;
    /**
     * State of the data source.
     */
    public readonly state!: pulumi.Output<string>;
    /**
     * Type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DataStore resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataStoreArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.dataManagerName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'dataManagerName'");
            }
            if ((!args || args.dataStoreName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'dataStoreName'");
            }
            if ((!args || args.dataStoreTypeId === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'dataStoreTypeId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.state === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'state'");
            }
            inputs["customerSecrets"] = args ? args.customerSecrets : undefined;
            inputs["dataManagerName"] = args ? args.dataManagerName : undefined;
            inputs["dataStoreName"] = args ? args.dataStoreName : undefined;
            inputs["dataStoreTypeId"] = args ? args.dataStoreTypeId : undefined;
            inputs["extendedProperties"] = args ? args.extendedProperties : undefined;
            inputs["repositoryId"] = args ? args.repositoryId : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["state"] = args ? args.state : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["customerSecrets"] = undefined /*out*/;
            inputs["dataStoreTypeId"] = undefined /*out*/;
            inputs["extendedProperties"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["repositoryId"] = undefined /*out*/;
            inputs["state"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:hybriddata/latest:DataStore" }, { type: "azure-nextgen:hybriddata/v20190601:DataStore" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(DataStore.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a DataStore resource.
 */
export interface DataStoreArgs {
    /**
     * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
     */
    readonly customerSecrets?: pulumi.Input<pulumi.Input<inputs.hybriddata.v20160601.CustomerSecret>[]>;
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
    readonly extendedProperties?: any;
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
    readonly state: pulumi.Input<enums.hybriddata.v20160601.State>;
}
