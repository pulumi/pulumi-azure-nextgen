import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A formula for creating a VM, specifying an image base and other parameters
 */
export declare class Formula extends pulumi.CustomResource {
    /**
     * Get an existing Formula resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Formula;
    /**
     * Returns true if the given object is an instance of Formula.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Formula;
    /**
     * The author of the formula.
     */
    readonly author: pulumi.Output<string | undefined>;
    /**
     * The creation date of the formula.
     */
    readonly creationDate: pulumi.Output<string>;
    /**
     * The description of the formula.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The content of the formula.
     */
    readonly formulaContent: pulumi.Output<outputs.devtestlab.v20160515.LabVirtualMachineCreationParameterResponse | undefined>;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The OS type of the formula.
     */
    readonly osType: pulumi.Output<string | undefined>;
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
     * Information about a VM from which a formula is to be created.
     */
    readonly vm: pulumi.Output<outputs.devtestlab.v20160515.FormulaPropertiesFromVmResponse | undefined>;
    /**
     * Create a Formula resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FormulaArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Formula resource.
 */
export interface FormulaArgs {
    /**
     * The author of the formula.
     */
    readonly author?: pulumi.Input<string>;
    /**
     * The description of the formula.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The content of the formula.
     */
    readonly formulaContent?: pulumi.Input<inputs.devtestlab.v20160515.LabVirtualMachineCreationParameter>;
    /**
     * The name of the lab.
     */
    readonly labName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the formula.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The OS type of the formula.
     */
    readonly osType?: pulumi.Input<string>;
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
     * Information about a VM from which a formula is to be created.
     */
    readonly vm?: pulumi.Input<inputs.devtestlab.v20160515.FormulaPropertiesFromVm>;
}
