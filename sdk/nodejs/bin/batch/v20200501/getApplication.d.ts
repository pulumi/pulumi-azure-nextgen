import * as pulumi from "@pulumi/pulumi";
export declare function getApplication(args: GetApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationResult>;
export interface GetApplicationArgs {
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
     * The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
     */
    readonly defaultVersion?: string;
    /**
     * The display name for the application.
     */
    readonly displayName?: string;
    /**
     * The ETag of the resource, used for concurrency statements.
     */
    readonly etag: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
