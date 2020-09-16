import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Security Partner Provider resource.
 */
export declare class SecurityPartnerProvider extends pulumi.CustomResource {
    /**
     * Get an existing SecurityPartnerProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SecurityPartnerProvider;
    /**
     * Returns true if the given object is an instance of SecurityPartnerProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SecurityPartnerProvider;
    /**
     * The connection status with the Security Partner Provider.
     */
    readonly connectionStatus: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the Security Partner Provider resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The security provider name.
     */
    readonly securityProviderName: pulumi.Output<string | undefined>;
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
     * The virtualHub to which the Security Partner Provider belongs.
     */
    readonly virtualHub: pulumi.Output<outputs.network.v20200401.SubResourceResponse | undefined>;
    /**
     * Create a SecurityPartnerProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityPartnerProviderArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a SecurityPartnerProvider resource.
 */
export interface SecurityPartnerProviderArgs {
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Security Partner Provider.
     */
    readonly securityPartnerProviderName: pulumi.Input<string>;
    /**
     * The security provider name.
     */
    readonly securityProviderName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The virtualHub to which the Security Partner Provider belongs.
     */
    readonly virtualHub?: pulumi.Input<inputs.network.v20200401.SubResource>;
}
