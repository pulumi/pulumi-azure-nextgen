import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getADCCatalog(args: GetADCCatalogArgs, opts?: pulumi.InvokeOptions): Promise<GetADCCatalogResult>;
export interface GetADCCatalogArgs {
    /**
     * The name of the data catalog in the specified subscription and resource group.
     */
    readonly catalogName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}
/**
 * Azure Data Catalog.
 */
export interface GetADCCatalogResult {
    /**
     * Azure data catalog admin list.
     */
    readonly admins?: outputs.datacatalog.v20160330.PrincipalsResponse[];
    /**
     * Automatic unit adjustment enabled or not.
     */
    readonly enableAutomaticUnitAdjustment?: boolean;
    /**
     * Resource etag
     */
    readonly etag?: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Azure data catalog SKU.
     */
    readonly sku?: string;
    /**
     * Azure data catalog provision status.
     */
    readonly successfullyProvisioned?: boolean;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Azure data catalog units.
     */
    readonly units?: number;
    /**
     * Azure data catalog user list.
     */
    readonly users?: outputs.datacatalog.v20160330.PrincipalsResponse[];
}
