import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult>;
export interface GetAccountArgs {
    /**
     * The name of the share account.
     */
    readonly accountName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * An account data transfer object.
 */
export interface GetAccountResult {
    /**
     * Time at which the account was created.
     */
    readonly createdAt: string;
    /**
     * Identity Info on the Account
     */
    readonly identity: outputs.datashare.v20191101.IdentityResponse;
    /**
     * Location of the azure resource.
     */
    readonly location?: string;
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Provisioning state of the Account
     */
    readonly provisioningState: string;
    /**
     * Tags on the azure resource.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Type of the azure resource
     */
    readonly type: string;
    /**
     * Email of the user who created the resource
     */
    readonly userEmail: string;
    /**
     * Name of the user who created the resource
     */
    readonly userName: string;
}
