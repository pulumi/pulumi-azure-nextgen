# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs

__all__ = [
    'GetWebhookResult',
    'AwaitableGetWebhookResult',
    'get_webhook',
]

@pulumi.output_type
class GetWebhookResult:
    """
    Definition of the webhook type.
    """
    def __init__(__self__, creation_time=None, description=None, expiry_time=None, id=None, is_enabled=None, last_invoked_time=None, last_modified_by=None, last_modified_time=None, name=None, parameters=None, run_on=None, runbook=None, type=None, uri=None):
        if creation_time and not isinstance(creation_time, str):
            raise TypeError("Expected argument 'creation_time' to be a str")
        pulumi.set(__self__, "creation_time", creation_time)
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        pulumi.set(__self__, "description", description)
        if expiry_time and not isinstance(expiry_time, str):
            raise TypeError("Expected argument 'expiry_time' to be a str")
        pulumi.set(__self__, "expiry_time", expiry_time)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if is_enabled and not isinstance(is_enabled, bool):
            raise TypeError("Expected argument 'is_enabled' to be a bool")
        pulumi.set(__self__, "is_enabled", is_enabled)
        if last_invoked_time and not isinstance(last_invoked_time, str):
            raise TypeError("Expected argument 'last_invoked_time' to be a str")
        pulumi.set(__self__, "last_invoked_time", last_invoked_time)
        if last_modified_by and not isinstance(last_modified_by, str):
            raise TypeError("Expected argument 'last_modified_by' to be a str")
        pulumi.set(__self__, "last_modified_by", last_modified_by)
        if last_modified_time and not isinstance(last_modified_time, str):
            raise TypeError("Expected argument 'last_modified_time' to be a str")
        pulumi.set(__self__, "last_modified_time", last_modified_time)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if parameters and not isinstance(parameters, dict):
            raise TypeError("Expected argument 'parameters' to be a dict")
        pulumi.set(__self__, "parameters", parameters)
        if run_on and not isinstance(run_on, str):
            raise TypeError("Expected argument 'run_on' to be a str")
        pulumi.set(__self__, "run_on", run_on)
        if runbook and not isinstance(runbook, dict):
            raise TypeError("Expected argument 'runbook' to be a dict")
        pulumi.set(__self__, "runbook", runbook)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if uri and not isinstance(uri, str):
            raise TypeError("Expected argument 'uri' to be a str")
        pulumi.set(__self__, "uri", uri)

    @property
    @pulumi.getter(name="creationTime")
    def creation_time(self) -> Optional[str]:
        """
        Gets or sets the creation time.
        """
        return pulumi.get(self, "creation_time")

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        Gets or sets the description.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="expiryTime")
    def expiry_time(self) -> Optional[str]:
        """
        Gets or sets the expiry time.
        """
        return pulumi.get(self, "expiry_time")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Fully qualified resource Id for the resource
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="isEnabled")
    def is_enabled(self) -> Optional[bool]:
        """
        Gets or sets the value of the enabled flag of the webhook.
        """
        return pulumi.get(self, "is_enabled")

    @property
    @pulumi.getter(name="lastInvokedTime")
    def last_invoked_time(self) -> Optional[str]:
        """
        Gets or sets the last invoked time.
        """
        return pulumi.get(self, "last_invoked_time")

    @property
    @pulumi.getter(name="lastModifiedBy")
    def last_modified_by(self) -> Optional[str]:
        """
        Details of the user who last modified the Webhook
        """
        return pulumi.get(self, "last_modified_by")

    @property
    @pulumi.getter(name="lastModifiedTime")
    def last_modified_time(self) -> Optional[str]:
        """
        Gets or sets the last modified time.
        """
        return pulumi.get(self, "last_modified_time")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the resource
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def parameters(self) -> Optional[Mapping[str, str]]:
        """
        Gets or sets the parameters of the job that is created when the webhook calls the runbook it is associated with.
        """
        return pulumi.get(self, "parameters")

    @property
    @pulumi.getter(name="runOn")
    def run_on(self) -> Optional[str]:
        """
        Gets or sets the name of the hybrid worker group the webhook job will run on.
        """
        return pulumi.get(self, "run_on")

    @property
    @pulumi.getter
    def runbook(self) -> Optional['outputs.RunbookAssociationPropertyResponse']:
        """
        Gets or sets the runbook the webhook is associated with.
        """
        return pulumi.get(self, "runbook")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of the resource.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def uri(self) -> Optional[str]:
        """
        Gets or sets the webhook uri.
        """
        return pulumi.get(self, "uri")


class AwaitableGetWebhookResult(GetWebhookResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetWebhookResult(
            creation_time=self.creation_time,
            description=self.description,
            expiry_time=self.expiry_time,
            id=self.id,
            is_enabled=self.is_enabled,
            last_invoked_time=self.last_invoked_time,
            last_modified_by=self.last_modified_by,
            last_modified_time=self.last_modified_time,
            name=self.name,
            parameters=self.parameters,
            run_on=self.run_on,
            runbook=self.runbook,
            type=self.type,
            uri=self.uri)


def get_webhook(automation_account_name: Optional[str] = None,
                resource_group_name: Optional[str] = None,
                webhook_name: Optional[str] = None,
                opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetWebhookResult:
    """
    Use this data source to access information about an existing resource.

    :param str automation_account_name: The name of the automation account.
    :param str resource_group_name: Name of an Azure Resource group.
    :param str webhook_name: The webhook name.
    """
    __args__ = dict()
    __args__['automationAccountName'] = automation_account_name
    __args__['resourceGroupName'] = resource_group_name
    __args__['webhookName'] = webhook_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:automation/latest:getWebhook', __args__, opts=opts, typ=GetWebhookResult).value

    return AwaitableGetWebhookResult(
        creation_time=__ret__.creation_time,
        description=__ret__.description,
        expiry_time=__ret__.expiry_time,
        id=__ret__.id,
        is_enabled=__ret__.is_enabled,
        last_invoked_time=__ret__.last_invoked_time,
        last_modified_by=__ret__.last_modified_by,
        last_modified_time=__ret__.last_modified_time,
        name=__ret__.name,
        parameters=__ret__.parameters,
        run_on=__ret__.run_on,
        runbook=__ret__.runbook,
        type=__ret__.type,
        uri=__ret__.uri)
