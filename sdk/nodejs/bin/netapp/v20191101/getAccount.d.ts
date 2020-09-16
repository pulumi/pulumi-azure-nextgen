import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult>;
export interface GetAccountArgs {
    /**
     * The name of the NetApp account
     */
    readonly accountName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * NetApp account resource
 */
export interface GetAccountResult {
    /**
     * Active Directories
     */
    readonly activeDirectories?: outputs.netapp.v20191101.ActiveDirectoryResponse[];
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
}
