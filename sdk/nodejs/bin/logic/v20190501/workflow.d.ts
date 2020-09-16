import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The workflow type.
 */
export declare class Workflow extends pulumi.CustomResource {
    /**
     * Get an existing Workflow resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Workflow;
    /**
     * Returns true if the given object is an instance of Workflow.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Workflow;
    /**
     * The access control configuration.
     */
    readonly accessControl: pulumi.Output<outputs.logic.v20190501.FlowAccessControlConfigurationResponse | undefined>;
    /**
     * Gets the access endpoint.
     */
    readonly accessEndpoint: pulumi.Output<string>;
    /**
     * Gets the changed time.
     */
    readonly changedTime: pulumi.Output<string>;
    /**
     * Gets the created time.
     */
    readonly createdTime: pulumi.Output<string>;
    /**
     * The definition.
     */
    readonly definition: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * The endpoints configuration.
     */
    readonly endpointsConfiguration: pulumi.Output<outputs.logic.v20190501.FlowEndpointsConfigurationResponse | undefined>;
    /**
     * The integration account.
     */
    readonly integrationAccount: pulumi.Output<outputs.logic.v20190501.ResourceReferenceResponse | undefined>;
    /**
     * The integration service environment.
     */
    readonly integrationServiceEnvironment: pulumi.Output<outputs.logic.v20190501.ResourceReferenceResponse | undefined>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Gets the resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The parameters.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: outputs.logic.v20190501.WorkflowParameterResponse;
    } | undefined>;
    /**
     * Gets the provisioning state.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The sku.
     */
    readonly sku: pulumi.Output<outputs.logic.v20190501.SkuResponse>;
    /**
     * The state.
     */
    readonly state: pulumi.Output<string | undefined>;
    /**
     * The resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Gets the resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Gets the version.
     */
    readonly version: pulumi.Output<string>;
    /**
     * Create a Workflow resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkflowArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Workflow resource.
 */
export interface WorkflowArgs {
    /**
     * The access control configuration.
     */
    readonly accessControl?: pulumi.Input<inputs.logic.v20190501.FlowAccessControlConfiguration>;
    /**
     * The definition.
     */
    readonly definition?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The endpoints configuration.
     */
    readonly endpointsConfiguration?: pulumi.Input<inputs.logic.v20190501.FlowEndpointsConfiguration>;
    /**
     * The integration account.
     */
    readonly integrationAccount?: pulumi.Input<inputs.logic.v20190501.ResourceReference>;
    /**
     * The integration service environment.
     */
    readonly integrationServiceEnvironment?: pulumi.Input<inputs.logic.v20190501.ResourceReference>;
    /**
     * The resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The parameters.
     */
    readonly parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<inputs.logic.v20190501.WorkflowParameter>;
    }>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The state.
     */
    readonly state?: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The workflow name.
     */
    readonly workflowName: pulumi.Input<string>;
}
