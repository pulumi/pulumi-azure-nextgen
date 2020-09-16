import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The task that has the ARM resource and task properties.
 * The task will have all information to schedule a run against it.
 */
export declare class Task extends pulumi.CustomResource {
    /**
     * Get an existing Task resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Task;
    /**
     * Returns true if the given object is an instance of Task.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Task;
    /**
     * The machine configuration of the run agent.
     */
    readonly agentConfiguration: pulumi.Output<outputs.containerregistry.v20190401.AgentPropertiesResponse | undefined>;
    /**
     * The creation date of task.
     */
    readonly creationDate: pulumi.Output<string>;
    /**
     * The properties that describes a set of credentials that will be used when this run is invoked.
     */
    readonly credentials: pulumi.Output<outputs.containerregistry.v20190401.CredentialsResponse | undefined>;
    /**
     * Identity for the resource.
     */
    readonly identity: pulumi.Output<outputs.containerregistry.v20190401.IdentityPropertiesResponse | undefined>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The platform properties against which the run has to happen.
     */
    readonly platform: pulumi.Output<outputs.containerregistry.v20190401.PlatformPropertiesResponse>;
    /**
     * The provisioning state of the task.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The current status of task.
     */
    readonly status: pulumi.Output<string | undefined>;
    /**
     * The properties of a task step.
     */
    readonly step: pulumi.Output<outputs.containerregistry.v20190401.TaskStepPropertiesResponse>;
    /**
     * The tags of the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Run timeout in seconds.
     */
    readonly timeout: pulumi.Output<number | undefined>;
    /**
     * The properties that describe all triggers for the task.
     */
    readonly trigger: pulumi.Output<outputs.containerregistry.v20190401.TriggerPropertiesResponse | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Task resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TaskArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Task resource.
 */
export interface TaskArgs {
    /**
     * The machine configuration of the run agent.
     */
    readonly agentConfiguration?: pulumi.Input<inputs.containerregistry.v20190401.AgentProperties>;
    /**
     * The properties that describes a set of credentials that will be used when this run is invoked.
     */
    readonly credentials?: pulumi.Input<inputs.containerregistry.v20190401.Credentials>;
    /**
     * Identity for the resource.
     */
    readonly identity?: pulumi.Input<inputs.containerregistry.v20190401.IdentityProperties>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The platform properties against which the run has to happen.
     */
    readonly platform: pulumi.Input<inputs.containerregistry.v20190401.PlatformProperties>;
    /**
     * The name of the container registry.
     */
    readonly registryName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The current status of task.
     */
    readonly status?: pulumi.Input<string>;
    /**
     * The properties of a task step.
     */
    readonly step: pulumi.Input<inputs.containerregistry.v20190401.TaskStepProperties>;
    /**
     * The tags of the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the container registry task.
     */
    readonly taskName: pulumi.Input<string>;
    /**
     * Run timeout in seconds.
     */
    readonly timeout?: pulumi.Input<number>;
    /**
     * The properties that describe all triggers for the task.
     */
    readonly trigger?: pulumi.Input<inputs.containerregistry.v20190401.TriggerProperties>;
}
