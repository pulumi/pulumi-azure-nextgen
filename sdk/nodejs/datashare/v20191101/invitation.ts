// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

/**
 * A Invitation data transfer object.
 */
export class Invitation extends pulumi.CustomResource {
    /**
     * Get an existing Invitation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Invitation {
        return new Invitation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:datashare/v20191101:Invitation';

    /**
     * Returns true if the given object is an instance of Invitation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Invitation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Invitation.__pulumiType;
    }

    /**
     * unique invitation id
     */
    public /*out*/ readonly invitationId!: pulumi.Output<string>;
    /**
     * The status of the invitation.
     */
    public /*out*/ readonly invitationStatus!: pulumi.Output<string>;
    /**
     * Name of the azure resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The time the recipient responded to the invitation.
     */
    public /*out*/ readonly respondedAt!: pulumi.Output<string>;
    /**
     * Gets the time at which the invitation was sent.
     */
    public /*out*/ readonly sentAt!: pulumi.Output<string>;
    /**
     * The target Azure AD Id. Can't be combined with email.
     */
    public readonly targetActiveDirectoryId!: pulumi.Output<string | undefined>;
    /**
     * The email the invitation is directed to.
     */
    public readonly targetEmail!: pulumi.Output<string | undefined>;
    /**
     * The target user or application Id that invitation is being sent to.
     * Must be specified along TargetActiveDirectoryId. This enables sending
     * invitations to specific users or applications in an AD tenant.
     */
    public readonly targetObjectId!: pulumi.Output<string | undefined>;
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
     * Create a Invitation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InvitationArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.accountName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.invitationName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'invitationName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.shareName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'shareName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["invitationName"] = args ? args.invitationName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["shareName"] = args ? args.shareName : undefined;
            inputs["targetActiveDirectoryId"] = args ? args.targetActiveDirectoryId : undefined;
            inputs["targetEmail"] = args ? args.targetEmail : undefined;
            inputs["targetObjectId"] = args ? args.targetObjectId : undefined;
            inputs["invitationId"] = undefined /*out*/;
            inputs["invitationStatus"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["respondedAt"] = undefined /*out*/;
            inputs["sentAt"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["userEmail"] = undefined /*out*/;
            inputs["userName"] = undefined /*out*/;
        } else {
            inputs["invitationId"] = undefined /*out*/;
            inputs["invitationStatus"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["respondedAt"] = undefined /*out*/;
            inputs["sentAt"] = undefined /*out*/;
            inputs["targetActiveDirectoryId"] = undefined /*out*/;
            inputs["targetEmail"] = undefined /*out*/;
            inputs["targetObjectId"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-nextgen:datashare/latest:Invitation" }, { type: "azure-nextgen:datashare/v20181101preview:Invitation" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(Invitation.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Invitation resource.
 */
export interface InvitationArgs {
    /**
     * The name of the share account.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The name of the invitation.
     */
    readonly invitationName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the share to send the invitation for.
     */
    readonly shareName: pulumi.Input<string>;
    /**
     * The target Azure AD Id. Can't be combined with email.
     */
    readonly targetActiveDirectoryId?: pulumi.Input<string>;
    /**
     * The email the invitation is directed to.
     */
    readonly targetEmail?: pulumi.Input<string>;
    /**
     * The target user or application Id that invitation is being sent to.
     * Must be specified along TargetActiveDirectoryId. This enables sending
     * invitations to specific users or applications in an AD tenant.
     */
    readonly targetObjectId?: pulumi.Input<string>;
}
