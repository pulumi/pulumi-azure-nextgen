import * as pulumi from "@pulumi/pulumi";
export declare function getRegistration(args: GetRegistrationArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistrationResult>;
export interface GetRegistrationArgs {
    /**
     * Name of the Azure Stack registration.
     */
    readonly registrationName: string;
    /**
     * Name of the resource group.
     */
    readonly resourceGroup: string;
}
/**
 * Registration information.
 */
export interface GetRegistrationResult {
    /**
     * Specifies the billing mode for the Azure Stack registration.
     */
    readonly billingModel?: string;
    /**
     * The identifier of the registered Azure Stack.
     */
    readonly cloudId?: string;
    /**
     * The entity tag used for optimistic concurrency when modifying the resource.
     */
    readonly etag?: string;
    /**
     * Location of the resource.
     */
    readonly location: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * The object identifier associated with the Azure Stack connecting to Azure.
     */
    readonly objectId?: string;
    /**
     * Custom tags for the resource.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Type of Resource.
     */
    readonly type: string;
}
