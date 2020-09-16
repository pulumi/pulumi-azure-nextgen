import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Private Endpoint connection on an application gateway.
 */
export declare class ApplicationGatewayPrivateEndpointConnection extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationGatewayPrivateEndpointConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApplicationGatewayPrivateEndpointConnection;
    /**
     * Returns true if the given object is an instance of ApplicationGatewayPrivateEndpointConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApplicationGatewayPrivateEndpointConnection;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The consumer link id.
     */
    readonly linkIdentifier: pulumi.Output<string>;
    /**
     * Name of the private endpoint connection on an application gateway.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The resource of private end point.
     */
    readonly privateEndpoint: pulumi.Output<outputs.network.v20200501.PrivateEndpointResponse>;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    readonly privateLinkServiceConnectionState: pulumi.Output<outputs.network.v20200501.PrivateLinkServiceConnectionStateResponse | undefined>;
    /**
     * The provisioning state of the application gateway private endpoint connection resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ApplicationGatewayPrivateEndpointConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationGatewayPrivateEndpointConnectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ApplicationGatewayPrivateEndpointConnection resource.
 */
export interface ApplicationGatewayPrivateEndpointConnectionArgs {
    /**
     * The name of the application gateway.
     */
    readonly applicationGatewayName: pulumi.Input<string>;
    /**
     * The name of the application gateway private endpoint connection.
     */
    readonly connectionName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Name of the private endpoint connection on an application gateway.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    readonly privateLinkServiceConnectionState?: pulumi.Input<inputs.network.v20200501.PrivateLinkServiceConnectionState>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
