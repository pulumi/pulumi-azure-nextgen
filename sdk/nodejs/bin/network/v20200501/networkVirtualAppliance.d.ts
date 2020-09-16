import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * NetworkVirtualAppliance Resource.
 */
export declare class NetworkVirtualAppliance extends pulumi.CustomResource {
    /**
     * Get an existing NetworkVirtualAppliance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkVirtualAppliance;
    /**
     * Returns true if the given object is an instance of NetworkVirtualAppliance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NetworkVirtualAppliance;
    /**
     * BootStrapConfigurationBlobs storage URLs.
     */
    readonly bootStrapConfigurationBlobs: pulumi.Output<string[] | undefined>;
    /**
     * CloudInitConfiguration string in plain text.
     */
    readonly cloudInitConfiguration: pulumi.Output<string | undefined>;
    /**
     * CloudInitConfigurationBlob storage URLs.
     */
    readonly cloudInitConfigurationBlobs: pulumi.Output<string[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The service principal that has read access to cloud-init and config blob.
     */
    readonly identity: pulumi.Output<outputs.network.v20200501.ManagedServiceIdentityResponse | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Network Virtual Appliance SKU.
     */
    readonly nvaSku: pulumi.Output<outputs.network.v20200501.VirtualApplianceSkuPropertiesResponse | undefined>;
    /**
     * The provisioning state of the resource.
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
     * VirtualAppliance ASN.
     */
    readonly virtualApplianceAsn: pulumi.Output<number | undefined>;
    /**
     * List of Virtual Appliance Network Interfaces.
     */
    readonly virtualApplianceNics: pulumi.Output<outputs.network.v20200501.VirtualApplianceNicPropertiesResponse[]>;
    /**
     * List of references to VirtualApplianceSite.
     */
    readonly virtualApplianceSites: pulumi.Output<outputs.network.v20200501.SubResourceResponse[]>;
    /**
     * The Virtual Hub where Network Virtual Appliance is being deployed.
     */
    readonly virtualHub: pulumi.Output<outputs.network.v20200501.SubResourceResponse | undefined>;
    /**
     * Create a NetworkVirtualAppliance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkVirtualApplianceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a NetworkVirtualAppliance resource.
 */
export interface NetworkVirtualApplianceArgs {
    /**
     * BootStrapConfigurationBlobs storage URLs.
     */
    readonly bootStrapConfigurationBlobs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * CloudInitConfiguration string in plain text.
     */
    readonly cloudInitConfiguration?: pulumi.Input<string>;
    /**
     * CloudInitConfigurationBlob storage URLs.
     */
    readonly cloudInitConfigurationBlobs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The service principal that has read access to cloud-init and config blob.
     */
    readonly identity?: pulumi.Input<inputs.network.v20200501.ManagedServiceIdentity>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of Network Virtual Appliance.
     */
    readonly networkVirtualApplianceName: pulumi.Input<string>;
    /**
     * Network Virtual Appliance SKU.
     */
    readonly nvaSku?: pulumi.Input<inputs.network.v20200501.VirtualApplianceSkuProperties>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * VirtualAppliance ASN.
     */
    readonly virtualApplianceAsn?: pulumi.Input<number>;
    /**
     * The Virtual Hub where Network Virtual Appliance is being deployed.
     */
    readonly virtualHub?: pulumi.Input<inputs.network.v20200501.SubResource>;
}
