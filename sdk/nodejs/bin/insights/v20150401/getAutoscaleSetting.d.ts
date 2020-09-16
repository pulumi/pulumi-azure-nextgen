import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getAutoscaleSetting(args: GetAutoscaleSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetAutoscaleSettingResult>;
export interface GetAutoscaleSettingArgs {
    /**
     * The autoscale setting name.
     */
    readonly autoscaleSettingName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * The autoscale setting resource.
 */
export interface GetAutoscaleSettingResult {
    /**
     * the enabled flag. Specifies whether automatic scaling is enabled for the resource. The default value is 'true'.
     */
    readonly enabled?: boolean;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * the collection of notifications.
     */
    readonly notifications?: outputs.insights.v20150401.AutoscaleNotificationResponse[];
    /**
     * the collection of automatic scaling profiles that specify different scaling parameters for different time periods. A maximum of 20 profiles can be specified.
     */
    readonly profiles: outputs.insights.v20150401.AutoscaleProfileResponse[];
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * the resource identifier of the resource that the autoscale setting should be added to.
     */
    readonly targetResourceUri?: string;
    /**
     * Azure resource type
     */
    readonly type: string;
}
