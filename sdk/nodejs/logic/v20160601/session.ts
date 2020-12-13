// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

/**
 * The integration account session.
 */
export class Session extends pulumi.CustomResource {
    /**
     * Get an existing Session resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Session {
        return new Session(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:logic/v20160601:Session';

    /**
     * Returns true if the given object is an instance of Session.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Session {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Session.__pulumiType;
    }

    /**
     * The changed time.
     */
    public /*out*/ readonly changedTime!: pulumi.Output<string>;
    /**
     * The session content.
     */
    public readonly content!: pulumi.Output<any | undefined>;
    /**
     * The created time.
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Gets the resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets the resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Session resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SessionArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.integrationAccountName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'integrationAccountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sessionName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'sessionName'");
            }
            inputs["content"] = args ? args.content : undefined;
            inputs["integrationAccountName"] = args ? args.integrationAccountName : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sessionName"] = args ? args.sessionName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["changedTime"] = undefined /*out*/;
            inputs["createdTime"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["changedTime"] = undefined /*out*/;
            inputs["content"] = undefined /*out*/;
            inputs["createdTime"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:logic/latest:Session" }, { type: "azure-nextgen:logic/v20180701preview:Session" }, { type: "azure-nextgen:logic/v20190501:Session" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(Session.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Session resource.
 */
export interface SessionArgs {
    /**
     * The session content.
     */
    readonly content?: any;
    /**
     * The integration account name.
     */
    readonly integrationAccountName: pulumi.Input<string>;
    /**
     * The resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The integration account session name.
     */
    readonly sessionName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
