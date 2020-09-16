import * as pulumi from "@pulumi/pulumi";
export declare function getWebAppPublicCertificateSlot(args: GetWebAppPublicCertificateSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppPublicCertificateSlotResult>;
export interface GetWebAppPublicCertificateSlotArgs {
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Public certificate name.
     */
    readonly publicCertificateName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API the named binding for the production slot.
     */
    readonly slot: string;
}
/**
 * Public certificate object
 */
export interface GetWebAppPublicCertificateSlotResult {
    /**
     * Public Certificate byte array
     */
    readonly blob?: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Public Certificate Location
     */
    readonly publicCertificateLocation?: string;
    /**
     * Certificate Thumbprint
     */
    readonly thumbprint: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
