import * as pulumi from "@pulumi/pulumi";
/**
 * Represents a disaster recovery configuration.
 */
export declare class DisasterRecoveryConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing DisasterRecoveryConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DisasterRecoveryConfiguration;
    /**
     * Returns true if the given object is an instance of DisasterRecoveryConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DisasterRecoveryConfiguration;
    /**
     * Whether or not failover can be done automatically.
     */
    readonly autoFailover: pulumi.Output<string>;
    /**
     * How aggressive the automatic failover should be.
     */
    readonly failoverPolicy: pulumi.Output<string>;
    /**
     * Location of the server that contains this disaster recovery configuration.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Logical name of the server.
     */
    readonly logicalServerName: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Logical name of the partner server.
     */
    readonly partnerLogicalServerName: pulumi.Output<string>;
    /**
     * Id of the partner server.
     */
    readonly partnerServerId: pulumi.Output<string>;
    /**
     * The role of the current server in the disaster recovery configuration.
     */
    readonly role: pulumi.Output<string>;
    /**
     * The status of the disaster recovery configuration.
     */
    readonly status: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a DisasterRecoveryConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DisasterRecoveryConfigurationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DisasterRecoveryConfiguration resource.
 */
export interface DisasterRecoveryConfigurationArgs {
    /**
     * The name of the disaster recovery configuration to be created/updated.
     */
    readonly disasterRecoveryConfigurationName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    readonly serverName: pulumi.Input<string>;
}
