import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The lock information.
 */
export declare class ManagementLockAtResourceLevel extends pulumi.CustomResource {
    /**
     * Get an existing ManagementLockAtResourceLevel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagementLockAtResourceLevel;
    /**
     * Returns true if the given object is an instance of ManagementLockAtResourceLevel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ManagementLockAtResourceLevel;
    /**
     * The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can't modify or delete it.
     */
    readonly level: pulumi.Output<string>;
    /**
     * The name of the lock.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Notes about the lock. Maximum of 512 characters.
     */
    readonly notes: pulumi.Output<string | undefined>;
    /**
     * The owners of the lock.
     */
    readonly owners: pulumi.Output<outputs.authorization.v20160901.ManagementLockOwnerResponse[] | undefined>;
    /**
     * The resource type of the lock - Microsoft.Authorization/locks.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ManagementLockAtResourceLevel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagementLockAtResourceLevelArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ManagementLockAtResourceLevel resource.
 */
export interface ManagementLockAtResourceLevelArgs {
    /**
     * The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can't modify or delete it.
     */
    readonly level: pulumi.Input<string>;
    /**
     * The name of lock. The lock name can be a maximum of 260 characters. It cannot contain <, > %, &, :, \, ?, /, or any control characters.
     */
    readonly lockName: pulumi.Input<string>;
    /**
     * Notes about the lock. Maximum of 512 characters.
     */
    readonly notes?: pulumi.Input<string>;
    /**
     * The owners of the lock.
     */
    readonly owners?: pulumi.Input<pulumi.Input<inputs.authorization.v20160901.ManagementLockOwner>[]>;
    /**
     * The parent resource identity.
     */
    readonly parentResourcePath: pulumi.Input<string>;
    /**
     * The name of the resource group containing the resource to lock.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource to lock.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * The resource provider namespace of the resource to lock.
     */
    readonly resourceProviderNamespace: pulumi.Input<string>;
    /**
     * The resource type of the resource to lock.
     */
    readonly resourceType: pulumi.Input<string>;
}
