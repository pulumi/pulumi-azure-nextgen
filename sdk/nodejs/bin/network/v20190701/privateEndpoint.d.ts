import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Private endpoint resource.
 */
export declare class PrivateEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing PrivateEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateEndpoint;
    /**
     * Returns true if the given object is an instance of PrivateEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PrivateEndpoint;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
     */
    readonly manualPrivateLinkServiceConnections: pulumi.Output<outputs.network.v20190701.PrivateLinkServiceConnectionResponse[] | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * An array of references to the network interfaces created for this private endpoint.
     */
    readonly networkInterfaces: pulumi.Output<outputs.network.v20190701.NetworkInterfaceResponse[]>;
    /**
     * A grouping of information about the connection to the remote resource.
     */
    readonly privateLinkServiceConnections: pulumi.Output<outputs.network.v20190701.PrivateLinkServiceConnectionResponse[] | undefined>;
    /**
     * The provisioning state of the private endpoint resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * The ID of the subnet from which the private IP will be allocated.
     */
    readonly subnet: pulumi.Output<outputs.network.v20190701.SubnetResponse | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a PrivateEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateEndpointArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a PrivateEndpoint resource.
 */
export interface PrivateEndpointArgs {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
     */
    readonly manualPrivateLinkServiceConnections?: pulumi.Input<pulumi.Input<inputs.network.v20190701.PrivateLinkServiceConnection>[]>;
    /**
     * The name of the private endpoint.
     */
    readonly privateEndpointName: pulumi.Input<string>;
    /**
     * A grouping of information about the connection to the remote resource.
     */
    readonly privateLinkServiceConnections?: pulumi.Input<pulumi.Input<inputs.network.v20190701.PrivateLinkServiceConnection>[]>;
    /**
     * The provisioning state of the private endpoint resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the subnet from which the private IP will be allocated.
     */
    readonly subnet?: pulumi.Input<inputs.network.v20190701.Subnet>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
