import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * Friendly domain name mapping to the endpoint hostname that the customer provides for branding purposes, e.g. www.contoso.com.
 */
export declare class CustomDomain extends pulumi.CustomResource {
    /**
     * Get an existing CustomDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CustomDomain;
    /**
     * Returns true if the given object is an instance of CustomDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CustomDomain;
    /**
     * Certificate parameters for securing custom HTTPS
     */
    readonly customHttpsParameters: pulumi.Output<outputs.cdn.v20190615.CustomDomainHttpsParametersResponse | undefined>;
    /**
     * Provisioning status of Custom Https of the custom domain.
     */
    readonly customHttpsProvisioningState: pulumi.Output<string>;
    /**
     * Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step.
     */
    readonly customHttpsProvisioningSubstate: pulumi.Output<string>;
    /**
     * The host name of the custom domain. Must be a domain name.
     */
    readonly hostName: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Provisioning status of the custom domain.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Resource status of the custom domain.
     */
    readonly resourceState: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Special validation or data may be required when delivering CDN to some regions due to local compliance reasons. E.g. ICP license number of a custom domain is required to deliver content in China.
     */
    readonly validationData: pulumi.Output<string | undefined>;
    /**
     * Create a CustomDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomDomainArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a CustomDomain resource.
 */
export interface CustomDomainArgs {
    /**
     * Name of the custom domain within an endpoint.
     */
    readonly customDomainName: pulumi.Input<string>;
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    readonly endpointName: pulumi.Input<string>;
    /**
     * The host name of the custom domain. Must be a domain name.
     */
    readonly hostName: pulumi.Input<string>;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    readonly profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
