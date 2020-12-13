// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Friendly Routes name mapping to the any Routes or secret related information.
 */
export class Route extends pulumi.CustomResource {
    /**
     * Get an existing Route resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Route {
        return new Route(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:cdn/v20200901:Route';

    /**
     * Returns true if the given object is an instance of Route.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Route {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Route.__pulumiType;
    }

    /**
     * compression settings.
     */
    public readonly compressionSettings!: pulumi.Output<outputs.cdn.v20200901.CompressionSettingsResponse[] | undefined>;
    /**
     * Domains referenced by this endpoint.
     */
    public readonly customDomains!: pulumi.Output<outputs.cdn.v20200901.ResourceReferenceResponse[] | undefined>;
    public /*out*/ readonly deploymentStatus!: pulumi.Output<string>;
    /**
     * Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
     */
    public readonly enabledState!: pulumi.Output<string | undefined>;
    /**
     * Protocol this rule will use when forwarding traffic to backends.
     */
    public readonly forwardingProtocol!: pulumi.Output<string | undefined>;
    /**
     * Whether to automatically redirect HTTP traffic to HTTPS traffic. Note that this is a easy way to set up this rule and it will be the first rule that gets executed.
     */
    public readonly httpsRedirect!: pulumi.Output<string | undefined>;
    /**
     * whether this route will be linked to the default endpoint domain.
     */
    public readonly linkToDefaultDomain!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies what scenario the customer wants this AzureFrontDoor endpoint to optimize for, e.g. Download, Media services. With this information, AzureFrontDoor can apply scenario driven optimization.
     */
    public readonly optimizationType!: pulumi.Output<string | undefined>;
    /**
     * A reference to the origin group.
     */
    public readonly originGroup!: pulumi.Output<outputs.cdn.v20200901.ResourceReferenceResponse>;
    /**
     * A directory path on the origin that AzureFrontDoor can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
     */
    public readonly originPath!: pulumi.Output<string | undefined>;
    /**
     * The route patterns of the rule.
     */
    public readonly patternsToMatch!: pulumi.Output<string[] | undefined>;
    /**
     * Provisioning status
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Defines how AzureFrontDoor caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL.
     */
    public readonly queryStringCachingBehavior!: pulumi.Output<string | undefined>;
    /**
     * rule sets referenced by this endpoint.
     */
    public readonly ruleSets!: pulumi.Output<outputs.cdn.v20200901.ResourceReferenceResponse[] | undefined>;
    /**
     * List of supported protocols for this route.
     */
    public readonly supportedProtocols!: pulumi.Output<string[] | undefined>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<outputs.cdn.v20200901.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Route resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.endpointName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'endpointName'");
            }
            if ((!args || args.originGroup === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'originGroup'");
            }
            if ((!args || args.profileName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.routeName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'routeName'");
            }
            inputs["compressionSettings"] = args ? args.compressionSettings : undefined;
            inputs["customDomains"] = args ? args.customDomains : undefined;
            inputs["enabledState"] = args ? args.enabledState : undefined;
            inputs["endpointName"] = args ? args.endpointName : undefined;
            inputs["forwardingProtocol"] = args ? args.forwardingProtocol : undefined;
            inputs["httpsRedirect"] = args ? args.httpsRedirect : undefined;
            inputs["linkToDefaultDomain"] = args ? args.linkToDefaultDomain : undefined;
            inputs["optimizationType"] = args ? args.optimizationType : undefined;
            inputs["originGroup"] = args ? args.originGroup : undefined;
            inputs["originPath"] = args ? args.originPath : undefined;
            inputs["patternsToMatch"] = args ? args.patternsToMatch : undefined;
            inputs["profileName"] = args ? args.profileName : undefined;
            inputs["queryStringCachingBehavior"] = args ? args.queryStringCachingBehavior : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["routeName"] = args ? args.routeName : undefined;
            inputs["ruleSets"] = args ? args.ruleSets : undefined;
            inputs["supportedProtocols"] = args ? args.supportedProtocols : undefined;
            inputs["deploymentStatus"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["systemData"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["compressionSettings"] = undefined /*out*/;
            inputs["customDomains"] = undefined /*out*/;
            inputs["deploymentStatus"] = undefined /*out*/;
            inputs["enabledState"] = undefined /*out*/;
            inputs["forwardingProtocol"] = undefined /*out*/;
            inputs["httpsRedirect"] = undefined /*out*/;
            inputs["linkToDefaultDomain"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["optimizationType"] = undefined /*out*/;
            inputs["originGroup"] = undefined /*out*/;
            inputs["originPath"] = undefined /*out*/;
            inputs["patternsToMatch"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["queryStringCachingBehavior"] = undefined /*out*/;
            inputs["ruleSets"] = undefined /*out*/;
            inputs["supportedProtocols"] = undefined /*out*/;
            inputs["systemData"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:cdn/latest:Route" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(Route.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Route resource.
 */
export interface RouteArgs {
    /**
     * compression settings.
     */
    readonly compressionSettings?: pulumi.Input<pulumi.Input<inputs.cdn.v20200901.CompressionSettings>[]>;
    /**
     * Domains referenced by this endpoint.
     */
    readonly customDomains?: pulumi.Input<pulumi.Input<inputs.cdn.v20200901.ResourceReference>[]>;
    /**
     * Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
     */
    readonly enabledState?: pulumi.Input<string | enums.cdn.v20200901.EnabledState>;
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    readonly endpointName: pulumi.Input<string>;
    /**
     * Protocol this rule will use when forwarding traffic to backends.
     */
    readonly forwardingProtocol?: pulumi.Input<string | enums.cdn.v20200901.ForwardingProtocol>;
    /**
     * Whether to automatically redirect HTTP traffic to HTTPS traffic. Note that this is a easy way to set up this rule and it will be the first rule that gets executed.
     */
    readonly httpsRedirect?: pulumi.Input<string | enums.cdn.v20200901.HttpsRedirect>;
    /**
     * whether this route will be linked to the default endpoint domain.
     */
    readonly linkToDefaultDomain?: pulumi.Input<string | enums.cdn.v20200901.LinkToDefaultDomain>;
    /**
     * Specifies what scenario the customer wants this AzureFrontDoor endpoint to optimize for, e.g. Download, Media services. With this information, AzureFrontDoor can apply scenario driven optimization.
     */
    readonly optimizationType?: pulumi.Input<string | enums.cdn.v20200901.OptimizationType>;
    /**
     * A reference to the origin group.
     */
    readonly originGroup: pulumi.Input<inputs.cdn.v20200901.ResourceReference>;
    /**
     * A directory path on the origin that AzureFrontDoor can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
     */
    readonly originPath?: pulumi.Input<string>;
    /**
     * The route patterns of the rule.
     */
    readonly patternsToMatch?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    readonly profileName: pulumi.Input<string>;
    /**
     * Defines how AzureFrontDoor caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL.
     */
    readonly queryStringCachingBehavior?: pulumi.Input<enums.cdn.v20200901.QueryStringCachingBehavior>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the routing rule.
     */
    readonly routeName: pulumi.Input<string>;
    /**
     * rule sets referenced by this endpoint.
     */
    readonly ruleSets?: pulumi.Input<pulumi.Input<inputs.cdn.v20200901.ResourceReference>[]>;
    /**
     * List of supported protocols for this route.
     */
    readonly supportedProtocols?: pulumi.Input<pulumi.Input<string | enums.cdn.v20200901.AFDEndpointProtocols>[]>;
}
