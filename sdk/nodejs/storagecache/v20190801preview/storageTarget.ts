// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * A storage system being cached by a Cache.
 */
export class StorageTarget extends pulumi.CustomResource {
    /**
     * Get an existing StorageTarget resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageTarget {
        return new StorageTarget(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:storagecache/v20190801preview:StorageTarget';

    /**
     * Returns true if the given object is an instance of StorageTarget.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StorageTarget {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageTarget.__pulumiType;
    }

    /**
     * Properties when clfs target.
     */
    public readonly clfs!: pulumi.Output<outputs.storagecache.v20190801preview.ClfsTargetResponse | undefined>;
    /**
     * List of cache namespace to target namespace associations.
     */
    public readonly junctions!: pulumi.Output<outputs.storagecache.v20190801preview.NamespaceJunctionResponse[] | undefined>;
    /**
     * A fully qualified URL.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties when nfs3 target.
     */
    public readonly nfs3!: pulumi.Output<outputs.storagecache.v20190801preview.Nfs3TargetResponse | undefined>;
    /**
     * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Type for storage target.
     */
    public readonly targetType!: pulumi.Output<string | undefined>;
    /**
     * Type for the storage target; Microsoft.StorageCache/Cache/StorageTarget
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Properties when unknown target.
     */
    public readonly unknown!: pulumi.Output<outputs.storagecache.v20190801preview.UnknownTargetResponse | undefined>;

    /**
     * Create a StorageTarget resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageTargetArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.cacheName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'cacheName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageTargetName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'storageTargetName'");
            }
            inputs["cacheName"] = args ? args.cacheName : undefined;
            inputs["clfs"] = args ? args.clfs : undefined;
            inputs["junctions"] = args ? args.junctions : undefined;
            inputs["nfs3"] = args ? args.nfs3 : undefined;
            inputs["provisioningState"] = args ? args.provisioningState : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["storageTargetName"] = args ? args.storageTargetName : undefined;
            inputs["targetType"] = args ? args.targetType : undefined;
            inputs["unknown"] = args ? args.unknown : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["clfs"] = undefined /*out*/;
            inputs["junctions"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["nfs3"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["targetType"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["unknown"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:storagecache/latest:StorageTarget" }, { type: "azure-nextgen:storagecache/v20191101:StorageTarget" }, { type: "azure-nextgen:storagecache/v20200301:StorageTarget" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(StorageTarget.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a StorageTarget resource.
 */
export interface StorageTargetArgs {
    /**
     * Name of cache.
     */
    readonly cacheName: pulumi.Input<string>;
    /**
     * Properties when clfs target.
     */
    readonly clfs?: pulumi.Input<inputs.storagecache.v20190801preview.ClfsTarget>;
    /**
     * List of cache namespace to target namespace associations.
     */
    readonly junctions?: pulumi.Input<pulumi.Input<inputs.storagecache.v20190801preview.NamespaceJunction>[]>;
    /**
     * Properties when nfs3 target.
     */
    readonly nfs3?: pulumi.Input<inputs.storagecache.v20190801preview.Nfs3Target>;
    /**
     * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
     */
    readonly provisioningState?: pulumi.Input<string | enums.storagecache.v20190801preview.ProvisioningStateType>;
    /**
     * Target resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Name of storage target.
     */
    readonly storageTargetName: pulumi.Input<string>;
    /**
     * Type for storage target.
     */
    readonly targetType?: pulumi.Input<string | enums.storagecache.v20190801preview.StorageTargetType>;
    /**
     * Properties when unknown target.
     */
    readonly unknown?: pulumi.Input<inputs.storagecache.v20190801preview.UnknownTarget>;
}
