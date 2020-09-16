import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getOuContainer(args: GetOuContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetOuContainerResult>;
export interface GetOuContainerArgs {
    /**
     * The name of the domain service.
     */
    readonly domainServiceName: string;
    /**
     * The name of the OuContainer.
     */
    readonly ouContainerName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}
/**
 * Resource for OuContainer.
 */
export interface GetOuContainerResult {
    /**
     * The list of container accounts
     */
    readonly accounts?: outputs.aad.v20170601.ContainerAccountResponse[];
    /**
     * The OuContainer name
     */
    readonly containerId: string;
    /**
     * The Deployment id
     */
    readonly deploymentId: string;
    /**
     * The domain name of Domain Services.
     */
    readonly domainName: string;
    /**
     * Resource etag
     */
    readonly etag?: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Status of OuContainer instance
     */
    readonly serviceStatus: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Azure Active Directory tenant id
     */
    readonly tenantId: string;
    /**
     * Resource type
     */
    readonly type: string;
}
