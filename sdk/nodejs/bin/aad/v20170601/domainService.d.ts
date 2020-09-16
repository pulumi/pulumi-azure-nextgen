import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Domain service.
 */
export declare class DomainService extends pulumi.CustomResource {
    /**
     * Get an existing DomainService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DomainService;
    /**
     * Returns true if the given object is an instance of DomainService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DomainService;
    /**
     * List of Domain Controller IP Address
     */
    readonly domainControllerIpAddress: pulumi.Output<string[]>;
    /**
     * The name of the Azure domain that the user would like to deploy Domain Services to.
     */
    readonly domainName: pulumi.Output<string | undefined>;
    /**
     * DomainSecurity Settings
     */
    readonly domainSecuritySettings: pulumi.Output<outputs.aad.v20170601.DomainSecuritySettingsResponse | undefined>;
    /**
     * Resource etag
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Enabled or Disabled flag to turn on Group-based filtered sync
     */
    readonly filteredSync: pulumi.Output<string | undefined>;
    /**
     * List of Domain Health Alerts
     */
    readonly healthAlerts: pulumi.Output<outputs.aad.v20170601.HealthAlertResponse[]>;
    /**
     * Last domain evaluation run DateTime
     */
    readonly healthLastEvaluated: pulumi.Output<string>;
    /**
     * List of Domain Health Monitors
     */
    readonly healthMonitors: pulumi.Output<outputs.aad.v20170601.HealthMonitorResponse[]>;
    /**
     * Secure LDAP Settings
     */
    readonly ldapsSettings: pulumi.Output<outputs.aad.v20170601.LdapsSettingsResponse | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Notification Settings
     */
    readonly notificationSettings: pulumi.Output<outputs.aad.v20170601.NotificationSettingsResponse | undefined>;
    /**
     * the current deployment or provisioning state, which only appears in the response.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Status of Domain Service instance
     */
    readonly serviceStatus: pulumi.Output<string>;
    /**
     * The name of the virtual network that Domain Services will be deployed on. The id of the subnet that Domain Services will be deployed on. /virtualNetwork/vnetName/subnets/subnetName.
     */
    readonly subnetId: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Azure Active Directory tenant id
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Virtual network site id
     */
    readonly vnetSiteId: pulumi.Output<string>;
    /**
     * Create a DomainService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainServiceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DomainService resource.
 */
export interface DomainServiceArgs {
    /**
     * The name of the Azure domain that the user would like to deploy Domain Services to.
     */
    readonly domainName?: pulumi.Input<string>;
    /**
     * DomainSecurity Settings
     */
    readonly domainSecuritySettings?: pulumi.Input<inputs.aad.v20170601.DomainSecuritySettings>;
    /**
     * The name of the domain service.
     */
    readonly domainServiceName: pulumi.Input<string>;
    /**
     * Resource etag
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Enabled or Disabled flag to turn on Group-based filtered sync
     */
    readonly filteredSync?: pulumi.Input<string>;
    /**
     * Secure LDAP Settings
     */
    readonly ldapsSettings?: pulumi.Input<inputs.aad.v20170601.LdapsSettings>;
    /**
     * Resource location
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Notification Settings
     */
    readonly notificationSettings?: pulumi.Input<inputs.aad.v20170601.NotificationSettings>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual network that Domain Services will be deployed on. The id of the subnet that Domain Services will be deployed on. /virtualNetwork/vnetName/subnets/subnetName.
     */
    readonly subnetId?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
