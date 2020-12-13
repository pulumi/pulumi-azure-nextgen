// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

/**
 * A domain specific resource identifier.
 */
export class WebAppDomainOwnershipIdentifier extends pulumi.CustomResource {
    /**
     * Get an existing WebAppDomainOwnershipIdentifier resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppDomainOwnershipIdentifier {
        return new WebAppDomainOwnershipIdentifier(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:web/v20190801:WebAppDomainOwnershipIdentifier';

    /**
     * Returns true if the given object is an instance of WebAppDomainOwnershipIdentifier.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppDomainOwnershipIdentifier {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppDomainOwnershipIdentifier.__pulumiType;
    }

    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * String representation of the identity.
     */
    public readonly value!: pulumi.Output<string | undefined>;

    /**
     * Create a WebAppDomainOwnershipIdentifier resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppDomainOwnershipIdentifierArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.domainOwnershipIdentifierName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'domainOwnershipIdentifierName'");
            }
            if ((!args || args.name === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["domainOwnershipIdentifierName"] = args ? args.domainOwnershipIdentifierName : undefined;
            inputs["kind"] = args ? args.kind : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["value"] = args ? args.value : undefined;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["kind"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["value"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:web/latest:WebAppDomainOwnershipIdentifier" }, { type: "azure-nextgen:web/v20160801:WebAppDomainOwnershipIdentifier" }, { type: "azure-nextgen:web/v20180201:WebAppDomainOwnershipIdentifier" }, { type: "azure-nextgen:web/v20181101:WebAppDomainOwnershipIdentifier" }, { type: "azure-nextgen:web/v20200601:WebAppDomainOwnershipIdentifier" }, { type: "azure-nextgen:web/v20200901:WebAppDomainOwnershipIdentifier" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(WebAppDomainOwnershipIdentifier.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppDomainOwnershipIdentifier resource.
 */
export interface WebAppDomainOwnershipIdentifierArgs {
    /**
     * Name of domain ownership identifier.
     */
    readonly domainOwnershipIdentifierName: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * String representation of the identity.
     */
    readonly value?: pulumi.Input<string>;
}
