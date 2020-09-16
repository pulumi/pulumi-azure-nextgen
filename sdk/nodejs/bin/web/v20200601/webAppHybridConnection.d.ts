import * as pulumi from "@pulumi/pulumi";
/**
 * Hybrid Connection contract. This is used to configure a Hybrid Connection.
 */
export declare class WebAppHybridConnection extends pulumi.CustomResource {
    /**
     * Get an existing WebAppHybridConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppHybridConnection;
    /**
     * Returns true if the given object is an instance of WebAppHybridConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WebAppHybridConnection;
    /**
     * The hostname of the endpoint.
     */
    readonly hostname: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The port of the endpoint.
     */
    readonly port: pulumi.Output<number | undefined>;
    /**
     * The ARM URI to the Service Bus relay.
     */
    readonly relayArmUri: pulumi.Output<string | undefined>;
    /**
     * The name of the Service Bus relay.
     */
    readonly relayName: pulumi.Output<string | undefined>;
    /**
     * The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
     */
    readonly sendKeyName: pulumi.Output<string | undefined>;
    /**
     * The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
     * normally, use the POST /listKeys API instead.
     */
    readonly sendKeyValue: pulumi.Output<string | undefined>;
    /**
     * The name of the Service Bus namespace.
     */
    readonly serviceBusNamespace: pulumi.Output<string | undefined>;
    /**
     * The suffix for the service bus endpoint. By default this is .servicebus.windows.net
     */
    readonly serviceBusSuffix: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a WebAppHybridConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppHybridConnectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WebAppHybridConnection resource.
 */
export interface WebAppHybridConnectionArgs {
    /**
     * The hostname of the endpoint.
     */
    readonly hostname?: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * The name of the web app.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The namespace for this hybrid connection.
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * The port of the endpoint.
     */
    readonly port?: pulumi.Input<number>;
    /**
     * The ARM URI to the Service Bus relay.
     */
    readonly relayArmUri?: pulumi.Input<string>;
    /**
     * The name of the Service Bus relay.
     */
    readonly relayName: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
     */
    readonly sendKeyName?: pulumi.Input<string>;
    /**
     * The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
     * normally, use the POST /listKeys API instead.
     */
    readonly sendKeyValue?: pulumi.Input<string>;
    /**
     * The name of the Service Bus namespace.
     */
    readonly serviceBusNamespace?: pulumi.Input<string>;
    /**
     * The suffix for the service bus endpoint. By default this is .servicebus.windows.net
     */
    readonly serviceBusSuffix?: pulumi.Input<string>;
}
