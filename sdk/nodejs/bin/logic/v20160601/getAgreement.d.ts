import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getAgreement(args: GetAgreementArgs, opts?: pulumi.InvokeOptions): Promise<GetAgreementResult>;
export interface GetAgreementArgs {
    /**
     * The integration account agreement name.
     */
    readonly agreementName: string;
    /**
     * The integration account name.
     */
    readonly integrationAccountName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * The integration account agreement.
 */
export interface GetAgreementResult {
    /**
     * The agreement type.
     */
    readonly agreementType: string;
    /**
     * The changed time.
     */
    readonly changedTime: string;
    /**
     * The agreement content.
     */
    readonly content: outputs.logic.v20160601.AgreementContentResponse;
    /**
     * The created time.
     */
    readonly createdTime: string;
    /**
     * The business identity of the guest partner.
     */
    readonly guestIdentity: outputs.logic.v20160601.BusinessIdentityResponse;
    /**
     * The integration account partner that is set as guest partner for this agreement.
     */
    readonly guestPartner: string;
    /**
     * The business identity of the host partner.
     */
    readonly hostIdentity: outputs.logic.v20160601.BusinessIdentityResponse;
    /**
     * The integration account partner that is set as host partner for this agreement.
     */
    readonly hostPartner: string;
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
