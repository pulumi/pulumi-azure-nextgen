import * as pulumi from "@pulumi/pulumi";
/**
 * Single item in List or Get Alias(Disaster Recovery configuration) operation
 */
export declare class DisasterRecoveryConfig extends pulumi.CustomResource {
    /**
     * Get an existing DisasterRecoveryConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DisasterRecoveryConfig;
    /**
     * Returns true if the given object is an instance of DisasterRecoveryConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DisasterRecoveryConfig;
    /**
     * Alternate name specified when alias and namespace names are same.
     */
    readonly alternateName: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
     */
    readonly partnerNamespace: pulumi.Output<string | undefined>;
    /**
     * Number of entities pending to be replicated.
     */
    readonly pendingReplicationOperationsCount: pulumi.Output<number>;
    /**
     * Provisioning state of the Alias(Disaster Recovery configuration) - possible values 'Accepted' or 'Succeeded' or 'Failed'
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * role of namespace in GEO DR - possible values 'Primary' or 'PrimaryNotReplicating' or 'Secondary'
     */
    readonly role: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a DisasterRecoveryConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DisasterRecoveryConfigArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DisasterRecoveryConfig resource.
 */
export interface DisasterRecoveryConfigArgs {
    /**
     * The Disaster Recovery configuration name
     */
    readonly alias: pulumi.Input<string>;
    /**
     * Alternate name specified when alias and namespace names are same.
     */
    readonly alternateName?: pulumi.Input<string>;
    /**
     * The Namespace name
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
     */
    readonly partnerNamespace?: pulumi.Input<string>;
    /**
     * Name of the resource group within the azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
