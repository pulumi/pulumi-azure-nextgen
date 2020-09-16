import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A web app, a mobile app backend, or an API app.
 */
export declare class WebApp extends pulumi.CustomResource {
    /**
     * Get an existing WebApp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebApp;
    /**
     * Returns true if the given object is an instance of WebApp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WebApp;
    /**
     * Management information availability state for the app.
     */
    readonly availabilityState: pulumi.Output<string>;
    /**
     * <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>.
     */
    readonly clientAffinityEnabled: pulumi.Output<boolean | undefined>;
    /**
     * <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>.
     */
    readonly clientCertEnabled: pulumi.Output<boolean | undefined>;
    /**
     * client certificate authentication comma-separated exclusion paths
     */
    readonly clientCertExclusionPaths: pulumi.Output<string | undefined>;
    /**
     * If specified during app creation, the app is cloned from a source app.
     */
    readonly cloningInfo: pulumi.Output<outputs.web.v20180201.CloningInfoResponse | undefined>;
    /**
     * Size of the function container.
     */
    readonly containerSize: pulumi.Output<number | undefined>;
    /**
     * Maximum allowed daily memory-time quota (applicable on dynamic apps only).
     */
    readonly dailyMemoryTimeQuota: pulumi.Output<number | undefined>;
    /**
     * Default hostname of the app. Read-only.
     */
    readonly defaultHostName: pulumi.Output<string>;
    /**
     * <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
     * the app is not served on those hostnames.
     */
    readonly enabledHostNames: pulumi.Output<string[]>;
    /**
     * GeoDistributions for this site
     */
    readonly geoDistributions: pulumi.Output<outputs.web.v20180201.GeoDistributionResponse[] | undefined>;
    /**
     * Hostname SSL states are used to manage the SSL bindings for app's hostnames.
     */
    readonly hostNameSslStates: pulumi.Output<outputs.web.v20180201.HostNameSslStateResponse[] | undefined>;
    /**
     * Hostnames associated with the app.
     */
    readonly hostNames: pulumi.Output<string[]>;
    /**
     * <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
     *  If <code>true</code>, the app is only accessible via API management process.
     */
    readonly hostNamesDisabled: pulumi.Output<boolean | undefined>;
    /**
     * App Service Environment to use for the app.
     */
    readonly hostingEnvironmentProfile: pulumi.Output<outputs.web.v20180201.HostingEnvironmentProfileResponse | undefined>;
    /**
     * HttpsOnly: configures a web site to accept only https requests. Issues redirect for
     * http requests
     */
    readonly httpsOnly: pulumi.Output<boolean | undefined>;
    /**
     * Hyper-V sandbox.
     */
    readonly hyperV: pulumi.Output<boolean | undefined>;
    /**
     * Managed service identity.
     */
    readonly identity: pulumi.Output<outputs.web.v20180201.ManagedServiceIdentityResponse | undefined>;
    /**
     * Specifies an operation id if this site has a pending operation.
     */
    readonly inProgressOperationId: pulumi.Output<string>;
    /**
     * <code>true</code> if the app is a default container; otherwise, <code>false</code>.
     */
    readonly isDefaultContainer: pulumi.Output<boolean>;
    /**
     * Obsolete: Hyper-V sandbox.
     */
    readonly isXenon: pulumi.Output<boolean | undefined>;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Last time the app was modified, in UTC. Read-only.
     */
    readonly lastModifiedTimeUtc: pulumi.Output<string>;
    /**
     * Resource Location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Maximum number of workers.
     * This only applies to Functions container.
     */
    readonly maxNumberOfWorkers: pulumi.Output<number>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
     */
    readonly outboundIpAddresses: pulumi.Output<string>;
    /**
     * List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants. Read-only.
     */
    readonly possibleOutboundIpAddresses: pulumi.Output<string>;
    /**
     * Site redundancy mode
     */
    readonly redundancyMode: pulumi.Output<string | undefined>;
    /**
     * Name of the repository site.
     */
    readonly repositorySiteName: pulumi.Output<string>;
    /**
     * <code>true</code> if reserved; otherwise, <code>false</code>.
     */
    readonly reserved: pulumi.Output<boolean | undefined>;
    /**
     * Name of the resource group the app belongs to. Read-only.
     */
    readonly resourceGroup: pulumi.Output<string>;
    /**
     * <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
     */
    readonly scmSiteAlsoStopped: pulumi.Output<boolean | undefined>;
    /**
     * Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
     */
    readonly serverFarmId: pulumi.Output<string | undefined>;
    /**
     * Configuration of the app.
     */
    readonly siteConfig: pulumi.Output<outputs.web.v20180201.SiteConfigResponse | undefined>;
    /**
     * Status of the last deployment slot swap operation.
     */
    readonly slotSwapStatus: pulumi.Output<outputs.web.v20180201.SlotSwapStatusResponse>;
    /**
     * Current state of the app.
     */
    readonly state: pulumi.Output<string>;
    /**
     * App suspended till in case memory-time quota is exceeded.
     */
    readonly suspendedTill: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies which deployment slot this app will swap into. Read-only.
     */
    readonly targetSwapSlot: pulumi.Output<string>;
    /**
     * Azure Traffic Manager hostnames associated with the app. Read-only.
     */
    readonly trafficManagerHostNames: pulumi.Output<string[]>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * State indicating whether the app has exceeded its quota usage. Read-only.
     */
    readonly usageState: pulumi.Output<string>;
    /**
     * Create a WebApp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WebApp resource.
 */
export interface WebAppArgs {
    /**
     * <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>.
     */
    readonly clientAffinityEnabled?: pulumi.Input<boolean>;
    /**
     * <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>.
     */
    readonly clientCertEnabled?: pulumi.Input<boolean>;
    /**
     * client certificate authentication comma-separated exclusion paths
     */
    readonly clientCertExclusionPaths?: pulumi.Input<string>;
    /**
     * If specified during app creation, the app is cloned from a source app.
     */
    readonly cloningInfo?: pulumi.Input<inputs.web.v20180201.CloningInfo>;
    /**
     * Size of the function container.
     */
    readonly containerSize?: pulumi.Input<number>;
    /**
     * Maximum allowed daily memory-time quota (applicable on dynamic apps only).
     */
    readonly dailyMemoryTimeQuota?: pulumi.Input<number>;
    /**
     * <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * GeoDistributions for this site
     */
    readonly geoDistributions?: pulumi.Input<pulumi.Input<inputs.web.v20180201.GeoDistribution>[]>;
    /**
     * Hostname SSL states are used to manage the SSL bindings for app's hostnames.
     */
    readonly hostNameSslStates?: pulumi.Input<pulumi.Input<inputs.web.v20180201.HostNameSslState>[]>;
    /**
     * <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
     *  If <code>true</code>, the app is only accessible via API management process.
     */
    readonly hostNamesDisabled?: pulumi.Input<boolean>;
    /**
     * App Service Environment to use for the app.
     */
    readonly hostingEnvironmentProfile?: pulumi.Input<inputs.web.v20180201.HostingEnvironmentProfile>;
    /**
     * HttpsOnly: configures a web site to accept only https requests. Issues redirect for
     * http requests
     */
    readonly httpsOnly?: pulumi.Input<boolean>;
    /**
     * Hyper-V sandbox.
     */
    readonly hyperV?: pulumi.Input<boolean>;
    /**
     * Managed service identity.
     */
    readonly identity?: pulumi.Input<inputs.web.v20180201.ManagedServiceIdentity>;
    /**
     * Obsolete: Hyper-V sandbox.
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
     * Unique name of the app to create or update. To create or update a deployment slot, use the {slot} parameter.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Site redundancy mode
     */
    readonly redundancyMode?: pulumi.Input<string>;
    /**
     * <code>true</code> if reserved; otherwise, <code>false</code>.
     */
    readonly reserved?: pulumi.Input<boolean>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
     */
    readonly scmSiteAlsoStopped?: pulumi.Input<boolean>;
    /**
     * Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
     */
    readonly serverFarmId?: pulumi.Input<string>;
    /**
     * Configuration of the app.
     */
    readonly siteConfig?: pulumi.Input<inputs.web.v20180201.SiteConfig>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
