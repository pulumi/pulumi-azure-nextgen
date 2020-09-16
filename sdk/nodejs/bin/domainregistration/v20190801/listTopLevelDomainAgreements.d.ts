import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listTopLevelDomainAgreements(args: ListTopLevelDomainAgreementsArgs, opts?: pulumi.InvokeOptions): Promise<ListTopLevelDomainAgreementsResult>;
export interface ListTopLevelDomainAgreementsArgs {
    /**
     * If <code>true</code>, then the list of agreements will include agreements for domain transfer as well; otherwise, <code>false</code>.
     */
    readonly forTransfer?: boolean;
    /**
     * If <code>true</code>, then the list of agreements will include agreements for domain privacy as well; otherwise, <code>false</code>.
     */
    readonly includePrivacy?: boolean;
    /**
     * Name of the top-level domain.
     */
    readonly name: string;
}
/**
 * Collection of top-level domain legal agreements.
 */
export interface ListTopLevelDomainAgreementsResult {
    /**
     * Link to next page of resources.
     */
    readonly nextLink: string;
    /**
     * Collection of resources.
     */
    readonly value: outputs.domainregistration.v20190801.TldLegalAgreementResponse[];
}
