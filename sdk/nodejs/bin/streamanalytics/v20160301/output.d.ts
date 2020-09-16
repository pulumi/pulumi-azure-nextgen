import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * An output object, containing all information associated with the named output. All outputs are contained under a streaming job.
 */
export declare class Output extends pulumi.CustomResource {
    /**
     * Get an existing Output resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Output;
    /**
     * Returns true if the given object is an instance of Output.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Output;
    /**
     * Describes the data source that output will be written to. Required on PUT (CreateOrReplace) requests.
     */
    readonly datasource: pulumi.Output<outputs.streamanalytics.v20160301.OutputDataSourceResponse | undefined>;
    /**
     * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
     */
    readonly diagnostics: pulumi.Output<outputs.streamanalytics.v20160301.DiagnosticsResponse>;
    /**
     * The current entity tag for the output. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
     */
    readonly serialization: pulumi.Output<outputs.streamanalytics.v20160301.SerializationResponse | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Output resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OutputArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Output resource.
 */
export interface OutputArgs {
    /**
     * Describes the data source that output will be written to. Required on PUT (CreateOrReplace) requests.
     */
    readonly datasource?: pulumi.Input<inputs.streamanalytics.v20160301.OutputDataSource>;
    /**
     * The name of the streaming job.
     */
    readonly jobName: pulumi.Input<string>;
    /**
     * Resource name
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the output.
     */
    readonly outputName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
     */
    readonly serialization?: pulumi.Input<inputs.streamanalytics.v20160301.Serialization>;
}
