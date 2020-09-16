import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listIotHubResourceKeys(args: ListIotHubResourceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListIotHubResourceKeysResult>;
export interface ListIotHubResourceKeysArgs {
    /**
     * The name of the resource group that contains the IoT hub.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the IoT hub.
     */
    readonly resourceName: string;
}
/**
 * The list of shared access policies with a next link.
 */
export interface ListIotHubResourceKeysResult {
    /**
     * The next link.
     */
    readonly nextLink: string;
    /**
     * The list of shared access policies.
     */
    readonly value?: outputs.devices.v20180401.SharedAccessSignatureAuthorizationRuleResponse[];
}
