import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Description of a NotificationHub Resource.
 */
export declare class NotificationHub extends pulumi.CustomResource {
    /**
     * Get an existing NotificationHub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NotificationHub;
    /**
     * Returns true if the given object is an instance of NotificationHub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NotificationHub;
    /**
     * The AdmCredential of the created NotificationHub
     */
    readonly admCredential: pulumi.Output<outputs.notificationhubs.v20170401.AdmCredentialResponse | undefined>;
    /**
     * The ApnsCredential of the created NotificationHub
     */
    readonly apnsCredential: pulumi.Output<outputs.notificationhubs.v20170401.ApnsCredentialResponse | undefined>;
    /**
     * The AuthorizationRules of the created NotificationHub
     */
    readonly authorizationRules: pulumi.Output<outputs.notificationhubs.v20170401.SharedAccessAuthorizationRulePropertiesResponse[] | undefined>;
    /**
     * The BaiduCredential of the created NotificationHub
     */
    readonly baiduCredential: pulumi.Output<outputs.notificationhubs.v20170401.BaiduCredentialResponse | undefined>;
    /**
     * The GcmCredential of the created NotificationHub
     */
    readonly gcmCredential: pulumi.Output<outputs.notificationhubs.v20170401.GcmCredentialResponse | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The MpnsCredential of the created NotificationHub
     */
    readonly mpnsCredential: pulumi.Output<outputs.notificationhubs.v20170401.MpnsCredentialResponse | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * The RegistrationTtl of the created NotificationHub
     */
    readonly registrationTtl: pulumi.Output<string | undefined>;
    /**
     * The sku of the created namespace
     */
    readonly sku: pulumi.Output<outputs.notificationhubs.v20170401.SkuResponse | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * The WnsCredential of the created NotificationHub
     */
    readonly wnsCredential: pulumi.Output<outputs.notificationhubs.v20170401.WnsCredentialResponse | undefined>;
    /**
     * Create a NotificationHub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationHubArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a NotificationHub resource.
 */
export interface NotificationHubArgs {
    /**
     * The AdmCredential of the created NotificationHub
     */
    readonly admCredential?: pulumi.Input<inputs.notificationhubs.v20170401.AdmCredential>;
    /**
     * The ApnsCredential of the created NotificationHub
     */
    readonly apnsCredential?: pulumi.Input<inputs.notificationhubs.v20170401.ApnsCredential>;
    /**
     * The AuthorizationRules of the created NotificationHub
     */
    readonly authorizationRules?: pulumi.Input<pulumi.Input<inputs.notificationhubs.v20170401.SharedAccessAuthorizationRuleProperties>[]>;
    /**
     * The BaiduCredential of the created NotificationHub
     */
    readonly baiduCredential?: pulumi.Input<inputs.notificationhubs.v20170401.BaiduCredential>;
    /**
     * The GcmCredential of the created NotificationHub
     */
    readonly gcmCredential?: pulumi.Input<inputs.notificationhubs.v20170401.GcmCredential>;
    /**
     * Resource location
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The MpnsCredential of the created NotificationHub
     */
    readonly mpnsCredential?: pulumi.Input<inputs.notificationhubs.v20170401.MpnsCredential>;
    /**
     * The NotificationHub name.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The namespace name.
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * The notification hub name.
     */
    readonly notificationHubName: pulumi.Input<string>;
    /**
     * The RegistrationTtl of the created NotificationHub
     */
    readonly registrationTtl?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The sku of the created namespace
     */
    readonly sku?: pulumi.Input<inputs.notificationhubs.v20170401.Sku>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The WnsCredential of the created NotificationHub
     */
    readonly wnsCredential?: pulumi.Input<inputs.notificationhubs.v20170401.WnsCredential>;
}
