import * as pulumi from "@pulumi/pulumi";
/**
 * Azure Migrate Project.
 */
export declare class Project extends pulumi.CustomResource {
    /**
     * Get an existing Project resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Project;
    /**
     * Returns true if the given object is an instance of Project.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Project;
    /**
     * Time when this project was created. Date-Time represented in ISO-8601 format.
     */
    readonly createdTimestamp: pulumi.Output<string>;
    /**
     * ARM ID of the Service Map workspace created by user.
     */
    readonly customerWorkspaceId: pulumi.Output<string | undefined>;
    /**
     * Location of the Service Map workspace created by user.
     */
    readonly customerWorkspaceLocation: pulumi.Output<string | undefined>;
    /**
     * Reports whether project is under discovery.
     */
    readonly discoveryStatus: pulumi.Output<string>;
    /**
     * For optimistic concurrency control.
     */
    readonly eTag: pulumi.Output<string | undefined>;
    /**
     * Time when last assessment was created. Date-Time represented in ISO-8601 format. This value will be null until assessment is created.
     */
    readonly lastAssessmentTimestamp: pulumi.Output<string>;
    /**
     * Session id of the last discovery.
     */
    readonly lastDiscoverySessionId: pulumi.Output<string>;
    /**
     * Time when this project was created. Date-Time represented in ISO-8601 format. This value will be null until discovery is complete.
     */
    readonly lastDiscoveryTimestamp: pulumi.Output<string>;
    /**
     * Azure location in which project is created.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Name of the project.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Number of assessments created in the project.
     */
    readonly numberOfAssessments: pulumi.Output<number>;
    /**
     * Number of groups created in the project.
     */
    readonly numberOfGroups: pulumi.Output<number>;
    /**
     * Number of machines in the project.
     */
    readonly numberOfMachines: pulumi.Output<number>;
    /**
     * Provisioning state of the project.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Tags provided by Azure Tagging service.
     */
    readonly tags: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Type of the object = [Microsoft.Migrate/projects].
     */
    readonly type: pulumi.Output<string>;
    /**
     * Time when this project was last updated. Date-Time represented in ISO-8601 format.
     */
    readonly updatedTimestamp: pulumi.Output<string>;
    /**
     * Create a Project resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Project resource.
 */
export interface ProjectArgs {
    /**
     * ARM ID of the Service Map workspace created by user.
     */
    readonly customerWorkspaceId?: pulumi.Input<string>;
    /**
     * Location of the Service Map workspace created by user.
     */
    readonly customerWorkspaceLocation?: pulumi.Input<string>;
    /**
     * For optimistic concurrency control.
     */
    readonly eTag?: pulumi.Input<string>;
    /**
     * Azure location in which project is created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Name of the Azure Migrate project.
     */
    readonly projectName: pulumi.Input<string>;
    /**
     * Provisioning state of the project.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Tags provided by Azure Tagging service.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: any;
    }>;
}
