import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Registration definition.
 */
export declare class RegistrationDefinition extends pulumi.CustomResource {
    /**
     * Get an existing RegistrationDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RegistrationDefinition;
    /**
     * Returns true if the given object is an instance of RegistrationDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RegistrationDefinition;
    /**
     * Name of the registration definition.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Plan details for the managed services.
     */
    readonly plan: pulumi.Output<outputs.managedservices.v20190901.PlanResponse | undefined>;
    /**
     * Properties of a registration definition.
     */
    readonly properties: pulumi.Output<outputs.managedservices.v20190901.RegistrationDefinitionPropertiesResponse>;
    /**
     * Type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a RegistrationDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistrationDefinitionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a RegistrationDefinition resource.
 */
export interface RegistrationDefinitionArgs {
    /**
     * Plan details for the managed services.
     */
    readonly plan?: pulumi.Input<inputs.managedservices.v20190901.Plan>;
    /**
     * Properties of a registration definition.
     */
    readonly properties?: pulumi.Input<inputs.managedservices.v20190901.RegistrationDefinitionProperties>;
    /**
     * Guid of the registration definition.
     */
    readonly registrationDefinitionId: pulumi.Input<string>;
    /**
     * Scope of the resource.
     */
    readonly scope: pulumi.Input<string>;
}
