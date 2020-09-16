import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Machine Learning compute object wrapped into ARM resource envelope.
 */
export declare class MachineLearningCompute extends pulumi.CustomResource {
    /**
     * Get an existing MachineLearningCompute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MachineLearningCompute;
    /**
     * Returns true if the given object is an instance of MachineLearningCompute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is MachineLearningCompute;
    /**
     * The identity of the resource.
     */
    readonly identity: pulumi.Output<outputs.machinelearningservices.v20190501.IdentityResponse | undefined>;
    /**
     * Specifies the location of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Compute properties
     */
    readonly properties: pulumi.Output<outputs.machinelearningservices.v20190501.ComputeResponse>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a MachineLearningCompute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MachineLearningComputeArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a MachineLearningCompute resource.
 */
export interface MachineLearningComputeArgs {
    /**
     * Name of the Azure Machine Learning compute.
     */
    readonly computeName: pulumi.Input<string>;
    /**
     * The identity of the resource.
     */
    readonly identity?: pulumi.Input<inputs.machinelearningservices.v20190501.Identity>;
    /**
     * Specifies the location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Compute properties
     */
    readonly properties?: pulumi.Input<inputs.machinelearningservices.v20190501.Compute>;
    /**
     * Name of the resource group in which workspace is located.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    readonly workspaceName: pulumi.Input<string>;
}
