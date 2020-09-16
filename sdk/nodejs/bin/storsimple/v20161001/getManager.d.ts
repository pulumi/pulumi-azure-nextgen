import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getManager(args: GetManagerArgs, opts?: pulumi.InvokeOptions): Promise<GetManagerResult>;
export interface GetManagerArgs {
    /**
     * The manager name
     */
    readonly managerName: string;
    /**
     * The resource group name
     */
    readonly resourceGroupName: string;
}
/**
 * The StorSimple Manager
 */
export interface GetManagerResult {
    /**
     * Specifies if the Manager is Garda or Helsinki
     */
    readonly cisIntrinsicSettings?: outputs.storsimple.v20161001.ManagerIntrinsicSettingsResponse;
    /**
     * ETag of the Manager
     */
    readonly etag?: string;
    /**
     * The Geo location of the Manager
     */
    readonly location: string;
    /**
     * The Resource Name
     */
    readonly name: string;
    /**
     * Specifies the state of the resource as it is getting provisioned. Value of "Succeeded" means the Manager was successfully created
     */
    readonly provisioningState: string;
    /**
     * Specifies the Sku
     */
    readonly sku?: outputs.storsimple.v20161001.ManagerSkuResponse;
    /**
     * Tags attached to the Manager
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The Resource type
     */
    readonly type: string;
}
