import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * The X509 Certificate.
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
     * The entity tag.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The name of the certificate.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The description of an X509 CA Certificate.
     */
    readonly properties: pulumi.Output<outputs.devices.v20191104.CertificatePropertiesResponse>;
    /**
     * The resource type.
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
     * base-64 representation of the X509 leaf certificate .cer file or just .pem file content.
     */
    readonly certificate?: pulumi.Input<string>;
    /**
     * The name of the certificate
     */
    readonly certificateName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the IoT hub.
     */
    readonly resourceName: pulumi.Input<string>;
}
