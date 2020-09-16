import * as pulumi from "@pulumi/pulumi";
export declare function getService(args: GetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceResult>;
export interface GetServiceArgs {
    /**
     * The name of the Windows IoT Device Service.
     */
    readonly deviceName: string;
    /**
     * The name of the resource group that contains the Windows IoT Device Service.
     */
    readonly resourceGroupName: string;
}
/**
 * The description of the Windows IoT Device Service.
 */
export interface GetServiceResult {
    /**
     * Windows IoT Device Service OEM AAD domain
     */
    readonly adminDomainName?: string;
    /**
     * Windows IoT Device Service ODM AAD domain
     */
    readonly billingDomainName?: string;
    /**
     * The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
     */
    readonly etag?: string;
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Windows IoT Device Service notes.
     */
    readonly notes?: string;
    /**
     * Windows IoT Device Service device allocation,
     */
    readonly quantity?: number;
    /**
     * Windows IoT Device Service start date,
     */
    readonly startDate: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource.
     */
    readonly type: string;
}
