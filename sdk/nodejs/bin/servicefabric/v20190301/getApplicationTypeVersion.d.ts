import * as pulumi from "@pulumi/pulumi";
export declare function getApplicationTypeVersion(args: GetApplicationTypeVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationTypeVersionResult>;
export interface GetApplicationTypeVersionArgs {
    /**
     * The name of the application type name resource.
     */
    readonly applicationTypeName: string;
    /**
     * The name of the cluster resource.
     */
    readonly clusterName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The application type version.
     */
    readonly version: string;
}
/**
 * An application type version resource for the specified application type name resource.
 */
export interface GetApplicationTypeVersionResult {
    /**
     * The URL to the application package
     */
    readonly appPackageUrl: string;
    /**
     * List of application type parameters that can be overridden when creating or updating the application.
     */
    readonly defaultParameterList: {
        [key: string]: string;
    };
    /**
     * Azure resource etag.
     */
    readonly etag: string;
    /**
     * It will be deprecated in New API, resource location depends on the parent resource.
     */
    readonly location?: string;
    /**
     * Azure resource name.
     */
    readonly name: string;
    /**
     * The current deployment or provisioning state, which only appears in the response
     */
    readonly provisioningState: string;
    /**
     * Azure resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Azure resource type.
     */
    readonly type: string;
}
