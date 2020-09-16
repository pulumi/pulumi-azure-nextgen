import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Data flow resource type.
 */
export declare class DataFlow extends pulumi.CustomResource {
    /**
     * Get an existing DataFlow resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataFlow;
    /**
     * Returns true if the given object is an instance of DataFlow.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DataFlow;
    /**
     * Etag identifies change in the resource.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Data flow properties.
     */
    readonly properties: pulumi.Output<outputs.datafactory.v20180601.DataFlowResponse>;
    /**
     * The resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a DataFlow resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataFlowArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DataFlow resource.
 */
export interface DataFlowArgs {
    /**
     * The data flow name.
     */
    readonly dataFlowName: pulumi.Input<string>;
    /**
     * The factory name.
     */
    readonly factoryName: pulumi.Input<string>;
    /**
     * Data flow properties.
     */
    readonly properties: pulumi.Input<inputs.datafactory.v20180601.DataFlow>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
