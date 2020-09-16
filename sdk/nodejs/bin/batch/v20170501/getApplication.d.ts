import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getApplication(args: GetApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationResult>;
export interface GetApplicationArgs {
    /**
     * The name of the Batch account.
     */
    readonly accountName: string;
    /**
     * The ID of the application.
     */
    readonly applicationId: string;
    /**
     * The name of the resource group that contains the Batch account.
     */
    readonly resourceGroupName: string;
}
/**
 * Contains information about an application in a Batch account.
 */
export interface GetApplicationResult {
    /**
     * A value indicating whether packages within the application may be overwritten using the same version string.
     */
    readonly allowUpdates?: boolean;
    /**
     * The package to use if a client requests the application but does not specify a version.
     */
    readonly defaultVersion?: string;
    /**
     * The display name for the application.
     */
    readonly displayName?: string;
    /**
     * The list of packages under this application.
     */
    readonly packages?: outputs.batch.v20170501.ApplicationPackageResponse[];
}
