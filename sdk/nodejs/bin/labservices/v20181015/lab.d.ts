import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * Represents a lab.
 */
export declare class Lab extends pulumi.CustomResource {
    /**
     * Get an existing Lab resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Lab;
    /**
     * Returns true if the given object is an instance of Lab.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Lab;
    /**
     * Object id of the user that created the lab.
     */
    readonly createdByObjectId: pulumi.Output<string>;
    /**
     * Lab creator name
     */
    readonly createdByUserPrincipalName: pulumi.Output<string>;
    /**
     * Creation date for the lab
     */
    readonly createdDate: pulumi.Output<string>;
    /**
     * Invitation code that users can use to join a lab.
     */
    readonly invitationCode: pulumi.Output<string>;
    /**
     * The details of the latest operation. ex: status, error
     */
    readonly latestOperationResult: pulumi.Output<outputs.labservices.v20181015.LatestOperationResultResponse>;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Maximum number of users allowed in the lab.
     */
    readonly maxUsersInLab: pulumi.Output<number | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * The tags of the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: pulumi.Output<string | undefined>;
    /**
     * Maximum duration a user can use an environment for in the lab.
     */
    readonly usageQuota: pulumi.Output<string | undefined>;
    /**
     * Lab user access mode (open to all vs. restricted to those listed on the lab).
     */
    readonly userAccessMode: pulumi.Output<string | undefined>;
    /**
     * Maximum value MaxUsersInLab can be set to, as specified by the service
     */
    readonly userQuota: pulumi.Output<number>;
    /**
     * Create a Lab resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LabArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Lab resource.
 */
export interface LabArgs {
    /**
     * The name of the lab Account.
     */
    readonly labAccountName: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    readonly labName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Maximum number of users allowed in the lab.
     */
    readonly maxUsersInLab?: pulumi.Input<number>;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier?: pulumi.Input<string>;
    /**
     * Maximum duration a user can use an environment for in the lab.
     */
    readonly usageQuota?: pulumi.Input<string>;
    /**
     * Lab user access mode (open to all vs. restricted to those listed on the lab).
     */
    readonly userAccessMode?: pulumi.Input<string>;
}
