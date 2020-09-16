import * as pulumi from "@pulumi/pulumi";
/**
 * Gateway hostname configuration details.
 */
export declare class GatewayHostnameConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing GatewayHostnameConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GatewayHostnameConfiguration;
    /**
     * Returns true if the given object is an instance of GatewayHostnameConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GatewayHostnameConfiguration;
    /**
     * Identifier of Certificate entity that will be used for TLS connection establishment
     */
    readonly certificateId: pulumi.Output<string | undefined>;
    /**
     * Hostname value. Supports valid domain name, partial or full wildcard
     */
    readonly hostname: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Determines whether gateway requests client certificate
     */
    readonly negotiateClientCertificate: pulumi.Output<boolean | undefined>;
    /**
     * Resource type for API Management resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a GatewayHostnameConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GatewayHostnameConfigurationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a GatewayHostnameConfiguration resource.
 */
export interface GatewayHostnameConfigurationArgs {
    /**
     * Identifier of Certificate entity that will be used for TLS connection establishment
     */
    readonly certificateId?: pulumi.Input<string>;
    /**
     * Gateway entity identifier. Must be unique in the current API Management service instance. Must not have value 'managed'
     */
    readonly gatewayId: pulumi.Input<string>;
    /**
     * Gateway hostname configuration identifier. Must be unique in the scope of parent Gateway entity.
     */
    readonly hcId: pulumi.Input<string>;
    /**
     * Hostname value. Supports valid domain name, partial or full wildcard
     */
    readonly hostname?: pulumi.Input<string>;
    /**
     * Determines whether gateway requests client certificate
     */
    readonly negotiateClientCertificate?: pulumi.Input<boolean>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: pulumi.Input<string>;
}
