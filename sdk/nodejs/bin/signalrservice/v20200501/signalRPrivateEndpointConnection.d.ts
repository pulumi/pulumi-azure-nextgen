import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A private endpoint connection to SignalR resource
 */
export declare class SignalRPrivateEndpointConnection extends pulumi.CustomResource {
    /**
     * Get an existing SignalRPrivateEndpointConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SignalRPrivateEndpointConnection;
    /**
     * Returns true if the given object is an instance of SignalRPrivateEndpointConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SignalRPrivateEndpointConnection;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Private endpoint associated with the private endpoint connection
     */
    readonly privateEndpoint: pulumi.Output<outputs.signalrservice.v20200501.PrivateEndpointResponse | undefined>;
    /**
     * Connection state
     */
    readonly privateLinkServiceConnectionState: pulumi.Output<outputs.signalrservice.v20200501.PrivateLinkServiceConnectionStateResponse | undefined>;
    /**
     * Provisioning state of the private endpoint connection
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a SignalRPrivateEndpointConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SignalRPrivateEndpointConnectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a SignalRPrivateEndpointConnection resource.
 */
export interface SignalRPrivateEndpointConnectionArgs {
    /**
     * Private endpoint associated with the private endpoint connection
     */
    readonly privateEndpoint?: pulumi.Input<inputs.signalrservice.v20200501.PrivateEndpoint>;
    /**
     * The name of the private endpoint connection associated with the SignalR resource.
     */
    readonly privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * Connection state
     */
    readonly privateLinkServiceConnectionState?: pulumi.Input<inputs.signalrservice.v20200501.PrivateLinkServiceConnectionState>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SignalR resource.
     */
    readonly resourceName: pulumi.Input<string>;
}
