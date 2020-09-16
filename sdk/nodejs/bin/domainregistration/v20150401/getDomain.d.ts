import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDomain(args: GetDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainResult>;
export interface GetDomainArgs {
    /**
     * Name of the domain.
     */
    readonly domainName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * Information about a domain.
 */
export interface GetDomainResult {
    readonly authCode?: string;
    /**
     * <code>true</code> if the domain should be automatically renewed; otherwise, <code>false</code>.
     */
    readonly autoRenew?: boolean;
    /**
     * Legal agreement consent.
     */
    readonly consent: outputs.domainregistration.v20150401.DomainPurchaseConsentResponse;
    /**
     * Administrative contact.
     */
    readonly contactAdmin: outputs.domainregistration.v20150401.ContactResponse;
    /**
     * Billing contact.
     */
    readonly contactBilling: outputs.domainregistration.v20150401.ContactResponse;
    /**
     * Registrant contact.
     */
    readonly contactRegistrant: outputs.domainregistration.v20150401.ContactResponse;
    /**
     * Technical contact.
     */
    readonly contactTech: outputs.domainregistration.v20150401.ContactResponse;
    /**
     * Domain creation timestamp.
     */
    readonly createdTime: string;
    /**
     * Current DNS type
     */
    readonly dnsType?: string;
    /**
     * Azure DNS Zone to use
     */
    readonly dnsZoneId?: string;
    /**
     * Reasons why domain is not renewable.
     */
    readonly domainNotRenewableReasons: string[];
    /**
     * Domain expiration timestamp.
     */
    readonly expirationTime: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Timestamp when the domain was renewed last time.
     */
    readonly lastRenewedTime: string;
    /**
     * Resource Location.
     */
    readonly location: string;
    /**
     * All hostnames derived from the domain and assigned to Azure resources.
     */
    readonly managedHostNames: outputs.domainregistration.v20150401.HostNameResponse[];
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Name servers.
     */
    readonly nameServers: string[];
    /**
     * <code>true</code> if domain privacy is enabled for this domain; otherwise, <code>false</code>.
     */
    readonly privacy?: boolean;
    /**
     * Domain provisioning state.
     */
    readonly provisioningState: string;
    /**
     * <code>true</code> if Azure can assign this domain to App Service apps; otherwise, <code>false</code>. This value will be <code>true</code> if domain registration status is active and
     *  it is hosted on name servers Azure has programmatic access to.
     */
    readonly readyForDnsRecordManagement: boolean;
    /**
     * Domain registration status.
     */
    readonly registrationStatus: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Target DNS type (would be used for migration)
     */
    readonly targetDnsType?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
