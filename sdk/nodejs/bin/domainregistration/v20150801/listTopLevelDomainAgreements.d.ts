import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listTopLevelDomainAgreements(args: ListTopLevelDomainAgreementsArgs, opts?: pulumi.InvokeOptions): Promise<ListTopLevelDomainAgreementsResult>;
export interface ListTopLevelDomainAgreementsArgs {
    /**
     * If true then the list of agreements will include agreements for domain privacy as well.
     */
    readonly includePrivacy?: boolean;
    /**
     * Name of the top level domain
     */
    readonly name: string;
}
/**
 * Collection of Tld Legal Agreements
 */
export interface ListTopLevelDomainAgreementsResult {
    /**
     * Link to next page of resources
     */
    readonly nextLink?: string;
    /**
     * Collection of resources
     */
    readonly value?: outputs.domainregistration.v20150801.TldLegalAgreementResponse[];
}
