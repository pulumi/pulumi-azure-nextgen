import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getIntegrationAccountPartner(args: GetIntegrationAccountPartnerArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountPartnerResult>;
export interface GetIntegrationAccountPartnerArgs {
    /**
     * The integration account name.
     */
    readonly integrationAccountName: string;
    /**
     * The integration account partner name.
     */
    readonly partnerName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * The integration account partner.
 */
export interface GetIntegrationAccountPartnerResult {
    /**
     * The changed time.
     */
    readonly changedTime: string;
    /**
     * The partner content.
     */
    readonly content: outputs.logic.v20190501.PartnerContentResponse;
    /**
     * The created time.
     */
    readonly createdTime: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The metadata.
     */
    readonly metadata?: {
        [key: string]: any;
    };
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The partner type.
     */
    readonly partnerType: string;
    /**
     * The resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
