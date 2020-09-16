import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPeeringService(args: GetPeeringServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetPeeringServiceResult>;
export interface GetPeeringServiceArgs {
    /**
     * The name of the peering.
     */
    readonly peeringServiceName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Peering Service
 */
export interface GetPeeringServiceResult {
    /**
     * The location of the resource.
     */
    readonly location: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The PeeringServiceLocation of the Customer.
     */
    readonly peeringServiceLocation?: string;
    /**
     * The MAPS Provider Name.
     */
    readonly peeringServiceProvider?: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The SKU that defines the type of the peering service.
     */
    readonly sku?: outputs.peering.v20200401.PeeringServiceSkuResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource.
     */
    readonly type: string;
}
