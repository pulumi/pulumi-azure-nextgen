import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * An input object, containing all information associated with the named input. All inputs are contained under a streaming job.
 */
export declare class Input extends pulumi.CustomResource {
    /**
     * Get an existing Input resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Input;
    /**
     * Returns true if the given object is an instance of Input.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Input;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The properties that are associated with an input. Required on PUT (CreateOrReplace) requests.
     */
    readonly properties: pulumi.Output<outputs.streamanalytics.v20160301.InputPropertiesResponse>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Input resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InputArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Input resource.
 */
export interface InputArgs {
    /**
     * The name of the input.
     */
    readonly inputName: pulumi.Input<string>;
    /**
     * The name of the streaming job.
     */
    readonly jobName: pulumi.Input<string>;
    /**
     * Resource name
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The properties that are associated with an input. Required on PUT (CreateOrReplace) requests.
     */
    readonly properties?: pulumi.Input<inputs.streamanalytics.v20160301.InputProperties>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
