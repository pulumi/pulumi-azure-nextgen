# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetInvitationResult',
    'AwaitableGetInvitationResult',
    'get_invitation',
]

@pulumi.output_type
class GetInvitationResult:
    """
    A Invitation data transfer object.
    """
    def __init__(__self__, id=None, invitation_id=None, invitation_status=None, name=None, responded_at=None, sent_at=None, target_active_directory_id=None, target_email=None, target_object_id=None, type=None, user_email=None, user_name=None):
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if invitation_id and not isinstance(invitation_id, str):
            raise TypeError("Expected argument 'invitation_id' to be a str")
        pulumi.set(__self__, "invitation_id", invitation_id)
        if invitation_status and not isinstance(invitation_status, str):
            raise TypeError("Expected argument 'invitation_status' to be a str")
        pulumi.set(__self__, "invitation_status", invitation_status)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if responded_at and not isinstance(responded_at, str):
            raise TypeError("Expected argument 'responded_at' to be a str")
        pulumi.set(__self__, "responded_at", responded_at)
        if sent_at and not isinstance(sent_at, str):
            raise TypeError("Expected argument 'sent_at' to be a str")
        pulumi.set(__self__, "sent_at", sent_at)
        if target_active_directory_id and not isinstance(target_active_directory_id, str):
            raise TypeError("Expected argument 'target_active_directory_id' to be a str")
        pulumi.set(__self__, "target_active_directory_id", target_active_directory_id)
        if target_email and not isinstance(target_email, str):
            raise TypeError("Expected argument 'target_email' to be a str")
        pulumi.set(__self__, "target_email", target_email)
        if target_object_id and not isinstance(target_object_id, str):
            raise TypeError("Expected argument 'target_object_id' to be a str")
        pulumi.set(__self__, "target_object_id", target_object_id)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if user_email and not isinstance(user_email, str):
            raise TypeError("Expected argument 'user_email' to be a str")
        pulumi.set(__self__, "user_email", user_email)
        if user_name and not isinstance(user_name, str):
            raise TypeError("Expected argument 'user_name' to be a str")
        pulumi.set(__self__, "user_name", user_name)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The resource id of the azure resource
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="invitationId")
    def invitation_id(self) -> str:
        """
        unique invitation id
        """
        return pulumi.get(self, "invitation_id")

    @property
    @pulumi.getter(name="invitationStatus")
    def invitation_status(self) -> str:
        """
        The status of the invitation.
        """
        return pulumi.get(self, "invitation_status")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Name of the azure resource
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="respondedAt")
    def responded_at(self) -> str:
        """
        The time the recipient responded to the invitation.
        """
        return pulumi.get(self, "responded_at")

    @property
    @pulumi.getter(name="sentAt")
    def sent_at(self) -> str:
        """
        Gets the time at which the invitation was sent.
        """
        return pulumi.get(self, "sent_at")

    @property
    @pulumi.getter(name="targetActiveDirectoryId")
    def target_active_directory_id(self) -> Optional[str]:
        """
        The target Azure AD Id. Can't be combined with email.
        """
        return pulumi.get(self, "target_active_directory_id")

    @property
    @pulumi.getter(name="targetEmail")
    def target_email(self) -> Optional[str]:
        """
        The email the invitation is directed to.
        """
        return pulumi.get(self, "target_email")

    @property
    @pulumi.getter(name="targetObjectId")
    def target_object_id(self) -> Optional[str]:
        """
        The target user or application Id that invitation is being sent to.
        Must be specified along TargetActiveDirectoryId. This enables sending
        invitations to specific users or applications in an AD tenant.
        """
        return pulumi.get(self, "target_object_id")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Type of the azure resource
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="userEmail")
    def user_email(self) -> str:
        """
        Email of the user who created the resource
        """
        return pulumi.get(self, "user_email")

    @property
    @pulumi.getter(name="userName")
    def user_name(self) -> str:
        """
        Name of the user who created the resource
        """
        return pulumi.get(self, "user_name")


class AwaitableGetInvitationResult(GetInvitationResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetInvitationResult(
            id=self.id,
            invitation_id=self.invitation_id,
            invitation_status=self.invitation_status,
            name=self.name,
            responded_at=self.responded_at,
            sent_at=self.sent_at,
            target_active_directory_id=self.target_active_directory_id,
            target_email=self.target_email,
            target_object_id=self.target_object_id,
            type=self.type,
            user_email=self.user_email,
            user_name=self.user_name)


def get_invitation(account_name: Optional[str] = None,
                   invitation_name: Optional[str] = None,
                   resource_group_name: Optional[str] = None,
                   share_name: Optional[str] = None,
                   opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetInvitationResult:
    """
    Use this data source to access information about an existing resource.

    :param str account_name: The name of the share account.
    :param str invitation_name: The name of the invitation.
    :param str resource_group_name: The resource group name.
    :param str share_name: The name of the share.
    """
    __args__ = dict()
    __args__['accountName'] = account_name
    __args__['invitationName'] = invitation_name
    __args__['resourceGroupName'] = resource_group_name
    __args__['shareName'] = share_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:datashare/v20191101:getInvitation', __args__, opts=opts, typ=GetInvitationResult).value

    return AwaitableGetInvitationResult(
        id=__ret__.id,
        invitation_id=__ret__.invitation_id,
        invitation_status=__ret__.invitation_status,
        name=__ret__.name,
        responded_at=__ret__.responded_at,
        sent_at=__ret__.sent_at,
        target_active_directory_id=__ret__.target_active_directory_id,
        target_email=__ret__.target_email,
        target_object_id=__ret__.target_object_id,
        type=__ret__.type,
        user_email=__ret__.user_email,
        user_name=__ret__.user_name)
