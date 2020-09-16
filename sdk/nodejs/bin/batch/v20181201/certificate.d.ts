import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * Contains information about a certificate.
 */
export declare class Certificate extends pulumi.CustomResource {
    /**
     * Get an existing Certificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Certificate;
    /**
     * Returns true if the given object is an instance of Certificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Certificate;
    /**
     * This is only returned when the certificate provisioningState is 'Failed'.
     */
    readonly deleteCertificateError: pulumi.Output<outputs.batch.v20181201.DeleteCertificateErrorResponse>;
    /**
     * The ETag of the resource, used for concurrency statements.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx.
     */
    readonly format: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The previous provisioned state of the resource
     */
    readonly previousProvisioningState: pulumi.Output<string>;
    readonly previousProvisioningStateTransitionTime: pulumi.Output<string>;
    readonly provisioningState: pulumi.Output<string>;
    readonly provisioningStateTransitionTime: pulumi.Output<string>;
    /**
     * The public key of the certificate.
     */
    readonly publicData: pulumi.Output<string>;
    /**
     * This must match the thumbprint from the name.
     */
    readonly thumbprint: pulumi.Output<string | undefined>;
    /**
     * This must match the first portion of the certificate name. Currently required to be 'SHA1'.
     */
    readonly thumbprintAlgorithm: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Certificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Certificate resource.
 */
export interface CertificateArgs {
    /**
     * The name of the Batch account.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
     */
    readonly certificateName: pulumi.Input<string>;
    /**
     * The maximum size is 10KB.
     */
    readonly data: pulumi.Input<string>;
    /**
     * The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx.
     */
    readonly format?: pulumi.Input<string>;
    /**
     * This is required if the certificate format is pfx and must be omitted if the certificate format is cer.
     */
    readonly password?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the Batch account.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * This must match the thumbprint from the name.
     */
    readonly thumbprint?: pulumi.Input<string>;
    /**
     * This must match the first portion of the certificate name. Currently required to be 'SHA1'.
     */
    readonly thumbprintAlgorithm?: pulumi.Input<string>;
}
