import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The integration account certificate.
 */
export declare class IntegrationAccountCertificate extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationAccountCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IntegrationAccountCertificate;
    /**
     * Returns true if the given object is an instance of IntegrationAccountCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IntegrationAccountCertificate;
    /**
     * The changed time.
     */
    readonly changedTime: pulumi.Output<string>;
    /**
     * The created time.
     */
    readonly createdTime: pulumi.Output<string>;
    /**
     * The key details in the key vault.
     */
    readonly key: pulumi.Output<outputs.logic.v20190501.KeyVaultKeyReferenceResponse | undefined>;
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
     * The public certificate.
     */
    readonly publicCertificate: pulumi.Output<string | undefined>;
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
     * Create a IntegrationAccountCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationAccountCertificateArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a IntegrationAccountCertificate resource.
 */
export interface IntegrationAccountCertificateArgs {
    /**
     * The integration account certificate name.
     */
    readonly certificateName: pulumi.Input<string>;
    /**
     * The integration account name.
     */
    readonly integrationAccountName: pulumi.Input<string>;
    /**
     * The key details in the key vault.
     */
    readonly key?: pulumi.Input<inputs.logic.v20190501.KeyVaultKeyReference>;
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
     * The public certificate.
     */
    readonly publicCertificate?: pulumi.Input<string>;
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
