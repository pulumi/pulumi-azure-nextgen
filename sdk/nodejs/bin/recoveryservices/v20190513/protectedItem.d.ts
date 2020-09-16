import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Base class for backup items.
 */
export declare class ProtectedItem extends pulumi.CustomResource {
    /**
     * Get an existing ProtectedItem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ProtectedItem;
    /**
     * Returns true if the given object is an instance of ProtectedItem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ProtectedItem;
    /**
     * Optional ETag.
     */
    readonly eTag: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name associated with the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * ProtectedItemResource properties
     */
    readonly properties: pulumi.Output<outputs.recoveryservices.v20190513.ProtectedItemResponse>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ProtectedItem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProtectedItemArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ProtectedItem resource.
 */
export interface ProtectedItemArgs {
    /**
     * Container name associated with the backup item.
     */
    readonly containerName: pulumi.Input<string>;
    /**
     * Optional ETag.
     */
    readonly eTag?: pulumi.Input<string>;
    /**
     * Fabric name associated with the backup item.
     */
    readonly fabricName: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * ProtectedItemResource properties
     */
    readonly properties?: pulumi.Input<inputs.recoveryservices.v20190513.ProtectedItem>;
    /**
     * Item name to be backed up.
     */
    readonly protectedItemName: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the recovery services vault.
     */
    readonly vaultName: pulumi.Input<string>;
}
