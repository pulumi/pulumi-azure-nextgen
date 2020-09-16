import * as pulumi from "@pulumi/pulumi";
export declare function getApplicationPackage(args: GetApplicationPackageArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationPackageResult>;
export interface GetApplicationPackageArgs {
    /**
     * The name of the Batch account.
     */
    readonly accountName: string;
    /**
     * The name of the application. This must be unique within the account.
     */
    readonly applicationName: string;
    /**
     * The name of the resource group that contains the Batch account.
     */
    readonly resourceGroupName: string;
    /**
     * The version of the application.
     */
    readonly versionName: string;
}
/**
 * An application package which represents a particular version of an application.
 */
export interface GetApplicationPackageResult {
    /**
     * The ETag of the resource, used for concurrency statements.
     */
    readonly etag: string;
    /**
     * The format of the application package, if the package is active.
     */
    readonly format: string;
    /**
     * The time at which the package was last activated, if the package is active.
     */
    readonly lastActivationTime: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
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
     * The type of the resource.
     */
    readonly type: string;
}
