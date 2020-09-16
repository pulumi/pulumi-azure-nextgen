import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A private cloud resource
 */
export declare class PrivateCloud extends pulumi.CustomResource {
    /**
     * Get an existing PrivateCloud resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateCloud;
    /**
     * Returns true if the given object is an instance of PrivateCloud.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PrivateCloud;
    /**
     * An ExpressRoute Circuit
     */
    readonly circuit: pulumi.Output<outputs.avs.v20200320.CircuitResponse | undefined>;
    /**
     * The endpoints
     */
    readonly endpoints: pulumi.Output<outputs.avs.v20200320.EndpointsResponse>;
    /**
     * vCenter Single Sign On Identity Sources
     */
    readonly identitySources: pulumi.Output<outputs.avs.v20200320.IdentitySourceResponse[] | undefined>;
    /**
     * Connectivity to internet is enabled or disabled
     */
    readonly internet: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * The default cluster used for management
     */
    readonly managementCluster: pulumi.Output<outputs.avs.v20200320.ManagementClusterResponse>;
    /**
     * Network used to access vCenter Server and NSX-T Manager
     */
    readonly managementNetwork: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22
     */
    readonly networkBlock: pulumi.Output<string>;
    /**
     * Thumbprint of the NSX-T Manager SSL certificate
     */
    readonly nsxtCertificateThumbprint: pulumi.Output<string>;
    /**
     * Optionally, set the NSX-T Manager password when the private cloud is created
     */
    readonly nsxtPassword: pulumi.Output<string | undefined>;
    /**
     * Used for virtual machine cold migration, cloning, and snapshot migration
     */
    readonly provisioningNetwork: pulumi.Output<string>;
    /**
     * The provisioning state
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The private cloud SKU
     */
    readonly sku: pulumi.Output<outputs.avs.v20200320.SkuResponse>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Thumbprint of the vCenter Server SSL certificate
     */
    readonly vcenterCertificateThumbprint: pulumi.Output<string>;
    /**
     * Optionally, set the vCenter admin password when the private cloud is created
     */
    readonly vcenterPassword: pulumi.Output<string | undefined>;
    /**
     * Used for live migration of virtual machines
     */
    readonly vmotionNetwork: pulumi.Output<string>;
    /**
     * Create a PrivateCloud resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateCloudArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a PrivateCloud resource.
 */
export interface PrivateCloudArgs {
    /**
     * vCenter Single Sign On Identity Sources
     */
    readonly identitySources?: pulumi.Input<pulumi.Input<inputs.avs.v20200320.IdentitySource>[]>;
    /**
     * Connectivity to internet is enabled or disabled
     */
    readonly internet?: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * The default cluster used for management
     */
    readonly managementCluster: pulumi.Input<inputs.avs.v20200320.ManagementCluster>;
    /**
     * The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22
     */
    readonly networkBlock: pulumi.Input<string>;
    /**
     * Optionally, set the NSX-T Manager password when the private cloud is created
     */
    readonly nsxtPassword?: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    readonly privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The private cloud SKU
     */
    readonly sku: pulumi.Input<inputs.avs.v20200320.Sku>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Optionally, set the vCenter admin password when the private cloud is created
     */
    readonly vcenterPassword?: pulumi.Input<string>;
}
