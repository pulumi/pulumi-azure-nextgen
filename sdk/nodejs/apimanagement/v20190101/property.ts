// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

/**
 * Property details.
 */
export class Property extends pulumi.CustomResource {
    /**
     * Get an existing Property resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Property {
        return new Property(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:apimanagement/v20190101:Property';

    /**
     * Returns true if the given object is an instance of Property.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Property {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Property.__pulumiType;
    }

    /**
     * Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Determines whether the value is a secret and should be encrypted or not. Default value is false.
     */
    public readonly secret!: pulumi.Output<boolean | undefined>;
    /**
     * Optional tags that when provided can be used to filter the property list.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * Resource type for API Management resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace.
     */
    public readonly value!: pulumi.Output<string>;

    /**
     * Create a Property resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PropertyArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.displayName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.propId === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'propId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.value === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'value'");
            }
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["propId"] = args ? args.propId : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["secret"] = args ? args.secret : undefined;
            inputs["serviceName"] = args ? args.serviceName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["value"] = args ? args.value : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["displayName"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["secret"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["value"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:apimanagement/latest:Property" }, { type: "azure-nextgen:apimanagement/v20160707:Property" }, { type: "azure-nextgen:apimanagement/v20161010:Property" }, { type: "azure-nextgen:apimanagement/v20170301:Property" }, { type: "azure-nextgen:apimanagement/v20180101:Property" }, { type: "azure-nextgen:apimanagement/v20180601preview:Property" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(Property.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Property resource.
 */
export interface PropertyArgs {
    /**
     * Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters.
     */
    readonly displayName: pulumi.Input<string>;
    /**
     * Identifier of the property.
     */
    readonly propId: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Determines whether the value is a secret and should be encrypted or not. Default value is false.
     */
    readonly secret?: pulumi.Input<boolean>;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * Optional tags that when provided can be used to filter the property list.
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace.
     */
    readonly value: pulumi.Input<string>;
}
