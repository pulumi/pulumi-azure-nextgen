import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDomain(args: GetDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainResult>;
export interface GetDomainArgs {
    /**
     * Name of the domain
     */
    readonly domainName: string;
    /**
     * Name of the resource group
     */
    readonly resourceGroupName: string;
}
/**
 * Represents a domain
 */
export interface GetDomainResult {
    /**
     * If true then domain will renewed automatically
     */
    readonly autoRenew?: boolean;
    /**
     * Legal agreement consent
     */
    readonly consent?: outputs.domainregistration.v20150801.DomainPurchaseConsentResponse;
    /**
     * Admin contact information
     */
    readonly contactAdmin?: outputs.domainregistration.v20150801.ContactResponse;
    /**
     * Billing contact information
     */
    readonly contactBilling?: outputs.domainregistration.v20150801.ContactResponse;
    /**
     * Registrant contact information
     */
    readonly contactRegistrant?: outputs.domainregistration.v20150801.ContactResponse;
    /**
     * Technical contact information
     */
    readonly contactTech?: outputs.domainregistration.v20150801.ContactResponse;
    /**
     * Domain creation timestamp
     */
    readonly createdTime?: string;
    /**
     * Reasons why domain is not renewable
     */
    readonly domainNotRenewableReasons?: string[];
    /**
     * Domain expiration timestamp
     */
    readonly expirationTime?: string;
    /**
     * Kind of resource
     */
    readonly kind?: string;
    /**
     * Timestamp when the domain was renewed last time
     */
    readonly lastRenewedTime?: string;
    /**
     * Resource Location
     */
    readonly location: string;
    /**
     * All hostnames derived from the domain and assigned to Azure resources
     */
    readonly managedHostNames?: outputs.domainregistration.v20150801.HostNameResponse[];
    /**
     * Resource Name
     */
    readonly name?: string;
    /**
     * Name servers
     */
    readonly nameServers?: string[];
    /**
     * If true then domain privacy is enabled for this domain
     */
    readonly privacy?: boolean;
    /**
     * Domain provisioning state
     */
    readonly provisioningState?: string;
    /**
     * If true then Azure can assign this domain to Web Apps. This value will be true if domain registration status is active and it is hosted on name servers Azure has programmatic access to
     */
    readonly readyForDnsRecordManagement?: boolean;
    /**
     * Domain registration status
     */
    readonly registrationStatus?: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type?: string;
}
