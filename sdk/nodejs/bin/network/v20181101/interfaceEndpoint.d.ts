import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Interface endpoint resource.
 */
export declare class InterfaceEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): InterfaceEndpoint;
    /**
     * Returns true if the given object is an instance of InterfaceEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceEndpoint;
    /**
     * A reference to the service being brought into the virtual network.
     */
    readonly endpointService: pulumi.Output<outputs.network.v20181101.EndpointServiceResponse | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * A first-party service's FQDN that is mapped to the private IP allocated via this interface endpoint.
     */
    readonly fqdn: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets an array of references to the network interfaces created for this interface endpoint.
     */
    readonly networkInterfaces: pulumi.Output<outputs.network.v20181101.NetworkInterfaceResponse[]>;
    /**
     * A read-only property that identifies who created this interface endpoint.
     */
    readonly owner: pulumi.Output<string>;
    /**
     * The provisioning state of the interface endpoint. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The ID of the subnet from which the private IP will be allocated.
     */
    readonly subnet: pulumi.Output<outputs.network.v20181101.SubnetResponse | undefined>;
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
     * Create a InterfaceEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceEndpointArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a InterfaceEndpoint resource.
 */
export interface InterfaceEndpointArgs {
    /**
     * A reference to the service being brought into the virtual network.
     */
    readonly endpointService?: pulumi.Input<inputs.network.v20181101.EndpointService>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * A first-party service's FQDN that is mapped to the private IP allocated via this interface endpoint.
     */
    readonly fqdn?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The name of the interface endpoint.
     */
    readonly interfaceEndpointName: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the subnet from which the private IP will be allocated.
     */
    readonly subnet?: pulumi.Input<inputs.network.v20181101.Subnet>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
