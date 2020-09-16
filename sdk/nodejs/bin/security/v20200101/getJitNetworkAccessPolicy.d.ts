import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getJitNetworkAccessPolicy(args: GetJitNetworkAccessPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetJitNetworkAccessPolicyResult>;
export interface GetJitNetworkAccessPolicyArgs {
    /**
     * The location where ASC stores the data of the subscription. can be retrieved from Get locations
     */
    readonly ascLocation: string;
    /**
     * Name of a Just-in-Time access configuration policy.
     */
    readonly jitNetworkAccessPolicyName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}
export interface GetJitNetworkAccessPolicyResult {
    /**
     * Kind of the resource
     */
    readonly kind?: string;
    /**
     * Location where the resource is stored
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Gets the provisioning state of the Just-in-Time policy.
     */
    readonly provisioningState: string;
    readonly requests?: outputs.security.v20200101.JitNetworkAccessRequestResponse[];
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Configurations for Microsoft.Compute/virtualMachines resource type.
     */
    readonly virtualMachines: outputs.security.v20200101.JitNetworkAccessPolicyVirtualMachineResponse[];
}
