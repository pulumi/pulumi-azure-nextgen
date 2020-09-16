import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Information about a domain.
 */
export declare class Domain extends pulumi.CustomResource {
    /**
     * Get an existing Domain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Domain;
    /**
     * Returns true if the given object is an instance of Domain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Domain;
    readonly authCode: pulumi.Output<string | undefined>;
    /**
     * <code>true</code> if the domain should be automatically renewed; otherwise, <code>false</code>.
     */
    readonly autoRenew: pulumi.Output<boolean | undefined>;
    /**
     * Legal agreement consent.
     */
    readonly consent: pulumi.Output<outputs.domainregistration.v20200601.DomainPurchaseConsentResponse>;
    /**
     * Administrative contact.
     */
    readonly contactAdmin: pulumi.Output<outputs.domainregistration.v20200601.ContactResponse>;
    /**
     * Billing contact.
     */
    readonly contactBilling: pulumi.Output<outputs.domainregistration.v20200601.ContactResponse>;
    /**
     * Registrant contact.
     */
    readonly contactRegistrant: pulumi.Output<outputs.domainregistration.v20200601.ContactResponse>;
    /**
     * Technical contact.
     */
    readonly contactTech: pulumi.Output<outputs.domainregistration.v20200601.ContactResponse>;
    /**
     * Domain creation timestamp.
     */
    readonly createdTime: pulumi.Output<string>;
    /**
     * Current DNS type
     */
    readonly dnsType: pulumi.Output<string | undefined>;
    /**
     * Azure DNS Zone to use
     */
    readonly dnsZoneId: pulumi.Output<string | undefined>;
    /**
     * Reasons why domain is not renewable.
     */
    readonly domainNotRenewableReasons: pulumi.Output<string[]>;
    /**
     * Domain expiration timestamp.
     */
    readonly expirationTime: pulumi.Output<string>;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Timestamp when the domain was renewed last time.
     */
    readonly lastRenewedTime: pulumi.Output<string>;
    /**
     * Resource Location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * All hostnames derived from the domain and assigned to Azure resources.
     */
    readonly managedHostNames: pulumi.Output<outputs.domainregistration.v20200601.HostNameResponse[]>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Name servers.
     */
    readonly nameServers: pulumi.Output<string[]>;
    /**
     * <code>true</code> if domain privacy is enabled for this domain; otherwise, <code>false</code>.
     */
    readonly privacy: pulumi.Output<boolean | undefined>;
    /**
     * Domain provisioning state.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * <code>true</code> if Azure can assign this domain to App Service apps; otherwise, <code>false</code>. This value will be <code>true</code> if domain registration status is active and
     *  it is hosted on name servers Azure has programmatic access to.
     */
    readonly readyForDnsRecordManagement: pulumi.Output<boolean>;
    /**
     * Domain registration status.
     */
    readonly registrationStatus: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Target DNS type (would be used for migration)
     */
    readonly targetDnsType: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Domain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Domain resource.
 */
export interface DomainArgs {
    readonly authCode?: pulumi.Input<string>;
    /**
     * <code>true</code> if the domain should be automatically renewed; otherwise, <code>false</code>.
     */
    readonly autoRenew?: pulumi.Input<boolean>;
    /**
     * Legal agreement consent.
     */
    readonly consent: pulumi.Input<inputs.domainregistration.v20200601.DomainPurchaseConsent>;
    /**
     * Administrative contact.
     */
    readonly contactAdmin: pulumi.Input<inputs.domainregistration.v20200601.Contact>;
    /**
     * Billing contact.
     */
    readonly contactBilling: pulumi.Input<inputs.domainregistration.v20200601.Contact>;
    /**
     * Registrant contact.
     */
    readonly contactRegistrant: pulumi.Input<inputs.domainregistration.v20200601.Contact>;
    /**
     * Technical contact.
     */
    readonly contactTech: pulumi.Input<inputs.domainregistration.v20200601.Contact>;
    /**
     * Current DNS type
     */
    readonly dnsType?: pulumi.Input<string>;
    /**
     * Azure DNS Zone to use
     */
    readonly dnsZoneId?: pulumi.Input<string>;
    /**
     * Name of the domain.
     */
    readonly domainName: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource Location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * <code>true</code> if domain privacy is enabled for this domain; otherwise, <code>false</code>.
     */
    readonly privacy?: pulumi.Input<boolean>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Target DNS type (would be used for migration)
     */
    readonly targetDnsType?: pulumi.Input<string>;
}
