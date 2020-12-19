// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * A share data transfer object.
 * Latest API Version: 2019-11-01.
 */
export class Share extends pulumi.CustomResource {
    /**
     * Get an existing Share resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Share {
        return new Share(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:datashare/latest:Share';

    /**
     * Returns true if the given object is an instance of Share.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Share {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Share.__pulumiType;
    }

    /**
     * Time at which the share was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Share description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Name of the azure resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the provisioning state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Share kind.
     */
    public readonly shareKind!: pulumi.Output<string | undefined>;
    /**
     * Share terms.
     */
    public readonly terms!: pulumi.Output<string | undefined>;
    /**
     * Type of the azure resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Email of the user who created the resource
     */
    public /*out*/ readonly userEmail!: pulumi.Output<string>;
    /**
     * Name of the user who created the resource
     */
    public /*out*/ readonly userName!: pulumi.Output<string>;

    /**
     * Create a Share resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ShareArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.accountName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.shareName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'shareName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["shareKind"] = args ? args.shareKind : undefined;
            inputs["shareName"] = args ? args.shareName : undefined;
            inputs["terms"] = args ? args.terms : undefined;
            inputs["createdAt"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["userEmail"] = undefined /*out*/;
            inputs["userName"] = undefined /*out*/;
        } else {
            inputs["createdAt"] = undefined /*out*/;
            inputs["description"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["shareKind"] = undefined /*out*/;
            inputs["terms"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["userEmail"] = undefined /*out*/;
            inputs["userName"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:datashare/v20181101preview:Share" }, { type: "azure-nextgen:datashare/v20191101:Share" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(Share.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Share resource.
 */
export interface ShareArgs {
    /**
     * The name of the share account.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * Share description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Share kind.
     */
    readonly shareKind?: pulumi.Input<string | enums.datashare.latest.ShareKind>;
    /**
     * The name of the share.
     */
    readonly shareName: pulumi.Input<string>;
    /**
     * Share terms.
     */
    readonly terms?: pulumi.Input<string>;
}
