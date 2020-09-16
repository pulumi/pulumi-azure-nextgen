import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Pool of backend IP addresses.
 */
export declare class LoadBalancerBackendAddressPool extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalancerBackendAddressPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LoadBalancerBackendAddressPool;
    /**
     * Returns true if the given object is an instance of LoadBalancerBackendAddressPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LoadBalancerBackendAddressPool;
    /**
     * An array of references to IP addresses defined in network interfaces.
     */
    readonly backendIPConfigurations: pulumi.Output<outputs.network.v20200501.NetworkInterfaceIPConfigurationResponse[]>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * An array of backend addresses.
     */
    readonly loadBalancerBackendAddresses: pulumi.Output<outputs.network.v20200501.LoadBalancerBackendAddressResponse[] | undefined>;
    /**
     * An array of references to load balancing rules that use this backend address pool.
     */
    readonly loadBalancingRules: pulumi.Output<outputs.network.v20200501.SubResourceResponse[]>;
    /**
     * The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * A reference to an outbound rule that uses this backend address pool.
     */
    readonly outboundRule: pulumi.Output<outputs.network.v20200501.SubResourceResponse>;
    /**
     * An array of references to outbound rules that use this backend address pool.
     */
    readonly outboundRules: pulumi.Output<outputs.network.v20200501.SubResourceResponse[]>;
    /**
     * The provisioning state of the backend address pool resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a LoadBalancerBackendAddressPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalancerBackendAddressPoolArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a LoadBalancerBackendAddressPool resource.
 */
export interface LoadBalancerBackendAddressPoolArgs {
    /**
     * The name of the backend address pool.
     */
    readonly backendAddressPoolName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * An array of backend addresses.
     */
    readonly loadBalancerBackendAddresses?: pulumi.Input<pulumi.Input<inputs.network.v20200501.LoadBalancerBackendAddress>[]>;
    /**
     * The name of the load balancer.
     */
    readonly loadBalancerName: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
