import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * App Service plan.
 */
export declare class AppServicePlan extends pulumi.CustomResource {
    /**
     * Get an existing AppServicePlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AppServicePlan;
    /**
     * Returns true if the given object is an instance of AppServicePlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AppServicePlan;
    /**
     * The time when the server farm free offer expires.
     */
    readonly freeOfferExpirationTime: pulumi.Output<string | undefined>;
    /**
     * Geographical location for the App Service plan.
     */
    readonly geoRegion: pulumi.Output<string>;
    /**
     * Specification for the App Service Environment to use for the App Service plan.
     */
    readonly hostingEnvironmentProfile: pulumi.Output<outputs.web.v20180201.HostingEnvironmentProfileResponse | undefined>;
    /**
     * If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
     */
    readonly hyperV: pulumi.Output<boolean | undefined>;
    /**
     * If <code>true</code>, this App Service Plan owns spot instances.
     */
    readonly isSpot: pulumi.Output<boolean | undefined>;
    /**
     * Obsolete: If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
     */
    readonly isXenon: pulumi.Output<boolean | undefined>;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource Location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan
     */
    readonly maximumElasticWorkerCount: pulumi.Output<number | undefined>;
    /**
     * Maximum number of instances that can be assigned to this App Service plan.
     */
    readonly maximumNumberOfWorkers: pulumi.Output<number>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Number of apps assigned to this App Service plan.
     */
    readonly numberOfSites: pulumi.Output<number>;
    /**
     * If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
     * If <code>false</code>, apps assigned to this App Service plan will scale to all instances of the plan.
     */
    readonly perSiteScaling: pulumi.Output<boolean | undefined>;
    /**
     * Provisioning state of the App Service Environment.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * If Linux app service plan <code>true</code>, <code>false</code> otherwise.
     */
    readonly reserved: pulumi.Output<boolean | undefined>;
    /**
     * Resource group of the App Service plan.
     */
    readonly resourceGroup: pulumi.Output<string>;
    /**
     * Description of a SKU for a scalable resource.
     */
    readonly sku: pulumi.Output<outputs.web.v20180201.SkuDescriptionResponse | undefined>;
    /**
     * The time when the server farm expires. Valid only if it is a spot server farm.
     */
    readonly spotExpirationTime: pulumi.Output<string | undefined>;
    /**
     * App Service plan status.
     */
    readonly status: pulumi.Output<string>;
    /**
     * App Service plan subscription.
     */
    readonly subscription: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Scaling worker count.
     */
    readonly targetWorkerCount: pulumi.Output<number | undefined>;
    /**
     * Scaling worker size ID.
     */
    readonly targetWorkerSizeId: pulumi.Output<number | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Target worker tier assigned to the App Service plan.
     */
    readonly workerTierName: pulumi.Output<string | undefined>;
    /**
     * Create a AppServicePlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppServicePlanArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a AppServicePlan resource.
 */
export interface AppServicePlanArgs {
    /**
     * The time when the server farm free offer expires.
     */
    readonly freeOfferExpirationTime?: pulumi.Input<string>;
    /**
     * Specification for the App Service Environment to use for the App Service plan.
     */
    readonly hostingEnvironmentProfile?: pulumi.Input<inputs.web.v20180201.HostingEnvironmentProfile>;
    /**
     * If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
     */
    readonly hyperV?: pulumi.Input<boolean>;
    /**
     * If <code>true</code>, this App Service Plan owns spot instances.
     */
    readonly isSpot?: pulumi.Input<boolean>;
    /**
     * Obsolete: If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
     */
    readonly isXenon?: pulumi.Input<boolean>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource Location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan
     */
    readonly maximumElasticWorkerCount?: pulumi.Input<number>;
    /**
     * Name of the App Service plan.
     */
    readonly name: pulumi.Input<string>;
    /**
     * If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
     * If <code>false</code>, apps assigned to this App Service plan will scale to all instances of the plan.
     */
    readonly perSiteScaling?: pulumi.Input<boolean>;
    /**
     * If Linux app service plan <code>true</code>, <code>false</code> otherwise.
     */
    readonly reserved?: pulumi.Input<boolean>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Description of a SKU for a scalable resource.
     */
    readonly sku?: pulumi.Input<inputs.web.v20180201.SkuDescription>;
    /**
     * The time when the server farm expires. Valid only if it is a spot server farm.
     */
    readonly spotExpirationTime?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Scaling worker count.
     */
    readonly targetWorkerCount?: pulumi.Input<number>;
    /**
     * Scaling worker size ID.
     */
    readonly targetWorkerSizeId?: pulumi.Input<number>;
    /**
     * Target worker tier assigned to the App Service plan.
     */
    readonly workerTierName?: pulumi.Input<string>;
}
