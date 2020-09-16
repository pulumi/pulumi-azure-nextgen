import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Response on GET of a hybrid use benefit
 */
export declare class HybridUseBenefit extends pulumi.CustomResource {
    /**
     * Get an existing HybridUseBenefit resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HybridUseBenefit;
    /**
     * Returns true if the given object is an instance of HybridUseBenefit.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is HybridUseBenefit;
    /**
     * Created date
     */
    readonly createdDate: pulumi.Output<string>;
    /**
     * Indicates the revision of the hybrid use benefit
     */
    readonly etag: pulumi.Output<number>;
    /**
     * Last updated date
     */
    readonly lastUpdatedDate: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Provisioning state
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Hybrid use benefit SKU
     */
    readonly sku: pulumi.Output<outputs.softwareplan.v20191201.SkuResponse>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a HybridUseBenefit resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HybridUseBenefitArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a HybridUseBenefit resource.
 */
export interface HybridUseBenefitArgs {
    /**
     * This is a unique identifier for a plan. Should be a guid.
     */
    readonly planId: pulumi.Input<string>;
    /**
     * The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
     */
    readonly scope: pulumi.Input<string>;
    /**
     * Hybrid use benefit SKU
     */
    readonly sku: pulumi.Input<inputs.softwareplan.v20191201.Sku>;
}
