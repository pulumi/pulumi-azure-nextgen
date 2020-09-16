import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Private link service resource.
 */
export declare class PrivateLinkService extends pulumi.CustomResource {
    /**
     * Get an existing PrivateLinkService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateLinkService;
    /**
     * Returns true if the given object is an instance of PrivateLinkService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PrivateLinkService;
    /**
     * The alias of the private link service.
     */
    readonly alias: pulumi.Output<string>;
    /**
     * The auto-approval list of the private link service.
     */
    readonly autoApproval: pulumi.Output<outputs.network.v20200401.PrivateLinkServicePropertiesResponseAutoApproval | undefined>;
    /**
     * Whether the private link service is enabled for proxy protocol or not.
     */
    readonly enableProxyProtocol: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The list of Fqdn.
     */
    readonly fqdns: pulumi.Output<string[] | undefined>;
    /**
     * An array of private link service IP configurations.
     */
    readonly ipConfigurations: pulumi.Output<outputs.network.v20200401.PrivateLinkServiceIpConfigurationResponse[] | undefined>;
    /**
     * An array of references to the load balancer IP configurations.
     */
    readonly loadBalancerFrontendIpConfigurations: pulumi.Output<outputs.network.v20200401.FrontendIPConfigurationResponse[] | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * An array of references to the network interfaces created for this private link service.
     */
    readonly networkInterfaces: pulumi.Output<outputs.network.v20200401.NetworkInterfaceResponse[]>;
    /**
     * An array of list about connections to the private endpoint.
     */
    readonly privateEndpointConnections: pulumi.Output<outputs.network.v20200401.PrivateEndpointConnectionResponse[]>;
    /**
     * The provisioning state of the private link service resource.
     */
    readonly provisioningState: pulumi.Output<string>;
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
     * The visibility list of the private link service.
     */
    readonly visibility: pulumi.Output<outputs.network.v20200401.PrivateLinkServicePropertiesResponseVisibility | undefined>;
    /**
     * Create a PrivateLinkService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateLinkServiceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a PrivateLinkService resource.
 */
export interface PrivateLinkServiceArgs {
    /**
     * The auto-approval list of the private link service.
     */
    readonly autoApproval?: pulumi.Input<inputs.network.v20200401.PrivateLinkServicePropertiesAutoApproval>;
    /**
     * Whether the private link service is enabled for proxy protocol or not.
     */
    readonly enableProxyProtocol?: pulumi.Input<boolean>;
    /**
     * The list of Fqdn.
     */
    readonly fqdns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * An array of private link service IP configurations.
     */
    readonly ipConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20200401.PrivateLinkServiceIpConfiguration>[]>;
    /**
     * An array of references to the load balancer IP configurations.
     */
    readonly loadBalancerFrontendIpConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20200401.FrontendIPConfiguration>[]>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the private link service.
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The visibility list of the private link service.
     */
    readonly visibility?: pulumi.Input<inputs.network.v20200401.PrivateLinkServicePropertiesVisibility>;
}
