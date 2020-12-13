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
    'GetRosettaNetProcessConfigurationResult',
    'AwaitableGetRosettaNetProcessConfigurationResult',
    'get_rosetta_net_process_configuration',
]

@pulumi.output_type
class GetRosettaNetProcessConfigurationResult:
    """
    The integration account RosettaNet process configuration.
    """
    def __init__(__self__, activity_settings=None, changed_time=None, created_time=None, description=None, id=None, initiator_role_settings=None, location=None, metadata=None, name=None, process_code=None, process_name=None, process_version=None, responder_role_settings=None, tags=None, type=None):
        if activity_settings and not isinstance(activity_settings, dict):
            raise TypeError("Expected argument 'activity_settings' to be a dict")
        pulumi.set(__self__, "activity_settings", activity_settings)
        if changed_time and not isinstance(changed_time, str):
            raise TypeError("Expected argument 'changed_time' to be a str")
        pulumi.set(__self__, "changed_time", changed_time)
        if created_time and not isinstance(created_time, str):
            raise TypeError("Expected argument 'created_time' to be a str")
        pulumi.set(__self__, "created_time", created_time)
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        pulumi.set(__self__, "description", description)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if initiator_role_settings and not isinstance(initiator_role_settings, dict):
            raise TypeError("Expected argument 'initiator_role_settings' to be a dict")
        pulumi.set(__self__, "initiator_role_settings", initiator_role_settings)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if metadata and not isinstance(metadata, dict):
            raise TypeError("Expected argument 'metadata' to be a dict")
        pulumi.set(__self__, "metadata", metadata)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if process_code and not isinstance(process_code, str):
            raise TypeError("Expected argument 'process_code' to be a str")
        pulumi.set(__self__, "process_code", process_code)
        if process_name and not isinstance(process_name, str):
            raise TypeError("Expected argument 'process_name' to be a str")
        pulumi.set(__self__, "process_name", process_name)
        if process_version and not isinstance(process_version, str):
            raise TypeError("Expected argument 'process_version' to be a str")
        pulumi.set(__self__, "process_version", process_version)
        if responder_role_settings and not isinstance(responder_role_settings, dict):
            raise TypeError("Expected argument 'responder_role_settings' to be a dict")
        pulumi.set(__self__, "responder_role_settings", responder_role_settings)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="activitySettings")
    def activity_settings(self) -> 'outputs.RosettaNetPipActivitySettingsResponse':
        """
        The RosettaNet process configuration activity settings.
        """
        return pulumi.get(self, "activity_settings")

    @property
    @pulumi.getter(name="changedTime")
    def changed_time(self) -> str:
        """
        The changed time.
        """
        return pulumi.get(self, "changed_time")

    @property
    @pulumi.getter(name="createdTime")
    def created_time(self) -> str:
        """
        The created time.
        """
        return pulumi.get(self, "created_time")

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        The integration account RosettaNet ProcessConfiguration properties.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The resource id.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="initiatorRoleSettings")
    def initiator_role_settings(self) -> 'outputs.RosettaNetPipRoleSettingsResponse':
        """
        The RosettaNet initiator role settings.
        """
        return pulumi.get(self, "initiator_role_settings")

    @property
    @pulumi.getter
    def location(self) -> Optional[str]:
        """
        The resource location.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def metadata(self) -> Optional[Mapping[str, str]]:
        """
        The metadata.
        """
        return pulumi.get(self, "metadata")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Gets the resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="processCode")
    def process_code(self) -> str:
        """
        The integration account RosettaNet process code.
        """
        return pulumi.get(self, "process_code")

    @property
    @pulumi.getter(name="processName")
    def process_name(self) -> str:
        """
        The integration account RosettaNet process name.
        """
        return pulumi.get(self, "process_name")

    @property
    @pulumi.getter(name="processVersion")
    def process_version(self) -> str:
        """
        The integration account RosettaNet process version.
        """
        return pulumi.get(self, "process_version")

    @property
    @pulumi.getter(name="responderRoleSettings")
    def responder_role_settings(self) -> 'outputs.RosettaNetPipRoleSettingsResponse':
        """
        The RosettaNet responder role settings.
        """
        return pulumi.get(self, "responder_role_settings")

    @property
    @pulumi.getter
    def tags(self) -> Optional[Mapping[str, str]]:
        """
        The resource tags.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Gets the resource type.
        """
        return pulumi.get(self, "type")


class AwaitableGetRosettaNetProcessConfigurationResult(GetRosettaNetProcessConfigurationResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetRosettaNetProcessConfigurationResult(
            activity_settings=self.activity_settings,
            changed_time=self.changed_time,
            created_time=self.created_time,
            description=self.description,
            id=self.id,
            initiator_role_settings=self.initiator_role_settings,
            location=self.location,
            metadata=self.metadata,
            name=self.name,
            process_code=self.process_code,
            process_name=self.process_name,
            process_version=self.process_version,
            responder_role_settings=self.responder_role_settings,
            tags=self.tags,
            type=self.type)


def get_rosetta_net_process_configuration(integration_account_name: Optional[str] = None,
                                          resource_group_name: Optional[str] = None,
                                          rosetta_net_process_configuration_name: Optional[str] = None,
                                          opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetRosettaNetProcessConfigurationResult:
    """
    Use this data source to access information about an existing resource.

    :param str integration_account_name: The integration account name.
    :param str resource_group_name: The resource group name.
    :param str rosetta_net_process_configuration_name: The integration account RosettaNetProcessConfiguration name.
    """
    __args__ = dict()
    __args__['integrationAccountName'] = integration_account_name
    __args__['resourceGroupName'] = resource_group_name
    __args__['rosettaNetProcessConfigurationName'] = rosetta_net_process_configuration_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:logic/v20160601:getRosettaNetProcessConfiguration', __args__, opts=opts, typ=GetRosettaNetProcessConfigurationResult).value

    return AwaitableGetRosettaNetProcessConfigurationResult(
        activity_settings=__ret__.activity_settings,
        changed_time=__ret__.changed_time,
        created_time=__ret__.created_time,
        description=__ret__.description,
        id=__ret__.id,
        initiator_role_settings=__ret__.initiator_role_settings,
        location=__ret__.location,
        metadata=__ret__.metadata,
        name=__ret__.name,
        process_code=__ret__.process_code,
        process_name=__ret__.process_name,
        process_version=__ret__.process_version,
        responder_role_settings=__ret__.responder_role_settings,
        tags=__ret__.tags,
        type=__ret__.type)
