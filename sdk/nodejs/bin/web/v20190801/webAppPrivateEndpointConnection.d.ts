import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Private Endpoint Connection ARM resource.
 */
export declare class WebAppPrivateEndpointConnection extends pulumi.CustomResource {
    /**
     * Get an existing WebAppPrivateEndpointConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppPrivateEndpointConnection;
    /**
     * Returns true if the given object is an instance of WebAppPrivateEndpointConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WebAppPrivateEndpointConnection;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * PrivateEndpoint of a remote private endpoint connection
     */
    readonly privateEndpoint: pulumi.Output<outputs.web.v20190801.ArmIdWrapperResponse | undefined>;
    /**
     * The state of a private link connection
     */
    readonly privateLinkServiceConnectionState: pulumi.Output<outputs.web.v20190801.PrivateLinkConnectionStateResponse | undefined>;
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a WebAppPrivateEndpointConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppPrivateEndpointConnectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WebAppPrivateEndpointConnection resource.
 */
export interface WebAppPrivateEndpointConnectionArgs {
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Name of the site.
     */
    readonly name: pulumi.Input<string>;
    readonly privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The state of a private link connection
     */
    readonly privateLinkServiceConnectionState?: pulumi.Input<inputs.web.v20190801.PrivateLinkConnectionState>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
