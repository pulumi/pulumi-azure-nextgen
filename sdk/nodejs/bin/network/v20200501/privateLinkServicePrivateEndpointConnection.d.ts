import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * PrivateEndpointConnection resource.
 */
export declare class PrivateLinkServicePrivateEndpointConnection extends pulumi.CustomResource {
    /**
     * Get an existing PrivateLinkServicePrivateEndpointConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateLinkServicePrivateEndpointConnection;
    /**
     * Returns true if the given object is an instance of PrivateLinkServicePrivateEndpointConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PrivateLinkServicePrivateEndpointConnection;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The consumer link id.
     */
    readonly linkIdentifier: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
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
     * The provisioning state of the private endpoint connection resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a PrivateLinkServicePrivateEndpointConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateLinkServicePrivateEndpointConnectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a PrivateLinkServicePrivateEndpointConnection resource.
 */
export interface PrivateLinkServicePrivateEndpointConnectionArgs {
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the private end point connection.
     */
    readonly peConnectionName: pulumi.Input<string>;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    readonly privateLinkServiceConnectionState?: pulumi.Input<inputs.network.v20200501.PrivateLinkServiceConnectionState>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the private link service.
     */
    readonly serviceName: pulumi.Input<string>;
}
