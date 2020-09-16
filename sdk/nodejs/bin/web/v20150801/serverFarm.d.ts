import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * App Service Plan Model
 */
export declare class ServerFarm extends pulumi.CustomResource {
    /**
     * Get an existing ServerFarm resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerFarm;
    /**
     * Returns true if the given object is an instance of ServerFarm.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ServerFarm;
    /**
     * App Service Plan administration site
     */
    readonly adminSiteName: pulumi.Output<string | undefined>;
    /**
     * Geographical location for the App Service Plan
     */
    readonly geoRegion: pulumi.Output<string>;
    /**
     * Specification for the hosting environment (App Service Environment) to use for the App Service Plan
     */
    readonly hostingEnvironmentProfile: pulumi.Output<outputs.web.v20150801.HostingEnvironmentProfileResponse | undefined>;
    /**
     * Kind of resource
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Maximum number of instances that can be assigned to this App Service Plan
     */
    readonly maximumNumberOfWorkers: pulumi.Output<number | undefined>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Number of web apps assigned to this App Service Plan
     */
    readonly numberOfSites: pulumi.Output<number>;
    /**
     * If True apps assigned to this App Service Plan can be scaled independently
     *             If False apps assigned to this App Service Plan will scale to all instances of the plan
     */
    readonly perSiteScaling: pulumi.Output<boolean | undefined>;
    /**
     * Enables creation of a Linux App Service Plan
     */
    readonly reserved: pulumi.Output<boolean | undefined>;
    /**
     * Resource group of the server farm
     */
    readonly resourceGroup: pulumi.Output<string>;
    /**
     * Describes a sku for a scalable resource
     */
    readonly sku: pulumi.Output<outputs.web.v20150801.SkuDescriptionResponse | undefined>;
    /**
     * App Service Plan Status
     */
    readonly status: pulumi.Output<string>;
    /**
     * App Service Plan Subscription
     */
    readonly subscription: pulumi.Output<string>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Target worker tier assigned to the App Service Plan
     */
    readonly workerTierName: pulumi.Output<string | undefined>;
    /**
     * Create a ServerFarm resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerFarmArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ServerFarm resource.
 */
export interface ServerFarmArgs {
    /**
     * App Service Plan administration site
     */
    readonly adminSiteName?: pulumi.Input<string>;
    /**
     * OBSOLETE: If true, allow pending state for App Service Plan
     */
    readonly allowPendingState?: pulumi.Input<boolean>;
    /**
     * Specification for the hosting environment (App Service Environment) to use for the App Service Plan
     */
    readonly hostingEnvironmentProfile?: pulumi.Input<inputs.web.v20150801.HostingEnvironmentProfile>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Kind of resource
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Maximum number of instances that can be assigned to this App Service Plan
     */
    readonly maximumNumberOfWorkers?: pulumi.Input<number>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Input<string>;
    /**
     * If True apps assigned to this App Service Plan can be scaled independently
     *             If False apps assigned to this App Service Plan will scale to all instances of the plan
     */
    readonly perSiteScaling?: pulumi.Input<boolean>;
    /**
     * Enables creation of a Linux App Service Plan
     */
    readonly reserved?: pulumi.Input<boolean>;
    /**
     * Name of resource group
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Describes a sku for a scalable resource
     */
    readonly sku?: pulumi.Input<inputs.web.v20150801.SkuDescription>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Resource type
     */
    readonly type?: pulumi.Input<string>;
    /**
     * Target worker tier assigned to the App Service Plan
     */
    readonly workerTierName?: pulumi.Input<string>;
}
