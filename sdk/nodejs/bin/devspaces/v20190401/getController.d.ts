import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getController(args: GetControllerArgs, opts?: pulumi.InvokeOptions): Promise<GetControllerResult>;
export interface GetControllerArgs {
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * Resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
export interface GetControllerResult {
    /**
     * DNS name for accessing DataPlane services
     */
    readonly dataPlaneFqdn: string;
    /**
     * DNS suffix for public endpoints running in the Azure Dev Spaces Controller.
     */
    readonly hostSuffix: string;
    /**
     * Region where the Azure resource is located.
     */
    readonly location: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the Azure Dev Spaces Controller.
     */
    readonly provisioningState: string;
    /**
     * Model representing SKU for Azure Dev Spaces Controller.
     */
    readonly sku: outputs.devspaces.v20190401.SkuResponse;
    /**
     * Tags for the Azure resource.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * DNS of the target container host's API server
     */
    readonly targetContainerHostApiServerFqdn: string;
    /**
     * Credentials of the target container host (base64).
     */
    readonly targetContainerHostCredentialsBase64: string;
    /**
     * Resource ID of the target container host
     */
    readonly targetContainerHostResourceId: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
