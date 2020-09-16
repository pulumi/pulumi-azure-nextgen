import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getServerFarm(args: GetServerFarmArgs, opts?: pulumi.InvokeOptions): Promise<GetServerFarmResult>;
export interface GetServerFarmArgs {
    /**
     * Name of App Service Plan
     */
    readonly name: string;
    /**
     * Name of resource group
     */
    readonly resourceGroupName: string;
}
/**
 * App Service Plan Model
 */
export interface GetServerFarmResult {
    /**
     * App Service Plan administration site
     */
    readonly adminSiteName?: string;
    /**
     * Geographical location for the App Service Plan
     */
    readonly geoRegion: string;
    /**
     * Specification for the hosting environment (App Service Environment) to use for the App Service Plan
     */
    readonly hostingEnvironmentProfile?: outputs.web.v20150801.HostingEnvironmentProfileResponse;
    /**
     * Kind of resource
     */
    readonly kind?: string;
    /**
     * Resource Location
     */
    readonly location: string;
    /**
     * Maximum number of instances that can be assigned to this App Service Plan
     */
    readonly maximumNumberOfWorkers?: number;
    /**
     * Resource Name
     */
    readonly name?: string;
    /**
     * Number of web apps assigned to this App Service Plan
     */
    readonly numberOfSites: number;
    /**
     * If True apps assigned to this App Service Plan can be scaled independently
     *             If False apps assigned to this App Service Plan will scale to all instances of the plan
     */
    readonly perSiteScaling?: boolean;
    /**
     * Enables creation of a Linux App Service Plan
     */
    readonly reserved?: boolean;
    /**
     * Resource group of the server farm
     */
    readonly resourceGroup: string;
    /**
     * Describes a sku for a scalable resource
     */
    readonly sku?: outputs.web.v20150801.SkuDescriptionResponse;
    /**
     * App Service Plan Status
     */
    readonly status: string;
    /**
     * App Service Plan Subscription
     */
    readonly subscription: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type?: string;
    /**
     * Target worker tier assigned to the App Service Plan
     */
    readonly workerTierName?: string;
}
