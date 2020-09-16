import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Type of the Storage Target.
 */
export declare class StorageTarget extends pulumi.CustomResource {
    /**
     * Get an existing StorageTarget resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageTarget;
    /**
     * Returns true if the given object is an instance of StorageTarget.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StorageTarget;
    /**
     * Properties when targetType is clfs.
     */
    readonly clfs: pulumi.Output<outputs.storagecache.v20200301.ClfsTargetResponse | undefined>;
    /**
     * List of Cache namespace junctions to target for namespace associations.
     */
    readonly junctions: pulumi.Output<outputs.storagecache.v20200301.NamespaceJunctionResponse[] | undefined>;
    /**
     * Name of the Storage Target.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Properties when targetType is nfs3.
     */
    readonly nfs3: pulumi.Output<outputs.storagecache.v20200301.Nfs3TargetResponse | undefined>;
    /**
     * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Type of the Storage Target.
     */
    readonly targetType: pulumi.Output<string>;
    /**
     * Type of the Storage Target; Microsoft.StorageCache/Cache/StorageTarget
     */
    readonly type: pulumi.Output<string>;
    /**
     * Properties when targetType is unknown.
     */
    readonly unknown: pulumi.Output<outputs.storagecache.v20200301.UnknownTargetResponse | undefined>;
    /**
     * Create a StorageTarget resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageTargetArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a StorageTarget resource.
 */
export interface StorageTargetArgs {
    /**
     * Name of Cache. Length of name must be not greater than 80 and chars must be in list of [-0-9a-zA-Z_] char class.
     */
    readonly cacheName: pulumi.Input<string>;
    /**
     * Properties when targetType is clfs.
     */
    readonly clfs?: pulumi.Input<inputs.storagecache.v20200301.ClfsTarget>;
    /**
     * List of Cache namespace junctions to target for namespace associations.
     */
    readonly junctions?: pulumi.Input<pulumi.Input<inputs.storagecache.v20200301.NamespaceJunction>[]>;
    /**
     * Properties when targetType is nfs3.
     */
    readonly nfs3?: pulumi.Input<inputs.storagecache.v20200301.Nfs3Target>;
    /**
     * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * Target resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Storage Target. Length of name must be not greater than 80 and chars must be in list of [-0-9a-zA-Z_] char class.
     */
    readonly storageTargetName: pulumi.Input<string>;
    /**
     * Type of the Storage Target.
     */
    readonly targetType: pulumi.Input<string>;
    /**
     * Properties when targetType is unknown.
     */
    readonly unknown?: pulumi.Input<inputs.storagecache.v20200301.UnknownTarget>;
}
