import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Represents a web app
 */
export declare class SiteSlot extends pulumi.CustomResource {
    /**
     * Get an existing SiteSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SiteSlot;
    /**
     * Returns true if the given object is an instance of SiteSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SiteSlot;
    /**
     * Management information availability state for the web app. Possible values are Normal or Limited.
     *             Normal means that the site is running correctly and that management information for the site is available.
     *             Limited means that only partial management information for the site is available and that detailed site information is unavailable.
     */
    readonly availabilityState: pulumi.Output<string>;
    /**
     * Specifies if the client affinity is enabled when load balancing http request for multiple instances of the web app
     */
    readonly clientAffinityEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies if the client certificate is enabled for the web app
     */
    readonly clientCertEnabled: pulumi.Output<boolean | undefined>;
    /**
     * This is only valid for web app creation. If specified, web app is cloned from
     *             a source web app
     */
    readonly cloningInfo: pulumi.Output<outputs.web.v20150801.CloningInfoResponse | undefined>;
    /**
     * Size of a function container
     */
    readonly containerSize: pulumi.Output<number | undefined>;
    /**
     * Default hostname of the web app
     */
    readonly defaultHostName: pulumi.Output<string>;
    /**
     * True if the site is enabled; otherwise, false. Setting this  value to false disables the site (takes the site off line).
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Hostnames for the web app that are enabled. Hostnames need to be assigned and enabled. If some hostnames are assigned but not enabled
     *             the app is not served on those hostnames
     */
    readonly enabledHostNames: pulumi.Output<string[]>;
    /**
     * Name of gateway app associated with web app
     */
    readonly gatewaySiteName: pulumi.Output<string | undefined>;
    /**
     * Hostname SSL states are  used to manage the SSL bindings for site's hostnames.
     */
    readonly hostNameSslStates: pulumi.Output<outputs.web.v20150801.HostNameSslStateResponse[] | undefined>;
    /**
     * Hostnames associated with web app
     */
    readonly hostNames: pulumi.Output<string[]>;
    /**
     * Specifies if the public hostnames are disabled the web app.
     *             If set to true the app is only accessible via API Management process
     */
    readonly hostNamesDisabled: pulumi.Output<boolean | undefined>;
    /**
     * Specification for the hosting environment (App Service Environment) to use for the web app
     */
    readonly hostingEnvironmentProfile: pulumi.Output<outputs.web.v20150801.HostingEnvironmentProfileResponse | undefined>;
    /**
     * Site is a default container
     */
    readonly isDefaultContainer: pulumi.Output<boolean>;
    /**
     * Kind of resource
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Last time web app was modified in UTC
     */
    readonly lastModifiedTimeUtc: pulumi.Output<string>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Maximum number of workers
     *             This only applies to function container
     */
    readonly maxNumberOfWorkers: pulumi.Output<number | undefined>;
    readonly microService: pulumi.Output<string | undefined>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * List of comma separated IP addresses that this web app uses for outbound connections. Those can be used when configuring firewall rules for databases accessed by this web app.
     */
    readonly outboundIpAddresses: pulumi.Output<string>;
    /**
     * If set indicates whether web app is deployed as a premium app
     */
    readonly premiumAppDeployed: pulumi.Output<boolean>;
    /**
     * Name of repository site
     */
    readonly repositorySiteName: pulumi.Output<string>;
    /**
     * Resource group web app belongs to
     */
    readonly resourceGroup: pulumi.Output<string>;
    /**
     * If set indicates whether to stop SCM (KUDU) site when the web app is stopped. Default is false.
     */
    readonly scmSiteAlsoStopped: pulumi.Output<boolean | undefined>;
    readonly serverFarmId: pulumi.Output<string | undefined>;
    /**
     * Configuration of web app
     */
    readonly siteConfig: pulumi.Output<outputs.web.v20150801.SiteConfigResponse | undefined>;
    /**
     * State of the web app
     */
    readonly state: pulumi.Output<string>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Read-only property that specifies which slot this app will swap into
     */
    readonly targetSwapSlot: pulumi.Output<string>;
    /**
     * Read-only list of Azure Traffic manager hostnames associated with web app
     */
    readonly trafficManagerHostNames: pulumi.Output<string[]>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * State indicating whether web app has exceeded its quota usage
     */
    readonly usageState: pulumi.Output<string>;
    /**
     * Create a SiteSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteSlotArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a SiteSlot resource.
 */
export interface SiteSlotArgs {
    /**
     * Specifies if the client affinity is enabled when load balancing http request for multiple instances of the web app
     */
    readonly clientAffinityEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies if the client certificate is enabled for the web app
     */
    readonly clientCertEnabled?: pulumi.Input<boolean>;
    /**
     * This is only valid for web app creation. If specified, web app is cloned from
     *             a source web app
     */
    readonly cloningInfo?: pulumi.Input<inputs.web.v20150801.CloningInfo>;
    /**
     * Size of a function container
     */
    readonly containerSize?: pulumi.Input<number>;
    /**
     * True if the site is enabled; otherwise, false. Setting this  value to false disables the site (takes the site off line).
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * If true, web app hostname is force registered with DNS
     */
    readonly forceDnsRegistration?: pulumi.Input<string>;
    /**
     * Name of gateway app associated with web app
     */
    readonly gatewaySiteName?: pulumi.Input<string>;
    /**
     * Hostname SSL states are  used to manage the SSL bindings for site's hostnames.
     */
    readonly hostNameSslStates?: pulumi.Input<pulumi.Input<inputs.web.v20150801.HostNameSslState>[]>;
    /**
     * Specifies if the public hostnames are disabled the web app.
     *             If set to true the app is only accessible via API Management process
     */
    readonly hostNamesDisabled?: pulumi.Input<boolean>;
    /**
     * Specification for the hosting environment (App Service Environment) to use for the web app
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
     * Maximum number of workers
     *             This only applies to function container
     */
    readonly maxNumberOfWorkers?: pulumi.Input<number>;
    readonly microService?: pulumi.Input<string>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of the resource group
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * If set indicates whether to stop SCM (KUDU) site when the web app is stopped. Default is false.
     */
    readonly scmSiteAlsoStopped?: pulumi.Input<boolean>;
    readonly serverFarmId?: pulumi.Input<string>;
    /**
     * Configuration of web app
     */
    readonly siteConfig?: pulumi.Input<inputs.web.v20150801.SiteConfig>;
    /**
     * If true, custom (non *.azurewebsites.net) domains associated with web app are not verified.
     */
    readonly skipCustomDomainVerification?: pulumi.Input<string>;
    /**
     * If true web app hostname is not registered with DNS on creation. This parameter is
     *             only used for app creation
     */
    readonly skipDnsRegistration?: pulumi.Input<string>;
    /**
     * Name of web app slot. If not specified then will default to production slot.
     */
    readonly slot: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Time to live in seconds for web app's default domain name
     */
    readonly ttlInSeconds?: pulumi.Input<string>;
    /**
     * Resource type
     */
    readonly type?: pulumi.Input<string>;
}
