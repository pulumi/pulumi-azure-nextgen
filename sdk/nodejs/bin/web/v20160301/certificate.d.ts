import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * SSL certificate for an app.
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
     * Raw bytes of .cer file
     */
    readonly cerBlob: pulumi.Output<string>;
    /**
     * Certificate expiration date.
     */
    readonly expirationDate: pulumi.Output<string>;
    /**
     * Friendly name of the certificate.
     */
    readonly friendlyName: pulumi.Output<string>;
    /**
     * Region of the certificate.
     */
    readonly geoRegion: pulumi.Output<string>;
    /**
     * Host names the certificate applies to.
     */
    readonly hostNames: pulumi.Output<string[] | undefined>;
    /**
     * Specification for the App Service Environment to use for the certificate.
     */
    readonly hostingEnvironmentProfile: pulumi.Output<outputs.web.v20160301.HostingEnvironmentProfileResponse>;
    /**
     * Certificate issue Date.
     */
    readonly issueDate: pulumi.Output<string>;
    /**
     * Certificate issuer.
     */
    readonly issuer: pulumi.Output<string>;
    /**
     * Key Vault Csm resource Id.
     */
    readonly keyVaultId: pulumi.Output<string | undefined>;
    /**
     * Key Vault secret name.
     */
    readonly keyVaultSecretName: pulumi.Output<string | undefined>;
    /**
     * Status of the Key Vault secret.
     */
    readonly keyVaultSecretStatus: pulumi.Output<string>;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource Location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Certificate password.
     */
    readonly password: pulumi.Output<string>;
    /**
     * Pfx blob.
     */
    readonly pfxBlob: pulumi.Output<string | undefined>;
    /**
     * Public key hash.
     */
    readonly publicKeyHash: pulumi.Output<string>;
    /**
     * Self link.
     */
    readonly selfLink: pulumi.Output<string>;
    /**
     * Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
     */
    readonly serverFarmId: pulumi.Output<string | undefined>;
    /**
     * App name.
     */
    readonly siteName: pulumi.Output<string>;
    /**
     * Subject name of the certificate.
     */
    readonly subjectName: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Certificate thumbprint.
     */
    readonly thumbprint: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Is the certificate valid?.
     */
    readonly valid: pulumi.Output<boolean>;
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
     * Host names the certificate applies to.
     */
    readonly hostNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Key Vault Csm resource Id.
     */
    readonly keyVaultId?: pulumi.Input<string>;
    /**
     * Key Vault secret name.
     */
    readonly keyVaultSecretName?: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource Location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Name of the certificate.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Certificate password.
     */
    readonly password: pulumi.Input<string>;
    /**
     * Pfx blob.
     */
    readonly pfxBlob?: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
     */
    readonly serverFarmId?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
