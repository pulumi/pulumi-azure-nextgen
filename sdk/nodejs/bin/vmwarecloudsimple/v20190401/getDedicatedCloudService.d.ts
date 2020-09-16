import * as pulumi from "@pulumi/pulumi";
export declare function getDedicatedCloudService(args: GetDedicatedCloudServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetDedicatedCloudServiceResult>;
export interface GetDedicatedCloudServiceArgs {
    /**
     * dedicated cloud Service name
     */
    readonly dedicatedCloudServiceName: string;
    /**
     * The name of the resource group
     */
    readonly resourceGroupName: string;
}
/**
 * Dedicated cloud service model
 */
export interface GetDedicatedCloudServiceResult {
    /**
     * gateway Subnet for the account. It will collect the subnet address and always treat it as /28
     */
    readonly gatewaySubnet: string;
    /**
     * indicates whether account onboarded or not in a given region
     */
    readonly isAccountOnboarded: string;
    /**
     * Azure region
     */
    readonly location: string;
    /**
     * {dedicatedCloudServiceName}
     */
    readonly name: string;
    /**
     * total nodes purchased
     */
    readonly nodes: number;
    /**
     * link to a service management web portal
     */
    readonly serviceURL: string;
    /**
     * The list of tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * {resourceProviderNamespace}/{resourceType}
     */
    readonly type: string;
}
