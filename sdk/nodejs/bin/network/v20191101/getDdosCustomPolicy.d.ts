import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDdosCustomPolicy(args: GetDdosCustomPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetDdosCustomPolicyResult>;
export interface GetDdosCustomPolicyArgs {
    /**
     * The name of the DDoS custom policy.
     */
    readonly ddosCustomPolicyName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * A DDoS custom policy in a resource group.
 */
export interface GetDdosCustomPolicyResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The protocol-specific DDoS policy customization parameters.
     */
    readonly protocolCustomSettings?: outputs.network.v20191101.ProtocolCustomSettingsFormatResponse[];
    /**
     * The provisioning state of the DDoS custom policy resource.
     */
    readonly provisioningState: string;
    /**
     * The list of public IPs associated with the DDoS custom policy resource. This list is read-only.
     */
    readonly publicIPAddresses: outputs.network.v20191101.SubResourceResponse[];
    /**
     * The resource GUID property of the DDoS custom policy resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
     */
    readonly resourceGuid: string;
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
}
