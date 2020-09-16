import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Pipeline resource type.
 */
export declare class Pipeline extends pulumi.CustomResource {
    /**
     * Get an existing Pipeline resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Pipeline;
    /**
     * Returns true if the given object is an instance of Pipeline.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Pipeline;
    /**
     * List of activities in pipeline.
     */
    readonly activities: pulumi.Output<outputs.datafactory.v20180601.ActivityResponse[] | undefined>;
    /**
     * List of tags that can be used for describing the Pipeline.
     */
    readonly annotations: pulumi.Output<{
        [key: string]: any;
    }[] | undefined>;
    /**
     * The max number of concurrent runs for the pipeline.
     */
    readonly concurrency: pulumi.Output<number | undefined>;
    /**
     * The description of the pipeline.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Etag identifies change in the resource.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
     */
    readonly folder: pulumi.Output<outputs.datafactory.v20180601.PipelineResponseFolder | undefined>;
    /**
     * The resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * List of parameters for pipeline.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: outputs.datafactory.v20180601.ParameterSpecificationResponse;
    } | undefined>;
    /**
     * Dimensions emitted by Pipeline.
     */
    readonly runDimensions: pulumi.Output<{
        [key: string]: {
            [key: string]: any;
        };
    } | undefined>;
    /**
     * The resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * List of variables for pipeline.
     */
    readonly variables: pulumi.Output<{
        [key: string]: outputs.datafactory.v20180601.VariableSpecificationResponse;
    } | undefined>;
    /**
     * Create a Pipeline resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PipelineArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Pipeline resource.
 */
export interface PipelineArgs {
    /**
     * List of activities in pipeline.
     */
    readonly activities?: pulumi.Input<pulumi.Input<inputs.datafactory.v20180601.Activity>[]>;
    /**
     * List of tags that can be used for describing the Pipeline.
     */
    readonly annotations?: pulumi.Input<pulumi.Input<{
        [key: string]: any;
    }>[]>;
    /**
     * The max number of concurrent runs for the pipeline.
     */
    readonly concurrency?: pulumi.Input<number>;
    /**
     * The description of the pipeline.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The factory name.
     */
    readonly factoryName: pulumi.Input<string>;
    /**
     * The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
     */
    readonly folder?: pulumi.Input<inputs.datafactory.v20180601.PipelineFolder>;
    /**
     * List of parameters for pipeline.
     */
    readonly parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<inputs.datafactory.v20180601.ParameterSpecification>;
    }>;
    /**
     * The pipeline name.
     */
    readonly pipelineName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Dimensions emitted by Pipeline.
     */
    readonly runDimensions?: pulumi.Input<{
        [key: string]: pulumi.Input<{
            [key: string]: any;
        }>;
    }>;
    /**
     * List of variables for pipeline.
     */
    readonly variables?: pulumi.Input<{
        [key: string]: pulumi.Input<inputs.datafactory.v20180601.VariableSpecification>;
    }>;
}
