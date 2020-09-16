import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listIotDpsResourceKeys(args: ListIotDpsResourceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListIotDpsResourceKeysResult>;
export interface ListIotDpsResourceKeysArgs {
    /**
     * The provisioning service name to get the shared access keys for.
     */
    readonly provisioningServiceName: string;
    /**
     * resource group name
     */
    readonly resourceGroupName: string;
}
/**
 * List of shared access keys.
 */
export interface ListIotDpsResourceKeysResult {
    /**
     * The next link.
     */
    readonly nextLink: string;
    /**
     * The list of shared access policies.
     */
    readonly value?: outputs.devices.v20171115.SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionResponse[];
}
