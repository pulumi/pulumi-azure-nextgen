// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

/**
 * Certificate signing request object
 * Latest API Version: 2015-08-01.
 */
export class CertificateCsr extends pulumi.CustomResource {
    /**
     * Get an existing CertificateCsr resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CertificateCsr {
        return new CertificateCsr(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:web/latest:CertificateCsr';

    /**
     * Returns true if the given object is an instance of CertificateCsr.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CertificateCsr {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CertificateCsr.__pulumiType;
    }

    /**
     * Actual CSR string created
     */
    public readonly csrString!: pulumi.Output<string | undefined>;
    /**
     * Distinguished name of certificate to be created
     */
    public readonly distinguishedName!: pulumi.Output<string | undefined>;
    /**
     * Hosting environment
     */
    public readonly hostingEnvironment!: pulumi.Output<string | undefined>;
    /**
     * Kind of resource
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource Name
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * PFX password
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * PFX certificate of created certificate
     */
    public readonly pfxBlob!: pulumi.Output<string | undefined>;
    /**
     * Hash of the certificates public key
     */
    public readonly publicKeyHash!: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a CertificateCsr resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateCsrArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.name === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["csrString"] = args ? args.csrString : undefined;
            inputs["distinguishedName"] = args ? args.distinguishedName : undefined;
            inputs["hostingEnvironment"] = args ? args.hostingEnvironment : undefined;
            inputs["id"] = args ? args.id : undefined;
            inputs["kind"] = args ? args.kind : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["password"] = args ? args.password : undefined;
            inputs["pfxBlob"] = args ? args.pfxBlob : undefined;
            inputs["publicKeyHash"] = args ? args.publicKeyHash : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["type"] = args ? args.type : undefined;
        } else {
            inputs["csrString"] = undefined /*out*/;
            inputs["distinguishedName"] = undefined /*out*/;
            inputs["hostingEnvironment"] = undefined /*out*/;
            inputs["kind"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["password"] = undefined /*out*/;
            inputs["pfxBlob"] = undefined /*out*/;
            inputs["publicKeyHash"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:web/v20150801:CertificateCsr" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(CertificateCsr.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a CertificateCsr resource.
 */
export interface CertificateCsrArgs {
    /**
     * Actual CSR string created
     */
    readonly csrString?: pulumi.Input<string>;
    /**
     * Distinguished name of certificate to be created
     */
    readonly distinguishedName?: pulumi.Input<string>;
    /**
     * Hosting environment
     */
    readonly hostingEnvironment?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Kind of resource
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Input<string>;
    /**
     * PFX password
     */
    readonly password?: pulumi.Input<string>;
    /**
     * PFX certificate of created certificate
     */
    readonly pfxBlob?: pulumi.Input<string>;
    /**
     * Hash of the certificates public key
     */
    readonly publicKeyHash?: pulumi.Input<string>;
    /**
     * Name of the resource group
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Resource type
     */
    readonly type?: pulumi.Input<string>;
}
