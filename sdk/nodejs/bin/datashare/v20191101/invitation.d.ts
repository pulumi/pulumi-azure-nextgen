import * as pulumi from "@pulumi/pulumi";
/**
 * A Invitation data transfer object.
 */
export declare class Invitation extends pulumi.CustomResource {
    /**
     * Get an existing Invitation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Invitation;
    /**
     * Returns true if the given object is an instance of Invitation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Invitation;
    /**
     * unique invitation id
     */
    readonly invitationId: pulumi.Output<string>;
    /**
     * The status of the invitation.
     */
    readonly invitationStatus: pulumi.Output<string>;
    /**
     * Name of the azure resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The time the recipient responded to the invitation.
     */
    readonly respondedAt: pulumi.Output<string>;
    /**
     * Gets the time at which the invitation was sent.
     */
    readonly sentAt: pulumi.Output<string>;
    /**
     * The target Azure AD Id. Can't be combined with email.
     */
    readonly targetActiveDirectoryId: pulumi.Output<string | undefined>;
    /**
     * The email the invitation is directed to.
     */
    readonly targetEmail: pulumi.Output<string | undefined>;
    /**
     * The target user or application Id that invitation is being sent to.
     * Must be specified along TargetActiveDirectoryId. This enables sending
     * invitations to specific users or applications in an AD tenant.
     */
    readonly targetObjectId: pulumi.Output<string | undefined>;
    /**
     * Type of the azure resource
     */
    readonly type: pulumi.Output<string>;
    /**
     * Email of the user who created the resource
     */
    readonly userEmail: pulumi.Output<string>;
    /**
     * Name of the user who created the resource
     */
    readonly userName: pulumi.Output<string>;
    /**
     * Create a Invitation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InvitationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
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
