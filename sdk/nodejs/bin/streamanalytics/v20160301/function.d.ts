import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A function object, containing all information associated with the named function. All functions are contained under a streaming job.
 */
export declare class Function extends pulumi.CustomResource {
    /**
     * Get an existing Function resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Function;
    /**
     * Returns true if the given object is an instance of Function.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Function;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The properties that are associated with a function.
     */
    readonly properties: pulumi.Output<outputs.streamanalytics.v20160301.FunctionPropertiesResponse>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Function resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FunctionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Function resource.
 */
export interface FunctionArgs {
    /**
     * The name of the function.
     */
    readonly functionName: pulumi.Input<string>;
    /**
     * The name of the streaming job.
     */
    readonly jobName: pulumi.Input<string>;
    /**
     * Resource name
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The properties that are associated with a function.
     */
    readonly properties?: pulumi.Input<inputs.streamanalytics.v20160301.FunctionProperties>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
