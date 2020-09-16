import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Defines the properties of an Experiment
 */
export declare class Experiment extends pulumi.CustomResource {
    /**
     * Get an existing Experiment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Experiment;
    /**
     * Returns true if the given object is an instance of Experiment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Experiment;
    /**
     * The description of the details or intents of the Experiment
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The state of the Experiment
     */
    readonly enabledState: pulumi.Output<string | undefined>;
    /**
     * The endpoint A of an experiment
     */
    readonly endpointA: pulumi.Output<outputs.network.v20191101.EndpointResponse | undefined>;
    /**
     * The endpoint B of an experiment
     */
    readonly endpointB: pulumi.Output<outputs.network.v20191101.EndpointResponse | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Resource status.
     */
    readonly resourceState: pulumi.Output<string | undefined>;
    /**
     * The uri to the Script used in the Experiment
     */
    readonly scriptFileUri: pulumi.Output<string>;
    /**
     * The description of Experiment status from the server side
     */
    readonly status: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Experiment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExperimentArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Experiment resource.
 */
export interface ExperimentArgs {
    /**
     * The description of the details or intents of the Experiment
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The state of the Experiment
     */
    readonly enabledState?: pulumi.Input<string>;
    /**
     * The endpoint A of an experiment
     */
    readonly endpointA?: pulumi.Input<inputs.network.v20191101.Endpoint>;
    /**
     * The endpoint B of an experiment
     */
    readonly endpointB?: pulumi.Input<inputs.network.v20191101.Endpoint>;
    /**
     * The Experiment identifier associated with the Experiment
     */
    readonly experimentName: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The Profile identifier associated with the Tenant and Partner
     */
    readonly profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource status.
     */
    readonly resourceState?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
