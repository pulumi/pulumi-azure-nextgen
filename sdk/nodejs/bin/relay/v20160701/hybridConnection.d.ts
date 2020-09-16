import * as pulumi from "@pulumi/pulumi";
/**
 * Description of HybridConnection Resource.
 */
export declare class HybridConnection extends pulumi.CustomResource {
    /**
     * Get an existing HybridConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HybridConnection;
    /**
     * Returns true if the given object is an instance of HybridConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is HybridConnection;
    /**
     * The time the HybridConnection was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * The number of listeners for this HybridConnection. min : 1 and max:25 supported
     */
    readonly listenerCount: pulumi.Output<number>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * true if client authorization is needed for this HybridConnection; otherwise, false.
     */
    readonly requiresClientAuthorization: pulumi.Output<boolean | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * The time the namespace was updated.
     */
    readonly updatedAt: pulumi.Output<string>;
    /**
     * usermetadata is a placeholder to store user-defined string data for the HybridConnection endpoint.e.g. it can be used to store  descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored.
     */
    readonly userMetadata: pulumi.Output<string | undefined>;
    /**
     * Create a HybridConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HybridConnectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a HybridConnection resource.
 */
export interface HybridConnectionArgs {
    /**
     * The hybrid connection name.
     */
    readonly hybridConnectionName: pulumi.Input<string>;
    /**
     * The Namespace Name
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * true if client authorization is needed for this HybridConnection; otherwise, false.
     */
    readonly requiresClientAuthorization?: pulumi.Input<boolean>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * usermetadata is a placeholder to store user-defined string data for the HybridConnection endpoint.e.g. it can be used to store  descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored.
     */
    readonly userMetadata?: pulumi.Input<string>;
}
