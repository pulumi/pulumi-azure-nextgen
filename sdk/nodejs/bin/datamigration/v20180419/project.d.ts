import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A project resource
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
     * UTC Date and time when project was created
     */
    readonly creationTime: pulumi.Output<string>;
    /**
     * List of DatabaseInfo
     */
    readonly databasesInfo: pulumi.Output<outputs.datamigration.v20180419.DatabaseInfoResponse[] | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The project's provisioning state
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Information for connecting to source
     */
    readonly sourceConnectionInfo: pulumi.Output<outputs.datamigration.v20180419.ConnectionInfoResponse | undefined>;
    /**
     * Source platform for the project
     */
    readonly sourcePlatform: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Information for connecting to target
     */
    readonly targetConnectionInfo: pulumi.Output<outputs.datamigration.v20180419.ConnectionInfoResponse | undefined>;
    /**
     * Target platform for the project
     */
    readonly targetPlatform: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
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
     * List of DatabaseInfo
     */
    readonly databasesInfo?: pulumi.Input<pulumi.Input<inputs.datamigration.v20180419.DatabaseInfo>[]>;
    /**
     * Name of the resource group
     */
    readonly groupName: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Name of the project
     */
    readonly projectName: pulumi.Input<string>;
    /**
     * Name of the service
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * Information for connecting to source
     */
    readonly sourceConnectionInfo?: pulumi.Input<inputs.datamigration.v20180419.ConnectionInfo>;
    /**
     * Source platform for the project
     */
    readonly sourcePlatform: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Information for connecting to target
     */
    readonly targetConnectionInfo?: pulumi.Input<inputs.datamigration.v20180419.ConnectionInfo>;
    /**
     * Target platform for the project
     */
    readonly targetPlatform: pulumi.Input<string>;
}
