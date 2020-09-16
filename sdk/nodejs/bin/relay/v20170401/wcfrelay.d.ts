import * as pulumi from "@pulumi/pulumi";
/**
 * Description of the WCF relay resource.
 */
export declare class WCFRelay extends pulumi.CustomResource {
    /**
     * Get an existing WCFRelay resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WCFRelay;
    /**
     * Returns true if the given object is an instance of WCFRelay.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WCFRelay;
    /**
     * The time the WCF relay was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * Returns true if the relay is dynamic; otherwise, false.
     */
    readonly isDynamic: pulumi.Output<boolean>;
    /**
     * The number of listeners for this relay. Note that min :1 and max:25 are supported.
     */
    readonly listenerCount: pulumi.Output<number>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * WCF relay type.
     */
    readonly relayType: pulumi.Output<string | undefined>;
    /**
     * Returns true if client authorization is needed for this relay; otherwise, false.
     */
    readonly requiresClientAuthorization: pulumi.Output<boolean | undefined>;
    /**
     * Returns true if transport security is needed for this relay; otherwise, false.
     */
    readonly requiresTransportSecurity: pulumi.Output<boolean | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The time the namespace was updated.
     */
    readonly updatedAt: pulumi.Output<string>;
    /**
     * The usermetadata is a placeholder to store user-defined string data for the WCF Relay endpoint. For example, it can be used to store descriptive data, such as list of teams and their contact information. Also, user-defined configuration settings can be stored.
     */
    readonly userMetadata: pulumi.Output<string | undefined>;
    /**
     * Create a WCFRelay resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WCFRelayArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WCFRelay resource.
 */
export interface WCFRelayArgs {
    /**
     * The namespace name
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * The relay name.
     */
    readonly relayName: pulumi.Input<string>;
    /**
     * WCF relay type.
     */
    readonly relayType?: pulumi.Input<string>;
    /**
     * Returns true if client authorization is needed for this relay; otherwise, false.
     */
    readonly requiresClientAuthorization?: pulumi.Input<boolean>;
    /**
     * Returns true if transport security is needed for this relay; otherwise, false.
     */
    readonly requiresTransportSecurity?: pulumi.Input<boolean>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The usermetadata is a placeholder to store user-defined string data for the WCF Relay endpoint. For example, it can be used to store descriptive data, such as list of teams and their contact information. Also, user-defined configuration settings can be stored.
     */
    readonly userMetadata?: pulumi.Input<string>;
}
