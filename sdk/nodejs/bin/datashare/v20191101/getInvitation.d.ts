import * as pulumi from "@pulumi/pulumi";
export declare function getInvitation(args: GetInvitationArgs, opts?: pulumi.InvokeOptions): Promise<GetInvitationResult>;
export interface GetInvitationArgs {
    /**
     * The name of the share account.
     */
    readonly accountName: string;
    /**
     * The name of the invitation.
     */
    readonly invitationName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the share.
     */
    readonly shareName: string;
}
/**
 * A Invitation data transfer object.
 */
export interface GetInvitationResult {
    /**
     * unique invitation id
     */
    readonly invitationId: string;
    /**
     * The status of the invitation.
     */
    readonly invitationStatus: string;
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * The time the recipient responded to the invitation.
     */
    readonly respondedAt: string;
    /**
     * Gets the time at which the invitation was sent.
     */
    readonly sentAt: string;
    /**
     * The target Azure AD Id. Can't be combined with email.
     */
    readonly targetActiveDirectoryId?: string;
    /**
     * The email the invitation is directed to.
     */
    readonly targetEmail?: string;
    /**
     * The target user or application Id that invitation is being sent to.
     * Must be specified along TargetActiveDirectoryId. This enables sending
     * invitations to specific users or applications in an AD tenant.
     */
    readonly targetObjectId?: string;
    /**
     * Type of the azure resource
     */
    readonly type: string;
    /**
     * Email of the user who created the resource
     */
    readonly userEmail: string;
    /**
     * Name of the user who created the resource
     */
    readonly userName: string;
}
