import * as pulumi from "@pulumi/pulumi";
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
     * List of References to Assessments created on this group.
     */
    readonly assessments: pulumi.Output<string[]>;
    /**
     * Time when this project was created. Date-Time represented in ISO-8601 format.
     */
    readonly createdTimestamp: pulumi.Output<string>;
    /**
     * For optimistic concurrency control.
     */
    readonly eTag: pulumi.Output<string | undefined>;
    /**
     * List of machine names that are part of this group.
     */
    readonly machines: pulumi.Output<string[]>;
    /**
     * Name of the group.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Type of the object = [Microsoft.Migrate/projects/groups].
     */
    readonly type: pulumi.Output<string>;
    /**
     * Time when this project was last updated. Date-Time represented in ISO-8601 format.
     */
    readonly updatedTimestamp: pulumi.Output<string>;
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
     * List of machine names that are part of this group.
     */
    readonly machines: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the Azure Migrate project.
     */
    readonly projectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
