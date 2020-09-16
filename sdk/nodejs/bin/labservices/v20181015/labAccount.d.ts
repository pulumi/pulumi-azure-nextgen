import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * Represents a lab account.
 */
export declare class LabAccount extends pulumi.CustomResource {
    /**
     * Get an existing LabAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LabAccount;
    /**
     * Returns true if the given object is an instance of LabAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LabAccount;
    /**
     * Represents if region selection is enabled
     */
    readonly enabledRegionSelection: pulumi.Output<boolean | undefined>;
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
     * The provisioning status of the resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Represents the size configuration under the lab account
     */
    readonly sizeConfiguration: pulumi.Output<outputs.labservices.v20181015.SizeConfigurationPropertiesResponse>;
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
     * Create a LabAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LabAccountArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a LabAccount resource.
 */
export interface LabAccountArgs {
    /**
     * Represents if region selection is enabled
     */
    readonly enabledRegionSelection?: pulumi.Input<boolean>;
    /**
     * The name of the lab Account.
     */
    readonly labAccountName: pulumi.Input<string>;
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
