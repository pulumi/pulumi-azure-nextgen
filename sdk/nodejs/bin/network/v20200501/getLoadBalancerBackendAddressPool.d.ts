import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getLoadBalancerBackendAddressPool(args: GetLoadBalancerBackendAddressPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalancerBackendAddressPoolResult>;
export interface GetLoadBalancerBackendAddressPoolArgs {
    /**
     * The name of the backend address pool.
     */
    readonly backendAddressPoolName: string;
    /**
     * The name of the load balancer.
     */
    readonly loadBalancerName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Pool of backend IP addresses.
 */
export interface GetLoadBalancerBackendAddressPoolResult {
    /**
     * An array of references to IP addresses defined in network interfaces.
     */
    readonly backendIPConfigurations: outputs.network.v20200501.NetworkInterfaceIPConfigurationResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * An array of backend addresses.
     */
    readonly loadBalancerBackendAddresses?: outputs.network.v20200501.LoadBalancerBackendAddressResponse[];
    /**
     * An array of references to load balancing rules that use this backend address pool.
     */
    readonly loadBalancingRules: outputs.network.v20200501.SubResourceResponse[];
    /**
     * The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * A reference to an outbound rule that uses this backend address pool.
     */
    readonly outboundRule: outputs.network.v20200501.SubResourceResponse;
    /**
     * An array of references to outbound rules that use this backend address pool.
     */
    readonly outboundRules: outputs.network.v20200501.SubResourceResponse[];
    /**
     * The provisioning state of the backend address pool resource.
     */
    readonly provisioningState: string;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
