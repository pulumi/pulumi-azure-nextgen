import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Represents an environment instance
 */
export declare class Environment extends pulumi.CustomResource {
    /**
     * Get an existing Environment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Environment;
    /**
     * Returns true if the given object is an instance of Environment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Environment;
    /**
     * The name or email address of the user who has claimed the environment
     */
    readonly claimedByUserName: pulumi.Output<string>;
    /**
     * The AAD object Id of the user who has claimed the environment
     */
    readonly claimedByUserObjectId: pulumi.Output<string>;
    /**
     * The user principal Id of the user who has claimed the environment
     */
    readonly claimedByUserPrincipalId: pulumi.Output<string>;
    /**
     * Is the environment claimed or not
     */
    readonly isClaimed: pulumi.Output<boolean>;
    /**
     * Last known power state of the environment
     */
    readonly lastKnownPowerState: pulumi.Output<string>;
    /**
     * The details of the latest operation. ex: status, error
     */
    readonly latestOperationResult: pulumi.Output<outputs.labservices.v20181015.LatestOperationResultResponse>;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Network details of the environment
     */
    readonly networkInterface: pulumi.Output<outputs.labservices.v20181015.NetworkInterfaceResponse>;
    /**
     * When the password was last reset on the environment.
     */
    readonly passwordLastReset: pulumi.Output<string>;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * The set of a VM and the setting id it was created for
     */
    readonly resourceSets: pulumi.Output<outputs.labservices.v20181015.ResourceSetResponse | undefined>;
    /**
     * The tags of the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * How long the environment has been used by a lab user
     */
    readonly totalUsage: pulumi.Output<string>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: pulumi.Output<string | undefined>;
    /**
     * Create a Environment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnvironmentArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Environment resource.
 */
export interface EnvironmentArgs {
    /**
     * The name of the environment.
     */
    readonly environmentName: pulumi.Input<string>;
    /**
     * The name of the environment Setting.
     */
    readonly environmentSettingName: pulumi.Input<string>;
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
     * The provisioning status of the resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The set of a VM and the setting id it was created for
     */
    readonly resourceSets?: pulumi.Input<inputs.labservices.v20181015.ResourceSet>;
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
}
