import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The integration account agreement.
 */
export declare class IntegrationAccountAgreement extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationAccountAgreement resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IntegrationAccountAgreement;
    /**
     * Returns true if the given object is an instance of IntegrationAccountAgreement.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IntegrationAccountAgreement;
    /**
     * The agreement type.
     */
    readonly agreementType: pulumi.Output<string>;
    /**
     * The changed time.
     */
    readonly changedTime: pulumi.Output<string>;
    /**
     * The agreement content.
     */
    readonly content: pulumi.Output<outputs.logic.v20190501.AgreementContentResponse>;
    /**
     * The created time.
     */
    readonly createdTime: pulumi.Output<string>;
    /**
     * The business identity of the guest partner.
     */
    readonly guestIdentity: pulumi.Output<outputs.logic.v20190501.BusinessIdentityResponse>;
    /**
     * The integration account partner that is set as guest partner for this agreement.
     */
    readonly guestPartner: pulumi.Output<string>;
    /**
     * The business identity of the host partner.
     */
    readonly hostIdentity: pulumi.Output<outputs.logic.v20190501.BusinessIdentityResponse>;
    /**
     * The integration account partner that is set as host partner for this agreement.
     */
    readonly hostPartner: pulumi.Output<string>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The metadata.
     */
    readonly metadata: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Gets the resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Gets the resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a IntegrationAccountAgreement resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationAccountAgreementArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a IntegrationAccountAgreement resource.
 */
export interface IntegrationAccountAgreementArgs {
    /**
     * The integration account agreement name.
     */
    readonly agreementName: pulumi.Input<string>;
    /**
     * The agreement type.
     */
    readonly agreementType: pulumi.Input<string>;
    /**
     * The agreement content.
     */
    readonly content: pulumi.Input<inputs.logic.v20190501.AgreementContent>;
    /**
     * The business identity of the guest partner.
     */
    readonly guestIdentity: pulumi.Input<inputs.logic.v20190501.BusinessIdentity>;
    /**
     * The integration account partner that is set as guest partner for this agreement.
     */
    readonly guestPartner: pulumi.Input<string>;
    /**
     * The business identity of the host partner.
     */
    readonly hostIdentity: pulumi.Input<inputs.logic.v20190501.BusinessIdentity>;
    /**
     * The integration account partner that is set as host partner for this agreement.
     */
    readonly hostPartner: pulumi.Input<string>;
    /**
     * The integration account name.
     */
    readonly integrationAccountName: pulumi.Input<string>;
    /**
     * The resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The metadata.
     */
    readonly metadata?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
