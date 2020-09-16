import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * CDN endpoint is the entity within a CDN profile containing configuration information regarding caching behaviors and origins. The CDN endpoint is exposed using the URL format <endpointname>.azureedge.net by default, but custom domains can also be created.
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
     * List of content types on which compression will be applied. The value for the elements should be a valid MIME type.
     */
    readonly contentTypesToCompress: pulumi.Output<string[] | undefined>;
    /**
     * The host name of the endpoint {endpointName}.{DNSZone}
     */
    readonly hostName: pulumi.Output<string>;
    /**
     * Indicates whether the compression is enabled. Default value is false. If compression is enabled, the content transferred from cdn endpoint to end user will be compressed. The requested content must be larger than 1 byte and smaller than 1 MB.
     */
    readonly isCompressionEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
     */
    readonly isHttpAllowed: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether https traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
     */
    readonly isHttpsAllowed: pulumi.Output<boolean | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * The host header the CDN provider will send along with content requests to origins. The default value is the host name of the origin.
     */
    readonly originHostHeader: pulumi.Output<string | undefined>;
    /**
     * The path used for origin requests.
     */
    readonly originPath: pulumi.Output<string | undefined>;
    /**
     * The set of origins for the CDN endpoint. When multiple origins exist, the first origin will be used as primary and rest will be used as failover options.
     */
    readonly origins: pulumi.Output<outputs.cdn.v20150601.DeepCreatedOriginResponse[] | undefined>;
    /**
     * Provisioning status of the endpoint.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Defines the query string caching behavior.
     */
    readonly queryStringCachingBehavior: pulumi.Output<string | undefined>;
    /**
     * Resource status of the endpoint.
     */
    readonly resourceState: pulumi.Output<string>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * Resource type
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
     * List of content types on which compression will be applied. The value for the elements should be a valid MIME type.
     */
    readonly contentTypesToCompress?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the endpoint within the CDN profile.
     */
    readonly endpointName: pulumi.Input<string>;
    /**
     * Indicates whether content compression is enabled. Default value is false. If compression is enabled, the content transferred from the CDN endpoint to the end user will be compressed. The requested content must be larger than 1 byte and smaller than 1 MB.
     */
    readonly isCompressionEnabled?: pulumi.Input<boolean>;
    /**
     * Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
     */
    readonly isHttpAllowed?: pulumi.Input<boolean>;
    /**
     * Indicates whether https traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
     */
    readonly isHttpsAllowed?: pulumi.Input<boolean>;
    /**
     * Endpoint location
     */
    readonly location: pulumi.Input<string>;
    /**
     * The host header CDN provider will send along with content requests to origins. The default value is the host name of the origin.
     */
    readonly originHostHeader?: pulumi.Input<string>;
    /**
     * The path used for origin requests.
     */
    readonly originPath?: pulumi.Input<string>;
    /**
     * The set of origins for the CDN endpoint. When multiple origins exist, the first origin will be used as primary and rest will be used as failover options.
     */
    readonly origins: pulumi.Input<pulumi.Input<inputs.cdn.v20150601.DeepCreatedOrigin>[]>;
    /**
     * Name of the CDN profile within the resource group.
     */
    readonly profileName: pulumi.Input<string>;
    /**
     * Defines the query string caching behavior.
     */
    readonly queryStringCachingBehavior?: pulumi.Input<string>;
    /**
     * Name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Endpoint tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
