# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'ListWebAppSitePushSettingsResult',
    'AwaitableListWebAppSitePushSettingsResult',
    'list_web_app_site_push_settings',
]

@pulumi.output_type
class ListWebAppSitePushSettingsResult:
    """
    Push settings for the App.
    """
    def __init__(__self__, dynamic_tags_json=None, id=None, is_push_enabled=None, kind=None, name=None, tag_whitelist_json=None, tags_requiring_auth=None, type=None):
        if dynamic_tags_json and not isinstance(dynamic_tags_json, str):
            raise TypeError("Expected argument 'dynamic_tags_json' to be a str")
        pulumi.set(__self__, "dynamic_tags_json", dynamic_tags_json)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if is_push_enabled and not isinstance(is_push_enabled, bool):
            raise TypeError("Expected argument 'is_push_enabled' to be a bool")
        pulumi.set(__self__, "is_push_enabled", is_push_enabled)
        if kind and not isinstance(kind, str):
            raise TypeError("Expected argument 'kind' to be a str")
        pulumi.set(__self__, "kind", kind)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if tag_whitelist_json and not isinstance(tag_whitelist_json, str):
            raise TypeError("Expected argument 'tag_whitelist_json' to be a str")
        pulumi.set(__self__, "tag_whitelist_json", tag_whitelist_json)
        if tags_requiring_auth and not isinstance(tags_requiring_auth, str):
            raise TypeError("Expected argument 'tags_requiring_auth' to be a str")
        pulumi.set(__self__, "tags_requiring_auth", tags_requiring_auth)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="dynamicTagsJson")
    def dynamic_tags_json(self) -> Optional[str]:
        """
        Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
        """
        return pulumi.get(self, "dynamic_tags_json")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource Id.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="isPushEnabled")
    def is_push_enabled(self) -> bool:
        """
        Gets or sets a flag indicating whether the Push endpoint is enabled.
        """
        return pulumi.get(self, "is_push_enabled")

    @property
    @pulumi.getter
    def kind(self) -> Optional[str]:
        """
        Kind of resource.
        """
        return pulumi.get(self, "kind")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource Name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="tagWhitelistJson")
    def tag_whitelist_json(self) -> Optional[str]:
        """
        Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
        """
        return pulumi.get(self, "tag_whitelist_json")

    @property
    @pulumi.getter(name="tagsRequiringAuth")
    def tags_requiring_auth(self) -> Optional[str]:
        """
        Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
        Tags can consist of alphanumeric characters and the following:
        '_', '@', '#', '.', ':', '-'. 
        Validation should be performed at the PushRequestHandler.
        """
        return pulumi.get(self, "tags_requiring_auth")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type.
        """
        return pulumi.get(self, "type")


class AwaitableListWebAppSitePushSettingsResult(ListWebAppSitePushSettingsResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return ListWebAppSitePushSettingsResult(
            dynamic_tags_json=self.dynamic_tags_json,
            id=self.id,
            is_push_enabled=self.is_push_enabled,
            kind=self.kind,
            name=self.name,
            tag_whitelist_json=self.tag_whitelist_json,
            tags_requiring_auth=self.tags_requiring_auth,
            type=self.type)


def list_web_app_site_push_settings(name: Optional[str] = None,
                                    resource_group_name: Optional[str] = None,
                                    opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableListWebAppSitePushSettingsResult:
    """
    Use this data source to access information about an existing resource.

    :param str name: Name of web app.
    :param str resource_group_name: Name of the resource group to which the resource belongs.
    """
    __args__ = dict()
    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:web/v20160801:listWebAppSitePushSettings', __args__, opts=opts, typ=ListWebAppSitePushSettingsResult).value

    return AwaitableListWebAppSitePushSettingsResult(
        dynamic_tags_json=__ret__.dynamic_tags_json,
        id=__ret__.id,
        is_push_enabled=__ret__.is_push_enabled,
        kind=__ret__.kind,
        name=__ret__.name,
        tag_whitelist_json=__ret__.tag_whitelist_json,
        tags_requiring_auth=__ret__.tags_requiring_auth,
        type=__ret__.type)
