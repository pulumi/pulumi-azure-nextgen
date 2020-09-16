import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * CDN endpoint is the entity within a CDN profile containing configuration information such as origin, protocol, content caching and delivery behavior. The CDN endpoint uses the URL format <endpointname>.azureedge.net.
 */
export declare class Endpoint extends pulumi.CustomResource {
    /**
     * Get an existing Endpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Endpoint;
    /**
     * Returns true if the given object is an instance of Endpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Endpoint;
    /**
     * List of content types on which compression applies. The value should be a valid MIME type.
     */
    readonly contentTypesToCompress: pulumi.Output<string[] | undefined>;
    /**
     * List of rules defining user geo access within a CDN endpoint. Each geo filter defines an access rule to a specified path or content, e.g. block APAC for path /pictures/
     */
    readonly geoFilters: pulumi.Output<outputs.cdn.v20161002.GeoFilterResponse[] | undefined>;
    /**
     * The host name of the endpoint structured as {endpointName}.{DNSZone}, e.g. contoso.azureedge.net
     */
    readonly hostName: pulumi.Output<string>;
    /**
     * Indicates whether content compression is enabled on CDN. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB.
     */
    readonly isCompressionEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
     */
    readonly isHttpAllowed: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether HTTPS traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
     */
    readonly isHttpsAllowed: pulumi.Output<boolean | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Customer can specify what scenario they want this CDN endpoint to optimize, e.g. Download, Media services. With this information we can apply scenario driven optimization.
     */
    readonly optimizationType: pulumi.Output<string | undefined>;
    /**
     * The host header CDN sends along with content requests to origin. The default value is the host name of the origin.
     */
    readonly originHostHeader: pulumi.Output<string | undefined>;
    /**
     * The path used when CDN sends request to origin.
     */
    readonly originPath: pulumi.Output<string | undefined>;
    /**
     * The source of the content being delivered via CDN.
     */
    readonly origins: pulumi.Output<outputs.cdn.v20161002.DeepCreatedOriginResponse[]>;
    /**
     * Provisioning status of the endpoint.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Defines the query string caching behavior
     */
    readonly queryStringCachingBehavior: pulumi.Output<string | undefined>;
    /**
     * Resource status of the endpoint.
     */
    readonly resourceState: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Endpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EndpointArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Endpoint resource.
 */
export interface EndpointArgs {
    /**
     * List of content types on which compression applies. The value should be a valid MIME type.
     */
    readonly contentTypesToCompress?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    readonly endpointName: pulumi.Input<string>;
    /**
     * List of rules defining user geo access within a CDN endpoint. Each geo filter defines an access rule to a specified path or content, e.g. block APAC for path /pictures/
     */
    readonly geoFilters?: pulumi.Input<pulumi.Input<inputs.cdn.v20161002.GeoFilter>[]>;
    /**
     * Indicates whether content compression is enabled on CDN. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB.
     */
    readonly isCompressionEnabled?: pulumi.Input<boolean>;
    /**
     * Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
     */
    readonly isHttpAllowed?: pulumi.Input<boolean>;
    /**
     * Indicates whether HTTPS traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
     */
    readonly isHttpsAllowed?: pulumi.Input<boolean>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Customer can specify what scenario they want this CDN endpoint to optimize, e.g. Download, Media services. With this information we can apply scenario driven optimization.
     */
    readonly optimizationType?: pulumi.Input<string>;
    /**
     * The host header CDN sends along with content requests to origin. The default value is the host name of the origin.
     */
    readonly originHostHeader?: pulumi.Input<string>;
    /**
     * The path used when CDN sends request to origin.
     */
    readonly originPath?: pulumi.Input<string>;
    /**
     * The source of the content being delivered via CDN.
     */
    readonly origins: pulumi.Input<pulumi.Input<inputs.cdn.v20161002.DeepCreatedOrigin>[]>;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    readonly profileName: pulumi.Input<string>;
    /**
     * Defines the query string caching behavior
     */
    readonly queryStringCachingBehavior?: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
