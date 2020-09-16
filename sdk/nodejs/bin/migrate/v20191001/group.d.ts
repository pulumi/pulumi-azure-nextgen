import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * A group created in a Migration project.
 */
export declare class Group extends pulumi.CustomResource {
    /**
     * Get an existing Group resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Group;
    /**
     * Returns true if the given object is an instance of Group.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Group;
    /**
     * For optimistic concurrency control.
     */
    readonly eTag: pulumi.Output<string | undefined>;
    /**
     * Name of the group.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Properties of the group.
     */
    readonly properties: pulumi.Output<outputs.migrate.v20191001.GroupPropertiesResponse>;
    /**
     * Type of the object = [Microsoft.Migrate/assessmentProjects/groups].
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Group resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Group resource.
 */
export interface GroupArgs {
    /**
     * For optimistic concurrency control.
     */
    readonly eTag?: pulumi.Input<string>;
    /**
     * Unique name of a group within a project.
     */
    readonly groupName: pulumi.Input<string>;
    /**
     * Name of the Azure Migrate project.
     */
    readonly projectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
