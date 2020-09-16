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
 * The StorSimple Manager.
 */
export interface GetManagerResult {
    /**
     * Represents the type of StorSimple Manager.
     */
    readonly cisIntrinsicSettings?: outputs.storsimple.v20170601.ManagerIntrinsicSettingsResponse;
    /**
     * The etag of the manager.
     */
    readonly etag?: string;
    /**
     * The geo location of the resource.
     */
    readonly location: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Specifies the state of the resource as it is getting provisioned. Value of "Succeeded" means the Manager was successfully created.
     */
    readonly provisioningState?: string;
    /**
     * Specifies the Sku.
     */
    readonly sku?: outputs.storsimple.v20170601.ManagerSkuResponse;
    /**
     * The tags attached to the resource.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The resource type.
     */
    readonly type: string;
}
