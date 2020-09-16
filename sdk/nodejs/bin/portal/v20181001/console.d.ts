import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Cloud shell console
 */
export declare class Console extends pulumi.CustomResource {
    /**
     * Get an existing Console resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Console;
    /**
     * Returns true if the given object is an instance of Console.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Console;
    /**
     * Cloud shell console properties.
     */
    readonly properties: pulumi.Output<outputs.portal.v20181001.ConsolePropertiesResponse>;
    /**
     * Create a Console resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConsoleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Console resource.
 */
export interface ConsoleArgs {
    /**
     * The name of the console
     */
    readonly consoleName: pulumi.Input<string>;
    /**
     * Cloud shell properties for creating a console.
     */
    readonly properties: pulumi.Input<inputs.portal.v20181001.ConsoleCreateProperties>;
}
