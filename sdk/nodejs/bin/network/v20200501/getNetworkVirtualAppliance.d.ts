import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getNetworkVirtualAppliance(args: GetNetworkVirtualApplianceArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkVirtualApplianceResult>;
export interface GetNetworkVirtualApplianceArgs {
    /**
     * Expands referenced resources.
     */
    readonly expand?: string;
    /**
     * The name of Network Virtual Appliance.
     */
    readonly networkVirtualApplianceName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * NetworkVirtualAppliance Resource.
 */
export interface GetNetworkVirtualApplianceResult {
    /**
     * BootStrapConfigurationBlobs storage URLs.
     */
    readonly bootStrapConfigurationBlobs?: string[];
    /**
     * CloudInitConfiguration string in plain text.
     */
    readonly cloudInitConfiguration?: string;
    /**
     * CloudInitConfigurationBlob storage URLs.
     */
    readonly cloudInitConfigurationBlobs?: string[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The service principal that has read access to cloud-init and config blob.
     */
    readonly identity?: outputs.network.v20200501.ManagedServiceIdentityResponse;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Network Virtual Appliance SKU.
     */
    readonly nvaSku?: outputs.network.v20200501.VirtualApplianceSkuPropertiesResponse;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * VirtualAppliance ASN.
     */
    readonly virtualApplianceAsn?: number;
    /**
     * List of Virtual Appliance Network Interfaces.
     */
    readonly virtualApplianceNics: outputs.network.v20200501.VirtualApplianceNicPropertiesResponse[];
    /**
     * List of references to VirtualApplianceSite.
     */
    readonly virtualApplianceSites: outputs.network.v20200501.SubResourceResponse[];
    /**
     * The Virtual Hub where Network Virtual Appliance is being deployed.
     */
    readonly virtualHub?: outputs.network.v20200501.SubResourceResponse;
}
