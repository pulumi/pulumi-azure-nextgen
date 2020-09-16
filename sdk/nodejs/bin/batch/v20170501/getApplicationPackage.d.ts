import * as pulumi from "@pulumi/pulumi";
export declare function getApplicationPackage(args: GetApplicationPackageArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationPackageResult>;
export interface GetApplicationPackageArgs {
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
    /**
     * The version of the application.
     */
    readonly version: string;
}
/**
 * An application package which represents a particular version of an application.
 */
export interface GetApplicationPackageResult {
    /**
     * The format of the application package, if the package is active.
     */
    readonly format: string;
    /**
     * The time at which the package was last activated, if the package is active.
     */
    readonly lastActivationTime: string;
    /**
     * The current state of the application package.
     */
    readonly state: string;
    /**
     * The URL for the application package in Azure Storage.
     */
    readonly storageUrl: string;
    /**
     * The UTC time at which the Azure Storage URL will expire.
     */
    readonly storageUrlExpiry: string;
    /**
     * The version of the application package.
     */
    readonly version: string;
}
