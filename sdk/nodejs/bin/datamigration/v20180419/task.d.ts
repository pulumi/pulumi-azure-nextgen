import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A task resource
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
     * HTTP strong entity tag value. This is ignored if submitted.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Custom task properties
     */
    readonly properties: pulumi.Output<outputs.datamigration.v20180419.ProjectTaskPropertiesResponse>;
    /**
     * Resource type.
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
     * HTTP strong entity tag value. This is ignored if submitted.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Name of the resource group
     */
    readonly groupName: pulumi.Input<string>;
    /**
     * Name of the project
     */
    readonly projectName: pulumi.Input<string>;
    /**
     * Custom task properties
     */
    readonly properties?: pulumi.Input<inputs.datamigration.v20180419.ProjectTaskProperties>;
    /**
     * Name of the service
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * Name of the Task
     */
    readonly taskName: pulumi.Input<string>;
}
